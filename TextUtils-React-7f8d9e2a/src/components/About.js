import React from 'react';

/**
 * About component for displaying information about the TextUtils application.
 * @param {Object} props - Component props
 * @param {string} props.mode - The current mode (light, dark, or custom)
 */
export default function About({ mode }) {
    
    /**
     * Determines the background style based on the current mode.
     * @param {string} currentMode - The current mode
     * @returns {Object} The style object for background and text color
     */
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
                        <button 
                            className="accordion-button" 
                            type="button" 
                            style={bkgStyle} 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne" 
                            aria-expanded="true" 
                            aria-controls="collapseOne"
                        >
                            <strong>Analyze your text</strong>    
                        </button>
                    </h2>
                    <div 
                        id="collapseOne" 
                        className="accordion-collapse collapse show" 
                        aria-labelledby="headingOne" 
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={bkgStyle}>
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={borderStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button 
                            className="accordion-button collapsed" 
                            style={bkgStyle} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseTwo" 
                            aria-expanded="false" 
                            aria-controls="collapseTwo"
                        >
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div 
                        id="collapseTwo" 
                        className="accordion-collapse collapse" 
                        aria-labelledby="headingTwo" 
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={bkgStyle}>
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given
                            text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character
                            limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={borderStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button 
                            className="accordion-button collapsed" 
                            style={bkgStyle} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseThree" 
                            aria-expanded="false" 
                            aria-controls="collapseThree"
                        >
                            <strong>Browser Compatible</strong>    
                        </button>
                    </h2>
                    <div 
                        id="collapseThree" 
                        className="accordion-collapse collapse" 
                        aria-labelledby="headingThree" 
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={bkgStyle}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It
                            suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}