import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import './IssueShow.css'



const IssueShow = props => {
    let issue = props.issues.find((issue) => {
        return issue.number === parseInt(props.match.params.id);
    });
    
    return (
        <>
            <div className='header'>
                <h4>{issue.title} {issue.number}</h4>
                <h5>'{issue.state}' {issue.user.login} opened this issue on {moment(issue.created_at).startOf().fromNow()}</h5>

            </div>
            <div>
                
            </div>
        
            <div className='body'>
                <ReactMarkdown source={issue.body}/>

            </div>
        </>

    )
    

}

export default IssueShow;