import React from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import Splash from './Splash';
import moment from 'moment';
import './Issues.css'


const Issues = props => (
    <>
        <div className='splash'>
            <h4>What to submit an issue to facebook/react</h4>
            <p>If you have a bug or an idea, read the contributing guidelines before opening an issue</p>
            <p>If you're ready to tackle some open issues, we've collected some good first issues for you.</p>
        </div>
        <div id='numberIssues'>
            {props.issues.length} Open Issues
        </div>
        <div>
            {props.issues.map((issue, i) => (
                <div className='issue'>
                    <Link to={`/issues/${issue.number}`}> {' '}
                    <h4 key={i}>{issue.title} #{issue.number}</h4>
                    </Link>
                    <p>'{issue.state}' {issue.user.login} opened this issue on {moment(issue.created_at).startOf().fromNow()}</p>
                    
                </div>
            ))}
        </div>


    </>
        
)




export default Issues;
