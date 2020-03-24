import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    margin: theme.spacing(3, 0, 2),
  },
});

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.handleLoginButton = this.handleLoginButton.bind(this)
  }

  handleLoginButton() {
    this.props.onClickLogin();
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
              required
              fullWidth
              id="lname"
              label="Last Name"
              name="lname"
              autoComplete="lname"
              autoFocus
            />
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
              required
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
            
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Confpassword"
              label="Confirm Password"
              type="password"
              id="Confpassword"
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => this.handleLoginButton()}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Already have an account? Sign In"}
                </Link> 
              </Grid>
            </Grid>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SignUp);