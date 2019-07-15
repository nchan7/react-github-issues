import React from 'react';
import {
    Link
  } from 'react-router-dom';

const Splash = props => (
    <>
        <div className='splash'>
            <h3>👋 Want to submit an issue to book of faces/reactor</h3>
            <p>If you have a bug or an idea, read the contributing guidelines before opening an issue</p>
            <p>If you're ready to tackle some open issues, we've collected some good first issues for you.</p>
        </div>
        <Link to="/issues"> <button>Go to Issues</button></Link>
    
    </>
)

export default Splash;