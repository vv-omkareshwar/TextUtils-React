import React, { useState } from 'react';

export default function TextForm({ mode, heading, showAlert }) {
    const [text, setText] = useState('');
    const [tempText, setTempText] = useState('');
    const [fWord, setfWord] = useState('');
    const [rWord, setrWord] = useState('');

    const handleUpClick = () => {
        setTempText(text);
        const newText = text.toUpperCase();
        setText(newText);
        showAlert("Text is converted to uppercase!", "success");
    };

    const speak = () => {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
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

    const handleLowClick = () => {
        setTempText(text);
        const newText = text.toLowerCase();
        setText(newText);
        showAlert("Text is converted to lowercase!", "success");
    };

    const handleOnChange = (event) => {
        setTempText(text);
        setText(event.target.value);
    };

    const handleReplace = () => {
        const newText = text.replace(fWord, rWord);
        setText(newText);
        showAlert("Text replaced successfully!", "success");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        showAlert("Text copied to clipboard!", "success");
    };

    const handleExtraSpaces = () => {
        const newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        showAlert("All extra spaces are removed from the text.", "success");
    };

    const btnStyle = (mode) => ({
        backgroundColor: mode === 'purple' ? '#59359a' : undefined,
        color: mode === 'purple' ? "white" : undefined
    });

    const textStyle = (mode) => ({
        color: mode === 'purple' ? "#59359a" : undefined
    });

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
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleUndo}>UNDO</button>
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button style={btnStyle(mode)} disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div style={textStyle(mode)} className={`container my-3 text-${mode === 'dark' ? 'light' : 'dark'}`}>
                <div className={`container py-5 border border-2 border-${mode === 'dark' ? 'light' : 'dark'}`}>
                    Find:
                    <input onChange={(e) => setfWord(e.target.value)} className='mx-2 my-1' type="text" value={fWord} />
                    Replace:
                    <input onChange={(e) => setrWord(e.target.value)} className='mx-2 my-2' type="text" value={rWord} />
                    <button style={btnStyle(mode)} disabled={!fWord} className="btn btn-primary mx-1 my-1" onClick={handleReplace}>Replace</button>
                    <button style={btnStyle(mode)} disabled={!fWord} className="btn btn-primary mx-1 my-1" onClick={() => { setfWord(''); setrWord(''); }}>Clear</button>
                </div>
                <h2 className='my-2'>Your text summary</h2>
                <p>{text.split(/\s+/).filter(element => element.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter(element => element.length !== 0).length} Minutes needed</p>
                <h2>Preview</h2>
                <p>{text || "Nothing to preview!"}</p>
            </div>
        </>
    );
}