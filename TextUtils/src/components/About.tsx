import React, { useMemo } from 'react';

interface AboutProps {
    mode: 'light' | 'dark' | 'purple';
    toggleDMode: () => void;
    toggleLMode: () => void;
    togglePMode: () => void;
}

const About: React.FC<AboutProps> = (props) => {
    const bkgstyle = useMemo(() => {
        return (mode: AboutProps['mode']) => {
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
    }, []);

    const accordionItemBorder = { border: props.mode === "light" ? '2px solid black' : '2px solid white' };

    const AccordionItem: React.FC<{ title: string; content: string; id: string }> = ({ title, content, id }) => (
        <div className="accordion-item" style={accordionItemBorder}>
            <h2 className="accordion-header" id={`heading${id}`}>
                <button 
                    className="accordion-button" 
                    type="button" 
                    style={bkgstyle(props.mode)} 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#collapse${id}`} 
                    aria-expanded={id === "One" ? "true" : "false"} 
                    aria-controls={`collapse${id}`}
                >
                    <strong>{title}</strong>
                </button>
            </h2>
            <div 
                id={`collapse${id}`} 
                className={`accordion-collapse collapse ${id === "One" ? "show" : ""}`} 
                aria-labelledby={`heading${id}`} 
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body" style={bkgstyle(props.mode)}>
                    {content}
                </div>
            </div>
        </div>
    );

    return (
        <div className="container" style={bkgstyle(props.mode)}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <AccordionItem 
                    id="One" 
                    title="Analyze your text" 
                    content="Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or" 
                />
                <AccordionItem 
                    id="Two" 
                    title="Free to use" 
                    content="TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit." 
                />
                <AccordionItem 
                    id="Three" 
                    title="Browser Compatible" 
                    content="This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc." 
                />
            </div>
        </div>
    );
};

export default About;