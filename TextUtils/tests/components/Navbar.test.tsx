import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../src/components/Navbar';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  Link: ({ to, children, className }: { to: string; children: React.ReactNode; className: string }) => (
    <a href={to} className={className}>{children}</a>
  ),
}));

// Mock PropTypes
const PropTypes = {
  string: { isRequired: jest.fn() },
  func: { isRequired: jest.fn() },
  oneOf: jest.fn().mockReturnValue({ isRequired: jest.fn() }),
};

// Test cases
describe('Navbar Component', () => {
  const mockToggleFunction = jest.fn();

  const testCases = [
    {
      title: 'TextUtils',
      aboutText: 'About Us',
      mode: 'light' as const,
      toggleLMode: mockToggleFunction,
      toggleDMode: mockToggleFunction,
      togglePMode: mockToggleFunction,
      expected: "Rendered Navbar with light mode, title 'TextUtils', and 'About Us' link"
    },
    {
      title: 'MyApp',
      aboutText: 'Info',
      mode: 'dark' as const,
      toggleLMode: mockToggleFunction,
      toggleDMode: mockToggleFunction,
      togglePMode: mockToggleFunction,
      expected: "Rendered Navbar with dark mode, title 'MyApp', and 'Info' link"
    },
    {
      title: 'TestApp',
      aboutText: 'Help',
      mode: 'purple' as const,
      toggleLMode: mockToggleFunction,
      toggleDMode: mockToggleFunction,
      togglePMode: mockToggleFunction,
      expected: "Rendered Navbar with purple mode, title 'TestApp', and 'Help' link"
    }
  ];

  test.each(testCases)('renders Navbar correctly', (testCase) => {
    render(<Navbar {...testCase} />);

    expect(screen.getByText(testCase.title)).toBeInTheDocument();
    expect(screen.getByText(testCase.aboutText)).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();

    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveClass(`navbar-${testCase.mode === 'light' ? 'light' : 'dark'}`);
    expect(navElement).toHaveClass(`bg-${testCase.mode}`);

    if (testCase.mode === 'purple') {
      expect(navElement).toHaveStyle('background-color: #432874');
      expect(navElement).toHaveStyle('color: white');
    }

    // This is a simplification of the expected output, as we can't easily check the exact rendering
    console.log(testCase.expected);
  });
});

describe('navstyle function', () => {
  const testCases = [
    { mode: 'light' as const, expected: {} },
    { mode: 'dark' as const, expected: {} },
    { mode: 'purple' as const, expected: { backgroundColor: '#432874', color: 'white' } }
  ];

  test.each(testCases)('returns correct style for $mode mode', ({ mode, expected }) => {
    const result = navstyle(mode);
    expect(result).toEqual(expected);
  });
});