import React, { useState } from 'react'

function MainForm() {

    const [text, setText] = useState("Enter Text here");
    let chars =  text.replaceAll(" ","").length;
    let words  = text.split(" ").length;

    const toUpper = () => {
        setText(text.toUpperCase())
    }

    const toLower = () => {
        setText(text.toLowerCase())
    }

    const rmvWhiteSpace = () =>{
        setText(text.replaceAll(" ",""))
    }

    const extractNumbers =() =>{
        setText(text.split(" ").filter(Number).join(" "))
    }

    const count_var  = (param) => {
       let  count  = text.split(param).length  - 1;
       return count;

    }
    const handleEvent = (event) => {
        console.log("on change")
        setText(event.target.value)
    }
    return (
        <div className='container mt-5'>

            <div className="mb-3">
         <p className='text-center'> <label htmlFor="textform" className="form-label"><h3>Enter Your Text For analysis</h3></label> </p>
                <textarea className="form-control" value={text} onChange={handleEvent} id="textform" rows="5" cols="2"></textarea>
            </div>
            <button type="button" onClick={toUpper} className="btn btn-outline-success px-3 mx-2">To UPPERCASE </button>
            <button type="button" onClick={toLower} className="btn btn-outline-success px-3 mx-2">to lowercase </button>
            <button type="button" onClick={rmvWhiteSpace} className="btn btn-outline-success px-3 mx-2">Remove WhiteSpace </button>
            <button type="button" onClick={extractNumbers} className="btn btn-outline-success px-3 mx-2">Extract Numbers </button>
            <div className='container mt-3'>
                <h1>Your Text Summary </h1>
               <b> {words} </b> words || <b> {chars} </b> characters 
               <p> <b> {count_var("?")} </b> question marks ||  <b> {count_var("!")} </b> Exclamation marks</p>
              <p> {0.004 * words} MINUTE Reads || {0.004 * 60 * words} Seconds Read</p> 

            </div>
        </div>


    )
}

export default MainForm
