import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
//Imports related to Cards Material UI
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


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
        height: 500,
    },
    paperRight: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: 500,
    },
    media: {
        height: 400,
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
    });


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.changeProfile=this.changeProfile.bind(this);
        this.state = ({
            selectedDate: new Date('1969-04-20T21:11:54'),
            setSelectedDate: new Date('1969-04-20T21:11:54')
        });
    }

    handleDateChange = date => {
        this.state.setSelectedDate(date);
      };

      changeProfile(){
        var name = document.getElementById("Name").value;
        document.getElementById("Name").label=name;
      }

    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container spacing={3}>
                    {/* Left half side */}
                    <Grid item xs={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paperLeft}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../imgs/bigman.jpg')}
                                            title="Family Picture"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            KarimKaroui123
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Right half side */}
                    <Grid item xs={8}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paperRight}> 
					                <table>
			   			                <tbody>
                                               <font size="6">
			    	    	                <tr>
			            		                <td>Name:	</td>
                                                <td><TextField id="Name" label="Karim Karoui" /> </td>
			        		                </tr>
			        		                <tr>
			            		                <td>Address:	</td>
			            		                <td><TextField id="Address" label="Awesome St" /> </td>
			        		                </tr>
			        		                <tr>
			            		                <td>Email:	</td>
			            		                <td><TextField id="Email" label="awesome@awesome.com" /> </td>
			        		                </tr>
			        		                <tr>
			            		                <td>Birthday:	</td>
                                                <td>
                                                <KeyboardDatePicker
                                                    disableToolbar
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    margin="normal"
                                                    id="date-picker-inline"
                                                    value={this.state.selectedDate}
                                                    onChange={this.state.handleDateChange}
                                                    KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                    }}
                                                />

                                                </td>
			        		                </tr>
                                            <tr>
                                                <td>Change Passsword:	</td>
                                                <td>
                                                <TextField
                                                    id="standard-password-input"
                                                    label="Password"
                                                    type="password"
                                                    autoComplete="current-password"/>
                                                </td>
                                                <td>
                                                <TextField
                                                    id="Confirm Password"
                                                    label="Confirm Password"
                                                    type="password"
                                                    autoComplete="current-password"/>
                                                </td>
                                            </tr>
                                            </font>
			    		                </tbody>
					                </table>
					                    <Button className={classes.SubButton} style={{width: "50%", float: "left"}} onClick={() => this.changeProfile()}>
                                            <font size="4">
                                                Save Changes
                                            </font>
                                        </Button>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </MuiPickersUtilsProvider>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ProfilePage);