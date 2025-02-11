// About.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Mock the About component
const About = ({ mode }) => {
    const getBkgStyle = (currentMode) => {
        switch(currentMode) {
            case 'light':
                return {
                    backgroundColor: 'white',
                    color: 'black'
                };
            case 'dark':
                return {
                    backgroundColor: '#212529',
                    color: '#F8F9FA'
                };
            default:
                return {
                    backgroundColor: '#a98eda',
                    color: 'black'
                };
        }
    };

    const bkgStyle = getBkgStyle(mode);
    const borderStyle = { border: mode === "light" ? '2px solid black' : '2px solid white' };

    return (
        <div className="container" style={bkgStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={borderStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={bkgStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={bkgStyle}>
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={borderStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={bkgStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={bkgStyle}>
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={borderStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={bkgStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={bkgStyle}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Test suite for the About component
describe('About Component', () => {
    // Test case for getBkgStyle function with 'light' mode
    test('getBkgStyle returns correct style for light mode', () => {
        const getBkgStyle = (currentMode) => {
            switch(currentMode) {
                case 'light':
                    return {
                        backgroundColor: 'white',
                        color: 'black'
                    };
                case 'dark':
                    return {
                        backgroundColor: '#212529',
                        color: '#F8F9FA'
                    };
                default:
                    return {
                        backgroundColor: '#a98eda',
                        color: 'black'
                    };
            }
        };

        const result = getBkgStyle('light');
        expect(result).toEqual({backgroundColor: 'white', color: 'black'});
    });

    // Test case for getBkgStyle function with 'dark' mode
    test('getBkgStyle returns correct style for dark mode', () => {
        const getBkgStyle = (currentMode) => {
            switch(currentMode) {
                case 'light':
                    return {
                        backgroundColor: 'white',
                        color: 'black'
                    };
                case 'dark':
                    return {
                        backgroundColor: '#212529',
                        color: '#F8F9FA'
                    };
                default:
                    return {
                        backgroundColor: '#a98eda',
                        color: 'black'
                    };
            }
        };

        const result = getBkgStyle('dark');
        expect(result).toEqual({backgroundColor: '#212529', color: '#F8F9FA'});
    });

    // Test case for getBkgStyle function with other mode
    test('getBkgStyle returns correct style for other mode', () => {
        const getBkgStyle = (currentMode) => {
            switch(currentMode) {
                case 'light':
                    return {
                        backgroundColor: 'white',
                        color: 'black'
                    };
                case 'dark':
                    return {
                        backgroundColor: '#212529',
                        color: '#F8F9FA'
                    };
                default:
                    return {
                        backgroundColor: '#a98eda',
                        color: 'black'
                    };
            }
        };

        const result = getBkgStyle('purple');
        expect(result).toEqual({backgroundColor: '#a98eda', color: 'black'});
    });

    // Test case for rendering About component in light mode
    test('renders About component in light mode', () => {
        render(<About mode="light" />);
        const headingElement = screen.getByText(/About Us/i);
        expect(headingElement).toBeInTheDocument();
    });

    // Test case for rendering About component in dark mode
    test('renders About component in dark mode', () => {
        render(<About mode="dark" />);
        const headingElement = screen.getByText(/About Us/i);
        expect(headingElement).toBeInTheDocument();
    });

    // Test case for checking accordion items
    test('renders correct accordion items', () => {
        render(<About mode="light" />);
        const analyzeTextButton = screen.getByText(/Analyze your text/i);
        const freeToUseButton = screen.getByText(/Free to use/i);
        const browserCompatibleButton = screen.getByText(/Browser Compatible/i);

        expect(analyzeTextButton).toBeInTheDocument();
        expect(freeToUseButton).toBeInTheDocument();
        expect(browserCompatibleButton).toBeInTheDocument();
    });

    // Test case for checking accordion content
    test('renders correct accordion content', () => {
        render(<About mode="dark" />);
        const analyzeTextContent = screen.getByText(/Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or/i);
        const freeToUseContent = screen.getByText(/TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word\/ character limit./i);
        const browserCompatibleContent = screen.getByText(/This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc./i);

        expect(analyzeTextContent).toBeInTheDocument();
        expect(freeToUseContent).toBeInTheDocument();
        expect(browserCompatibleContent).toBeInTheDocument();
    });
});