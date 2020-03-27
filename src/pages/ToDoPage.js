import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



// Layout Imports
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
    mainPaperLeft: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxHeight: 730,
    },
    subPaperLeft: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        overflow: 'auto',
        maxHeight: 660,
    },
    Button: {
        padding: theme.spacing(2),
        textAlign: 'center',
        fontSize: 26,
        background: '#7FC4FD',
        height: '10%',
        width: '90%',
        color: 'white',
        '&:hover': {
            backgroundColor: "#2699FB",
        }
    },
    SubButton: {
        background: '#7FC4FD',
        color: 'white',
        '&:hover': {
            backgroundColor: "#2699FB",
            
        }
    },
    gridListItem: {
        padding: theme.spacing(1),
    },
  });

class ToDoPage extends React.Component {
    constructor(props) {
        super(props);
        this.getKList=this.getKList.bind(this);
        this.getMList=this.getMList.bind(this);
        this.getWList=this.getWList.bind(this);
        this.addList=this.addList.bind(this);
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
        getMiguelList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Clean the living room</li><li>Renew bus pass</li><li>Peppers</li><li>Mushrooms</li>"
        }
        getAList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Walk the dog</li><li>Clean the car</li>"
        }
        getTList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Vaccum the house</li><li>Take the dog for a walk</li>"
        }
        addList(){
            var txt = document.getElementById("input").value,
                list= document.getElementById("list"),
                liNode = document.createElement("LI"),
                txtNode = document.createTextNode(txt);
    
            liNode.appendChild(txtNode);
            list.appendChild(liNode);
        }


    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={3}>
                    {/* Left Side */}
                    <Grid item xs={3}>
                        <Paper className={classes.mainPaperLeft}>
                            <Typography variant="h5" component="h2">Family Members</Typography>
                            <Paper className={classes.subPaperLeft}>
                                {/* Each Chat */}
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.Button} onClick={() => this.getKList()}> Karim </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.Button} onClick={() => this.getWList()}> Matt </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.Button} onClick={() => this.getMList()}> Mike </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.Button}onClick={() => this.getMiguelList()} > Miguel </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.Button} onClick={() => this.getAList()}> Alan </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.Button} onClick={() => this.getTList()}> Tanner </Button>
                                    </Grid>
                            </Paper>
                        </Paper>
                    </Grid>
                    {/* Right Side */}
                    <Grid item sm={7}>
                        <Paper style={{padding:20, marginTop:10, marginBottom:10,height:700}}>
                            <Typography variant="h5" component="h2">To Do List</Typography>
                                <font size="4">
                                <ul id="list" style={{overflow:"auto"}}>
                                <li>Take out the garbage</li><li>Clean the kitchen</li><li>Finish database A2</li>
                                </ul>
                                </font>
                        </Paper>
                        <div>
                            <TextField id="input" label="Please Type Here" style={{width:"50%", float: "left"}} />
                            <Button className={classes.SubButton} style={{width: "50%", float: "right"}} onClick={() => this.addList()}>
                                <font size="4">
                                Add to TODO List
                                </font>
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ToDoPage);