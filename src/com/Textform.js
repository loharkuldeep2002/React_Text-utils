import React, { useState } from 'react';

export default function Textform(props) {
    // To uppercase 
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText); // Corrected the typo here
        props.showAlert("Converted to uppercase!", "success");
    };
    // To lowercase
    const handleLoClick = () => {
        console.log("lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }
    // To clear-text
    const handleclearClick = () => {
        // console.log("lowercase was clicked");
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }
    // To copy text
    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    // To extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    };

    const [text, setText] = useState(' ');

    return (
        <>
            <div className="container mt-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="form-label fs-2 fw-medium">{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="mybox" rows="8" ></textarea>
                </div>
                <button className="btn btn-primary fw-bold ms-2" onClick={handleUpClick}> Convert to Uppercase </button>
                <button className="btn btn-primary fw-bold ms-2" onClick={handleLoClick}> Convert to Lowercase</button>
                <button className="btn btn-primary fw-bold ms-2" onClick={handleclearClick}> Clear-Text</button>
                <button className="btn btn-primary fw-bold ms-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary fw-bold ms-2" onClick={handleExtraSpaces}>Remove extra spaces</button>

            </div>
            <div className="container mt-5 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <div className='p-5'>
                    <p className='h4 mt-5 text-primary border d-inline m-2 p-4 fw-bold' style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'white' }}>{text.split(" ").length} words and {text.length} characters</p>
                    <p className='h4 text-primary border d-inline m-2 p-4 fw-bold' style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'white' }}>{0.008 * text.split(" ").length} Minutes Read</p>
                </div>
                <h1>Preview</h1>
                <p className='border fw-bold p-4'>{text.length > 0 ? text : "ENTER SOMETHING TO PRIVIEW IT HERE"}</p>
            </div>
        </>
    );
}
