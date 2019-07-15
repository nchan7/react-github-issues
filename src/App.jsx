import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Issues from './Issues'
import IssueShow from './IssueShow'
import Splash from './Splash'

class App extends React.Component {
  state = {
    issues: []
  }

  componentDidMount() {
      axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
          .then(result => {
              let issues = result.data
              this.setState({
                  issues
              })
          })
  }

  render() {
    const issueCopy = Array.from(this.state.issues);

    return (
      <Router>
        <nav>
          <Link className="link" to="/">🏠</Link> {' '}
          <input type='text' placeholder="Search or jump to..."/>
          <Link className="link" to="/pull_requests"> Pull requests</Link> {' '}
          <Link className="link" to="/issues"> Issues</Link> {' '}
          <Link className="link" to="/marketplace"> Marketplace</Link> {' '}
          <Link className="link" to="/explore"> Explore</Link> {' '}
        </nav>
        <Route exact path='/' component={Splash} />
        <Route exact path='/issues' 
                      render={(props) => <Issues issues={issueCopy} />}/> 
        <Route exact path='/issues/:id'
                     render={(props) => <IssueShow issues={issueCopy} {...props} />} />       
        
               {/* render={(props) => <IssuesShow procedures={this.state.procedures} {...props} />} /> */}
      </Router>
    );
  }
}

export default App;
