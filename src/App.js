import React from 'react';

import SignIn from './SignIn';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import ChatPage from './pages/ChatPage';
import ShoppingListPage from './pages/ShoppingListPage';
import ToDoPage from './pages/ToDoPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#2699FB",
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      pageIndex: 0
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.a11yProps = this.a11yProps(this);
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  getKList = () =>{
    var list= document.getElementById("list");
    list.innerHTML = "<li> Protein </li>";
}

  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  handlePageChange = (event, newValue) => {
    if(this.state.isLoggedIn) {
      this.setState({
        pageIndex: newValue
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        {!this.state.isLoggedIn &&
          <SignIn onClickLogin={this.handleLogin} />
        }
        {this.state.isLoggedIn &&
            <div className={classes.root} >
                <AppBar position="static" className={classes.appBar} >
                    <Tabs value={this.state.pageIndex} onChange={this.handlePageChange} aria-label="simple tabs example">
                        <Tab label="Home" {...()=>this.a11yProps(0)} />
                        <Tab label="Chat" {...()=>this.a11yProps(1)} />
                        <Tab label="Calendar" {...()=>this.a11yProps(2)} />
                        <Tab label="TODO" {...()=>this.a11yProps(3)} />
                        <Tab label="Shopping List" {...()=>this.a11yProps(4)} />
                        <Tab label="Profile" {...()=>this.a11yProps(5)} />
                    </Tabs>
                </AppBar>
                <Router>
                    <TabPanel value={this.state.pageIndex} index={0}>
                        <Redirect exact to="/" />
                    </TabPanel>
                    <TabPanel value={this.state.pageIndex} index={1}>
                        <Redirect to="/chat" />
                    </TabPanel>
                        <TabPanel value={this.state.pageIndex} index={2}>
                    <Redirect to="/calendar" />
                        </TabPanel>
                    <TabPanel value={this.state.pageIndex} index={3}>
                        <Redirect to="/toDo" />
                    </TabPanel>
                    <TabPanel value={this.state.pageIndex} index={4}>
                        <Redirect to="/shoppingList" />
                    </TabPanel>
                    <TabPanel value={this.state.pageIndex} index={5}>
                        <Redirect to="/profile" />
                    </TabPanel>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/chat">
                            <ChatPage />
                        </Route>
                        <Route path="/calendar">
                            <CalendarPage />
                        </Route>
                        <Route path="/toDo">
                            <ToDoPage />
                        </Route>
                        <Route path="/shoppingList">
                            <ShoppingListPage />
                        </Route>
                        <Route path="/profile">
                            <ProfilePage />
                        </Route>
                    </Switch>
                </Router>
            </div>
        }
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
