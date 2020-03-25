import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import TextField from '@material-ui/core/TextField';


const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    paperTitle: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperLeft: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 200,
        width: 450,
        backgroundColor: "#2699FB",
    },
    paperRight: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 300,
    },

    Button:{
        backgroundColor: "#2699FB"
    }
  });


class ShoppingListPage extends React.Component {
    constructor(props){
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
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {/* Left half side */}
                    <Grid item xs={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Button className={classes.paperLeft} id="karim" onClick={() => this.getKList()}>Karim</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button className={classes.paperLeft} id="mike" onClick={() => this.getMList()}>Mike</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button className={classes.paperLeft} id = "matt" onClick={() => this.getWList()}>Matt</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Right half side */}
                    <Grid item xs={8}>
                        <Grid container spacing={12}>
                            <Grid item xs={12}>
                                <Paper className={classes.paperTitle}>
                                    Shopping List
                                <div style={{height:530}}>
                                <font size="6">
                                    <ul id="list" style={{maxHeight: 510, overflow:"auto"}}>
                                    </ul>
                                </font>
                                </div>
                                </Paper>
                                <div>
                                <TextField id="input" label="Please Type Here" style={{width:"50%", float: "left"}} />
                                <Button className={classes.Button} style={{width: "50%", float: "right"}} onClick={() => this.addList()}>
                                    <font size="4">
                                    Add to Shopping List
                                    </font>
                                </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ShoppingListPage);