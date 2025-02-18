import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/TextUtils/i)).toBeInTheDocument();
  });

  test('renders Navbar component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('toggles between light and dark mode', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const darkModeButton = screen.getByRole('button', { name: /Enable Dark Mode/i });
    fireEvent.click(darkModeButton);
    expect(document.body.style.backgroundColor).toBe('rgb(33, 37, 41)');
    
    const lightModeButton = screen.getByRole('button', { name: /Enable Light Mode/i });
    fireEvent.click(lightModeButton);
    expect(document.body.style.backgroundColor).toBe('white');
  });

  test('toggles purple mode', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const purpleModeButton = screen.getByRole('button', { name: /Enable Purple Mode/i });
    fireEvent.click(purpleModeButton);
    expect(document.body.style.backgroundColor).toBe('rgb(106, 90, 205)');
  });

  test('displays alert when shown', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // Trigger an action that should show an alert
    // For this test, we'll assume changing to dark mode shows an alert
    const darkModeButton = screen.getByRole('button', { name: /Enable Dark Mode/i });
    fireEvent.click(darkModeButton);

    // Check if the alert is displayed
    const alert = await screen.findByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent(/Dark mode has been enabled/i);
  });

  test('renders About component when navigating to /about', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    // Check if the About component is rendered
    expect(screen.getByText(/Analyze your text/i)).toBeInTheDocument();
  });

  test('renders TextForm component on home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    // Check if the TextForm component is rendered on the home route
    expect(screen.getByText(/Enter the text to analyze/i)).toBeInTheDocument();
  });
});