import React from 'react';
import PropTypes from 'prop-types';

/**
 * About component for displaying information about the TextUtils application.
 * @param {Object} props - Component props
 * @param {string} props.mode - The current mode (light, dark, or custom)
 */
const About = ({ mode }) => {
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
                <AccordionItem 
                    id="One"
                    title="Analyze your text"
                    content="Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or"
                    bkgStyle={bkgStyle}
                    borderStyle={borderStyle}
                    expanded={true}
                />
                <AccordionItem 
                    id="Two"
                    title="Free to use"
                    content="TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."
                    bkgStyle={bkgStyle}
                    borderStyle={borderStyle}
                />
                <AccordionItem 
                    id="Three"
                    title="Browser Compatible"
                    content="This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc."
                    bkgStyle={bkgStyle}
                    borderStyle={borderStyle}
                />
            </div>
        </div>
    );
};

About.propTypes = {
    mode: PropTypes.string.isRequired
};

/**
 * AccordionItem component for rendering individual accordion items.
 * @param {Object} props - Component props
 */
const AccordionItem = ({ id, title, content, bkgStyle, borderStyle, expanded = false }) => (
    <div className="accordion-item" style={borderStyle}>
        <h2 className="accordion-header" id={`heading${id}`}>
            <button 
                className={`accordion-button${expanded ? '' : ' collapsed'}`}
                type="button" 
                style={bkgStyle} 
                data-bs-toggle="collapse" 
                data-bs-target={`#collapse${id}`} 
                aria-expanded={expanded} 
                aria-controls={`collapse${id}`}
            >
                <strong>{title}</strong>    
            </button>
        </h2>
        <div 
            id={`collapse${id}`} 
            className={`accordion-collapse collapse${expanded ? ' show' : ''}`}
            aria-labelledby={`heading${id}`} 
            data-bs-parent="#accordionExample"
        >
            <div className="accordion-body" style={bkgStyle}>
                {content}
            </div>
        </div>
    </div>
);

AccordionItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    bkgStyle: PropTypes.object.isRequired,
    borderStyle: PropTypes.object.isRequired,
    expanded: PropTypes.bool
};

export default About;