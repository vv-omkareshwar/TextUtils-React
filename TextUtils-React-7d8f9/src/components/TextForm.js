import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className={`text-3xl font-bold mb-4 ${props.mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>{props.heading}</h1>
                <div className="mb-4">
                    <textarea 
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={text} 
                        onChange={handleOnChange} 
                        style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}}
                        rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container mx-auto px-4 mt-4">
                <h2 className={`text-2xl font-bold mb-2 ${props.mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>Your text summary</h2>
                <p className={`${props.mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                    {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters
                </p>
                <p className={`${props.mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                    {0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read
                </p>
                <h2 className={`text-2xl font-bold mt-4 mb-2 ${props.mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>Preview</h2>
                <p className={`${props.mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                    {text.length > 0 ? text : "Nothing to preview!"}
                </p>
            </div>
        </>
    )
}