import React from 'react'

function Contacts() {
    return (
        <div className='container mt-5'>
            <div className="mb-3">
                <label htmlFor="UserName" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="UserName" placeholder="Enter your name .." />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Enter your Email Address</label>
                <input className="form-control" id="email" placeholder='abc@gmail.com' />
            </div>
            <div className="mb-3">
                <label htmlFor="msg" className="form-label">Enter your message</label>
                <textarea className="form-control" id="msg" rows="3" placeholder='I want to ...'></textarea>
            </div>
            <button type="button" className="btn btn-outline-success" >Submit</button>
        </div>
    )
}

export default Contacts
