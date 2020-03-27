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
        '&:hover': {
            backgroundColor: "#2699FB",
        }

    },
    gridListItem: {
        padding: theme.spacing(1),
    },
  });

class ShoppingListPage extends React.Component {
    constructor(props) {
        super(props);
        this.getKList=this.getKList.bind(this);
        this.getMList=this.getMList.bind(this);
        this.getWList=this.getWList.bind(this);
        this.addList=this.addList.bind(this);
        }
        getKList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Protein</li><li>Broccoli</li><li>Rice</li><li>Chicken</li>"
        }
        getMList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Burgers</li><li>Fries</li><li>Buns</li><li>Condiments</li>"
        }
        getWList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Paper</li><li>Ink</li><li>Phone Charger</li><li>Valum</li>"
        }
        getMiguelList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Veggies</li><li>Cheese</li><li>Peppers</li><li>Mushrooms</li>"
        }
        getAList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Cucumbers</li><li>Bread</li>"
        }
        getTList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Lettuce</li><li>Chicken</li><li>Mix nuts</li><li>Salsa</li>"
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
                                        <Button className={classes.Button} onClick={() => this.getMiguelList()}> Miguel </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.Button} onClick={() => this.getAList()}> Alan </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.Button}onClick={() => this.getTList()}> Tanner </Button>
                                    </Grid>
                            </Paper>
                        </Paper>
                    </Grid>
                    {/* Right Side */}
                    <Grid item sm={7}>
                        <Paper style={{padding:20, marginTop:10, marginBottom:10,height:700}}>
                            <Typography variant="h5" component="h2">Shopping List</Typography>
                                <font size="4">
                                <ul id="list" style={{overflow:"auto"}}>
                                </ul>
                                </font>
                        </Paper>
                        <div>
                            <TextField id="input" label="Please Type Here" style={{width:"50%", float: "left"}} />
                            <Button className={classes.SubButton} style={{width: "50%", float: "right"}} onClick={() => this.addList()}>
                                <font size="4">
                                 Add to List
                                </font>
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ShoppingListPage);