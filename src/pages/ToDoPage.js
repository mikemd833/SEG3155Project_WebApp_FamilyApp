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
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
    submit: {
     backgroundColor:'#2699fb',
     marginTop: theme.spacing(4),
    },
      paperTitle: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
      },
      paperLeft: {
          padding: theme.spacing(2),
          marginBottom:5,
          textAlign: 'center',
          color: theme.palette.text.secondary,
          height: 700,
          width: 200,
      },
      paperRight: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
          height: 300,
      },
    });
class ToDoPage extends React.Component {
    constructor(props){
        super(props);
        this.getKList=this.getKList.bind(this);
        this.getMList=this.getMList.bind(this);
        this.getWList=this.getWList.bind(this);
    }
    getKList(){
        var list = document.getElementById("list");
        list.innerHTML="<li>Take out the garbage</li><li>Clean the kitchen</li><li>Finish database A2</li>"}
    getMList(){
        var list = document.getElementById("list");
        list.innerHTML="<li>Clean living room</li><li>Shovel the snow</li><li>Complete lab report</li><li>feed the cat</li>"
    }
    getWList(){
        var list = document.getElementById("list");
        list.innerHTML="<li>Take the dog to the vet</li><li>Grocery shopping</li><li>Study for SEG final</li>"
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={1} sm={12} >
                    <Grid item sm={3}>
                        <Paper style ={{padding:20, marginTop:10, marginBottom:10,}}>
                            Family Members
                        <div className = {classes.buttons}>
                            <Button
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                                onClick={() => this.getKList()}
                            >
                            Karim
                            </Button>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
                                    onClick={() => this.getMList()}
                                >
                                Mike
                                </Button>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
                                    onClick={() => this.getWList()}
                                >
                                Matt
                                </Button>
                        </div>
                            
                        </Paper>
                    </Grid>
                    <Grid item sm={7}>
                        <Paper style={{padding:20, marginTop:10, marginBottom:10,height:700}}>
                            To Do
                            <font size="4">
                                    <ul id="list" style={{overflow:"auto"}}>
                                    </ul>
                            </font>
                        </Paper>
                    </Grid>
                </Grid>
                
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ToDoPage);