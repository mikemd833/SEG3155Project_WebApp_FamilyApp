import React from 'react';
import logo from './logo.svg';
import SignIn from './SignIn';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn && 
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        }
        {!this.state.isLoggedIn &&
          <SignIn onClickLogin={this.handleLogin} />
        }
      </div>
    );
  }
}

export default App;
