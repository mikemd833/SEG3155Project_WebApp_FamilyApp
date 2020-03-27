import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignUpPage from './pages/SignUpPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Router>
            <Link to="/" color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
        </Router>
        {new Date().getFullYear()}
        {'.'}
    </Typography>
  );
}

function SignInPage(props) {

    return (
        <div className={props.classes.paper}>
        <Avatar className={props.classes.avatar}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign in
        </Typography>
            {/* Initial State of Email */}
            {props.isEmailFilled &&
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
            }
            {/* If Email is not filled */}
            {!props.isEmailFilled &&
                <TextField
                    error
                    helperText="Please enter your email."
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
            }
            {/* Initial State of Password */}
            {props.isPasswordFilled &&
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            }
            {/* Password is not filled*/}
            {!props.isPasswordFilled &&
                <TextField
                    error
                    helperText="Please enter your password."
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            }
            
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={props.classes.submit}
                onClick={() => props.handleLogin(document.getElementById('email').value, document.getElementById('password').value)}
            >
                Sign In
            </Button>
        </div>
    );
}

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    backgroundColor: "#7FC4FD",
    margin: theme.spacing(3, 0, 2),
    '&:hover': {
        backgroundColor: "#2699FB",
    }
  },
});

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state= ({
            isSigningIn: true,
            isSigningUp: false,
            isForgetPassword: false,
            isPasswordFilled: "Initial",
            isEmailFilled: "Initial"
        });

    }

    componentDidUpdate(prevProps, prevState) {
        //If all correct, redirect to home page.
        if(this.state.isEmailFilled === true && this.state.isPasswordFilled === true) {
            this.props.onClickLogin()
        }
    }

    handleSignUpLink = () => {
        this.setState({ 
            isSigningIn: false,
            isSigningUp: true,
            isForgetPassword: false
        });
    }

    handleSignInLink = () => {
        this.setState({ 
            isSigningIn: true,
            isSigningUp: false,
            isForgetPassword: false
        });
    }

    handleValidation = (email, password) => {
        // Check Email
        if(email.trim() === "") {
            this.setState({
                isEmailFilled: false
            })
        } else {
            this.setState({
                isEmailFilled: true
            })
        }
        // Check Password
        if(password.trim() === ""){
            this.setState({
                isPasswordFilled: false
            });
        } else {
            this.setState({
                isPasswordFilled: true
            })
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
                <Router>
                    <Switch>
                        <Route exact path ="/">
                            <SignInPage
                                classes={classes} 
                                handleLogin={this.handleValidation} 
                                isEmailFilled={this.state.isEmailFilled}
                                isPasswordFilled={this.state.isPasswordFilled}
                            />
                        </Route>
                        <Route path="/signUp">
                            <SignUpPage />
                        </Route>
                    </Switch>
                    {/*The Links to display on the signing in page*/}
                    {this.state.isSigningIn &&
                        <Grid container>
                            <Grid item xs>
                                <Link to="/forgotPassword" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signUp" onClick={this.handleSignUpLink} variant="body2">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={() => this.props.onClickLogin()}
                            >
                                / Developer
                            </Button>
                        </Grid>
                    }
                    {/*The Links to display on the signing up page*/}
                    {this.state.isSigningUp &&
                        <Grid container>
                            <Grid item xs>
                                <Link to="/" onClick={this.handleSignInLink} variant="body2">
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    }
                </Router>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        );
    }
}

export default withStyles(styles, { withTheme: true })(SignIn);