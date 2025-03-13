import React, { useState } from 'react';

interface TextFormProps {
    heading: string;
    mode: string;
    showAlert: (message: string, type: string) => void;
}

export default function TextForm(props: TextFormProps) {
    const [text, setText] = useState<string>('');
    const [tempText, setTempText] = useState<string>('');
    const [fWord, setfWord] = useState<string>('');
    const [rWord, setrWord] = useState<string>('');

    const handleUpClick = () => {
        setTempText(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to uppercase.!!!", "success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking....", "success");
    }

    const handelundo = () => {
        setTempText(text);
        setText(tempText);
        console.log(tempText);
        props.showAlert("Last text retrieved..!!!", "success");
    }

    const handleonclear = () => {
        setTempText(text);
        let newText = " ";
        setText(newText);
        console.log(tempText);
        props.showAlert("Text is cleared!!!", "success");
    }

    const handleLowClick = () => {
        setTempText(text);
        let newText = text.toLowerCase();
        setText(newText);
        console.log(tempText);
        props.showAlert("Text is converted to lowercase..!!!", "success");
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTempText(text);
        setText(event.target.value);
    }

    const handlereplace = () => {
        let newText = text.replace(fWord, rWord);
        console.log(newText);
        setText(newText);
        props.showAlert("Text Replaced successfully.!!!", "success");
    }

    const handlefWord = (event: React.ChangeEvent<HTMLInputElement>) => {
        setfWord(event.target.value);
    }

    const handlerWord = (event: React.ChangeEvent<HTMLInputElement>) => {
        setrWord(event.target.value);
    }

    const handleRClear = () => {
        setfWord("");
        setrWord("");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard.!!!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All Extra spaces are removed from the text.", "success");
    }

    const btnstyle = (mode: string): React.CSSProperties => {
        if (mode === 'purple') {
            return {
                backgroundColor: '#59359a',
                color: "white"
            }
        }
        return {};
    }

    const textstyle = (mode: string): React.CSSProperties => {
        if (mode === 'purple') {
            return {
                color: "#59359a"
            }
        }
        return {};
    }

    return (
        <>
            <div>
                <h1 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className={`form-control text-${props.mode === 'dark' ? 'light' : 'dark'}`}
                        style={{ backgroundColor: props.mode === 'dark' ? '#6c757d' : 'white' }}
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows={8}
                    ></textarea>
                </div>
                <button style={btnstyle(props.mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleonclear}>Clear</button>
                <button style={btnstyle(props.mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelundo}>UNDO</button>
                <button style={btnstyle(props.mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button style={btnstyle(props.mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button style={btnstyle(props.mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={speak}> Speak </button>
                <button style={btnstyle(props.mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button style={btnstyle(props.mode)} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div style={textstyle(props.mode)} className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <div className={`container py-5 border border-2 border-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    Find :
                    <input onChange={handlefWord} className='mx-2 my-1' type="text" value={fWord} />
                    Replace :
                    <input onChange={handlerWord} className='mx-2 my-2' type="text" value={rWord} />
                    <button style={btnstyle(props.mode)} disabled={fWord.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlereplace}> Replace </button>
                    <button style={btnstyle(props.mode)} disabled={fWord.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRClear}> Clear </button>
                </div>
                <h2 className='my-2'>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes needed</p>
                <h2>Preview</h2>
                <p>{text === "" ? "Nothing to preview.!!" : text}</p>
            </div>
        </>
    )
}