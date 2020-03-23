import React from 'react';

import SignIn from './SignIn';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import ShoppingListPage from './pages/ShoppingListPage';
import ToDoPage from './pages/ToDoPage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        {!this.state.isLoggedIn &&
          <SignIn onClickLogin={this.handleLogin} />
        }
        {this.state.isLoggedIn &&
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/calendar">Calendar</Link>
                </li>
                <li>
                  <Link to="/chat">Chat</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/shoppingList">Shopping List</Link>
                </li>
                <li>
                  <Link to="/toDo">TODO</Link>
                </li>
              </ul>
            </nav>
            <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/calendar">
              <CalendarPage />
            </Route>
            <Route path="/chat">
              <ChatPage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/shoppingList">
              <ShoppingListPage />
            </Route>
            <Route path="/toDo">
              <ToDoPage />
            </Route>
          </Switch>
        </Router>
        }
      </div>
    );
  }
}

export default App;
