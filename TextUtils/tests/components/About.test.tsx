// tests/components/About.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About, { bkgstyle } from '../../src/components/About';

describe('About Component', () => {
  const renderAbout = (mode: 'light' | 'dark' | 'purple') => {
    return render(<About mode={mode} />);
  };

  describe('About component rendering', () => {
    it('should render "About Us" title in light mode', () => {
      renderAbout('light');
      expect(screen.getByText('About Us')).toBeInTheDocument();
    });

    it('should render "About Us" title in dark mode', () => {
      renderAbout('dark');
      expect(screen.getByText('About Us')).toBeInTheDocument();
    });

    it('should render "About Us" title in purple mode', () => {
      renderAbout('purple');
      expect(screen.getByText('About Us')).toBeInTheDocument();
    });

    it('should render correct accordion items', () => {
      renderAbout('light');
      expect(screen.getByText('Analyze your text')).toBeInTheDocument();
      expect(screen.getByText('Free to use')).toBeInTheDocument();
      expect(screen.getByText('Browser Compatible')).toBeInTheDocument();
    });

    it('should render correct accordion content', () => {
      renderAbout('dark');
      expect(screen.getByText(/Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or/)).toBeInTheDocument();
      expect(screen.getByText(/TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word\/ character limit./)).toBeInTheDocument();
      expect(screen.getByText(/This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc./)).toBeInTheDocument();
    });
  });

  describe('bkgstyle function', () => {
    it('should return correct style for light mode', () => {
      const style = bkgstyle('light');
      expect(style).toEqual({
        backgroundColor: 'white',
        color: 'black'
      });
    });

    it('should return correct style for dark mode', () => {
      const style = bkgstyle('dark');
      expect(style).toEqual({
        backgroundColor: '#212529',
        color: '#F8F9FA'
      });
    });

    it('should return correct style for purple mode', () => {
      const style = bkgstyle('purple');
      expect(style).toEqual({
        backgroundColor: '#a98eda',
        color: 'black'
      });
    });
  });
});

// src/components/About.tsx

export const bkgstyle = (mode: 'light' | 'dark' | 'purple') => {
  if (mode === 'light') {
    return {
      backgroundColor: 'white',
      color: 'black'
    };
  } else if (mode === 'dark') {
    return {
      backgroundColor: '#212529',
      color: '#F8F9FA'
    };
  } else {
    return {
      backgroundColor: '#a98eda',
      color: 'black'
    };
  }
};

const About: React.FC<{ mode: 'light' | 'dark' | 'purple' }> = (props) => {
  return (
    <div className="container" style={bkgstyle(props.mode)}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{border: props.mode === "light" ? '2px solid black' : '2px solid white'}}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={bkgstyle(props.mode)} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={bkgstyle(props.mode)}>
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{border: props.mode === "light" ? '2px solid black' : '2px solid white'}}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={bkgstyle(props.mode)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={bkgstyle(props.mode)}>
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{border: props.mode === "light" ? '2px solid black' : '2px solid white'}}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={bkgstyle(props.mode)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={bkgstyle(props.mode)}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;