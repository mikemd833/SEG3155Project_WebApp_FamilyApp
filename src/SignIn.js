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
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
        </Router>
        {new Date().getFullYear()}
        {'.'}
    </Typography>
  );
}

function SignInPage(props) {

    function handleLoginButton() {
        props.handleLogin();
      }

    return (
        <div className={props.classes.paper}>
        <Avatar className={props.classes.avatar}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign in
        </Typography>
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
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            />
            <Button
            fullWidth
            variant="contained"
            color="primary"
            className={props.classes.submit}
            onClick={() => handleLoginButton()}
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
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state= ({
            isSigningIn: true,
            isSigningUp: false,
            isForgetPassword: false
        });

    }

    handleSignUpLink = () => {
        console.log("HandleSignUpLink");
        this.setState({ 
            isSigningIn: false,
            isSigningUp: true,
            isForgetPassword: false
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
                <Router>
                    <Switch>
                        <Route exact path ="/">
                            <SignInPage classes={classes} handleLogin={()=>this.props.onClickLogin()} />
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
                        </Grid>
                    }
                    {/*The Links to display on the signing up page*/}
                    {this.state.isSigningUp &&
                        <Grid container>
                            <Grid item xs>
                                <Link to="/" variant="body2">
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