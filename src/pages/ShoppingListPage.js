import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BackspaceIcon from '@material-ui/icons/Backspace';



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
            list.innerHTML="<li>Protein<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Broccoli<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Rice<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Chicken<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Pasta<Button><BackspaceIcon></BackspaceIcon></Button></li>"
        }
        getMList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Burgers<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Fries<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Buns<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Condiments<Button><BackspaceIcon></BackspaceIcon></Button></li>"
        }
        getWList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Paper<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Ink</li><li>Phone Charger<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Valum<Button><BackspaceIcon></BackspaceIcon></Button></li>"
        }
        getMiguelList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Veggies<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Cheese<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Peppers<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Mushrooms<Button><BackspaceIcon></BackspaceIcon></Button></li>"
        }
        getAList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Cucumbers<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Bread<Button><BackspaceIcon></BackspaceIcon></Button></li>"
        }
        getTList(){
            var list = document.getElementById("list");
            list.innerHTML="<li>Lettuce<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Chicken<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Mix nuts<Button><BackspaceIcon></BackspaceIcon></Button></li><li>Salsa<Button><BackspaceIcon></BackspaceIcon></Button></li>"
        }
        addList(){
            var txt = document.getElementById("input").value,
            txt = txt + "<Button><BackspaceIcon></BackspaceIcon></Button>",
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
                                <li>Protein<Button><BackspaceIcon></BackspaceIcon></Button></li>
                                <li>Broccoli<Button><BackspaceIcon></BackspaceIcon></Button></li>
                                <li>Rice<Button><BackspaceIcon></BackspaceIcon></Button></li>
                                <li>Chicken<Button><BackspaceIcon></BackspaceIcon></Button></li>
                                <li>Pasta<Button><BackspaceIcon></BackspaceIcon></Button></li>
                                </ul>
                                </font>
                        </Paper>
                        <div>
                            <TextField id="input" label="Please Type Here" style={{width:"50%", float: "left"}} />
                            <Button className={classes.SubButton} style={{width: "50%", float: "right"}} onClick={() => this.addList()}>
                                <font size="4">
                                 Add to Shopping List
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