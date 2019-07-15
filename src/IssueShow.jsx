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
                <h3>{issue.title} {issue.number}</h3>

            </div>
            <div className='user'>
                <h5>✅{issue.state.toUpperCase()} {issue.user.login} opened this issue {moment(issue.created_at).startOf().fromNow()}</h5>

            </div>
        
            <div className='body'>
                <ReactMarkdown source={issue.body}/>

            </div>
            <a href={`https://api.github.com/repos/facebook/react/issues/${issue.number}/comments`}>Comments! <span className="commentsShow">{issue.comments}💬</span></a>
        </>

    )
    

}

export default IssueShow;