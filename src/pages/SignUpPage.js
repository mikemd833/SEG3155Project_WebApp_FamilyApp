import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  checks: {
    display: 'flex',
    width:'100%'
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

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            isFirstNameFilled: "Initial",
            isEmailFilled: "Initial",
            isEmailCorrectFormat: "Initial",
            isPasswordFilled: "Initial",
            isPasswordMatch: "Initial",
            passwordErrorMsg: "",
            emailErrorMsg:""
        });
    }

    validationHandler(fname, email, password1, password2) {
        // fname validation
        if(fname.trim() !== "") {
            this.setState({
                isFirstNameFilled: true
            });
        } else {
            this.setState({
                isFirstNameFilled: false
            });
        }
        // email validation filled step 1
        if(email.trim() !== "") {
            this.setState({
                isEmailFilled: true
            });
        } else {
            this.setState({
                emailErrorMsg: "Please enter your email.",
                isEmailFilled: false,
                isEmailCorrectFormat: false
            });
        }
        // email validation format step 2
        if(email.trim() !== "" && this.validateEmail(email)) {
            this.setState({
                isEmailCorrectFormat: true
            });
        } else if (email.trim() !== "") {
            this.setState({
                emailErrorMsg: "The email was not in correct format. email@domain.com",
                isEmailFilled: false,
                isEmailCorrectFormat: false
            });
        } else {
            this.setState({
                isEmailCorrectFormat: "Initial"
            })
        }
        // password1 validation filled step 1
        if(password1.trim() !== "") {
            this.setState({
                isPasswordFilled: true
            });
        } else {
            this.setState({
                passwordErrorMsg: "Please enter a password.",
                isPasswordFilled: false,
                isPasswordMatch: false
            });
        }
        // passwords validation match step 2
        if(password1.trim() !== "" && password1 === password2) {
            this.setState({
                isPasswordMatch: true
            });
        } else if(password1.trim() !== "") {
            this.setState({
                passwordErrorMsg: "The passwords did not match.",
                isPasswordMatch: false,
                isPasswordFilled: false
            });
        }
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        const { classes } = this.props;
        return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                    
                <div className={classes.checks}>
                    {/* First name initial state */}
                    {this.state.isFirstNameFilled &&
                        <TextField
                        display="block"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="fname"
                        label="First Name"
                        name="fname"
                        autoComplete="fname"
                        autoFocus
                    />
                    }
                    {/* First name not filled error */}
                    {!this.state.isFirstNameFilled &&
                        <TextField
                            error
                            helperText="Please enter your first name."
                            display="block"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="fname"
                            label="First Name"
                            name="fname"
                            autoComplete="fname"
                            autoFocus
                        />
                    }
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Parent"
                        display="block"
                    />
                </div>
                <TextField
                    variant="outlined"
                    margin="normal"
                    margin-left='25px'
                    fullWidth
                    id="lname"
                    label="Last Name"
                    name="lname"
                    autoComplete="lname"
                    autoFocus
                />
                {/* Email Initial State */}
                {this.state.isEmailFilled &&
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
                {/* Email error render */}
                {!this.state.isEmailFilled &&
                    <TextField
                        error
                        helperText={this.state.emailErrorMsg}
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
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                /> 
                    
                <div className={classes.checks}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="familyID"
                        label="Family ID"
                        name="familyID"
                        autoComplete="familyID"
                        autoFocus
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Existing"
                    />
                </div>
                {/* Initial State Password */}
                {this.state.isPasswordFilled &&
                    <div>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password1"
                            autoComplete="current-password"
                        /> 
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Confpassword"
                            label="Confirm Password"
                            type="password"
                            id="password2"
                            autoComplete="current-password"
                        />
                    </div>   
                }
                {/* Password error render */}
                {!this.state.isPasswordFilled && !this.state.isPasswordMatch &&
                    <div>
                        <TextField
                            error
                            helperText={this.state.passwordErrorMsg}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password1"
                            autoComplete="current-password"
                        /> 
                        <TextField
                            error
                            helperText={this.state.passwordErrorMsg}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Confpassword"
                            label="Confirm Password"
                            type="password"
                            id="password2"
                            autoComplete="current-password"
                        />
                    </div>   
                }
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => this.validationHandler(
                        document.getElementById("fname").value,
                        document.getElementById("email").value,
                        document.getElementById("password1").value,
                        document.getElementById("password2").value,
                    )}
                >
                    Sign Up
                </Button>
            </div>
        </Container>
        );
  }
}

export default withStyles(styles, { withTheme: true })(SignUp);