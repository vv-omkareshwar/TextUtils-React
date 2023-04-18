import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
         setTempText(text);
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        //console.log(tempText)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    
    const handelundo = () =>{
        setTempText(text);
        setText(tempText)
        console.log(tempText)
    }
    const handleonclear = () =>{
        setTempText(text);
        let newText = " ";
        setText(newText)
        console.log(tempText)
    }

    const handleLowClick = () =>{
         setTempText(text);
        let newText = text.toLowerCase();
        setText(newText)
        console.log(tempText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setTempText(text);
        setText(event.target.value)
        //console.log(tempText)
    }

    const handlereplace = () =>{
        let newText =text.replace(fWord,rWord);
        console.log(newText)
        setText(newText)
    }

    const handlefWord = (event) =>{
        setfWord(event.target.value)
    }

    const handlerWord = (event) =>{
        setrWord(event.target.value)
    }

    const [text, setText] = useState(''); 
    const [tempText,setTempText] = useState('');
    const [fWord, setfWord] = useState("");
    const [rWord, setrWord] = useState("");
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div> 
                <h1>{props.heading}</h1>
                <div className="mb-3"> 
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleonclear}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handelundo}>UNDO</button>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={speak}> Speak </button>
            </div>

            <div className="container my-3 ">
                <div className="container py-5 border">
                    Find word : 
                    <input onChange={handlefWord} className='mx-2' type="text" value={fWord}/>
                    Replace word :
                    <input onChange={handlerWord} className='mx-2' type="text" value={rWord} />
                    <button className="btn btn-primary mx-1" onClick={handlereplace}> Replace </button>
                </div>
                <h2>Yout text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes needed</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}