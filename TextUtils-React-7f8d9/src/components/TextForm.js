import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm({ mode, heading, showAlert }) {
    const [text, setText] = useState('');
    const [tempText, setTempText] = useState('');
    const [findWord, setFindWord] = useState('');
    const [replaceWord, setReplaceWord] = useState('');

    const handleUppercase = () => {
        setTempText(text);
        const newText = text.toUpperCase();
        setText(newText);
        showAlert("Text is converted to uppercase!", "success");
    };

    const handleLowercase = () => {
        setTempText(text);
        const newText = text.toLowerCase();
        setText(newText);
        showAlert("Text is converted to lowercase!", "success");
    };

    const handleSpeak = () => {
        const msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        showAlert("Speaking...", "success");
    };

    const handleUndo = () => {
        setText(tempText);
        showAlert("Last text retrieved!", "success");
    };

    const handleClear = () => {
        setTempText(text);
        setText('');
        showAlert("Text is cleared!", "success");
    };

    const handleOnChange = (event) => {
        setTempText(text);
        setText(event.target.value);
    };

    const handleReplace = () => {
        const newText = text.replace(findWord, replaceWord);
        setText(newText);
        showAlert("Text replaced successfully!", "success");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        showAlert("Text copied to clipboard!", "success");
    };

    const handleExtraSpaces = () => {
        const newText = text.split(/\s+/).filter(word => word.length > 0).join(' ');
        setText(newText);
        showAlert("Extra spaces removed from the text.", "success");
    };

    const getBtnStyle = () => {
        return mode === 'purple' ? { backgroundColor: '#59359a', color: "white" } : {};
    };

    const getTextStyle = () => {
        return mode === 'purple' ? { color: "#59359a" } : {};
    };

    return (
        <>
            <div>
                <h1 className={`text-${mode === 'dark' ? 'light' : 'dark'}`}>{heading}</h1>
                <div className="mb-3">
                    <textarea
                        className={`form-control text-${mode === 'dark' ? 'light' : 'dark'}`}
                        style={{ backgroundColor: mode === 'dark' ? '#6c757d' : 'white' }}
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button style={getBtnStyle()} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
                <button style={getBtnStyle()} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleUndo}>UNDO</button>
                <button style={getBtnStyle()} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleUppercase}>Convert to Uppercase</button>
                <button style={getBtnStyle()} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleLowercase}>Convert to Lowercase</button>
                <button style={getBtnStyle()} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>Speak</button>
                <button style={getBtnStyle()} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button style={getBtnStyle()} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div style={getTextStyle()} className={`container my-3 text-${mode === 'dark' ? 'light' : 'dark'}`}>
                <div className={`container py-5 border border-2 border-${mode === 'dark' ? 'light' : 'dark'}`}>
                    Find:
                    <input onChange={(e) => setFindWord(e.target.value)} className='mx-2 my-1' type="text" value={findWord} />
                    Replace:
                    <input onChange={(e) => setReplaceWord(e.target.value)} className='mx-2 my-2' type="text" value={replaceWord} />
                    <button style={getBtnStyle()} disabled={!findWord} className="btn btn-primary mx-1 my-1" onClick={handleReplace}>Replace</button>
                    <button style={getBtnStyle()} disabled={!findWord} className="btn btn-primary mx-1 my-1" onClick={() => { setFindWord(''); setReplaceWord(''); }}>Clear</button>
                </div>
                <h2 className='my-2'>Your text summary</h2>
                <p>{text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter(word => word.length > 0).length} Minutes needed</p>
                <h2>Preview</h2>
                <p>{text || "Nothing to preview!"}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    mode: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    showAlert: PropTypes.func.isRequired
};