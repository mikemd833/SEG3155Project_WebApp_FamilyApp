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
        height: 300,
    },
    media: {
        height: 400,
      },
    });


class ProfilePage extends React.Component {
    constructor(props) {
        super(props)    
        
        const handleDateChange = date => {
            setSelectedDate(date);
          };
    }
    render() {
        const { classes } = this.props;
        const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
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
                                <form>
					                <table>
			   			                <tbody>
                                               <font size="6">
			    	    	                <tr>
			            		                <td>Name:	</td>
                                                <KeyboardDatePicker
                                                    disableToolbar
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    margin="normal"
                                                    id="date-picker-inline"
                                                    label="Date picker inline"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                    }}
                                                />
                                                <td><input type="input" name="name" value="Karim Karoui"></input> </td>
			        		                </tr>
			        		                <tr>
			            		                <td>Address:	</td>
			            		                <td><input type="input" name="address" value="Awesome Street"></input> </td>
			        		                </tr>
			        		                <tr>
			            		                <td>Email:	</td>
			            		                <td><input type="input" name="email" value="awesome@awesome.com"></input> </td>
			        		                </tr>
			        		                <tr>
			            		                <td>Birthday:	</td>
			            		                <td><input type="date" name="camera" value="1969-04-20"></input> </td>
			        		                </tr>
                                            </font>
			    		                </tbody>
					                </table>
					                <input class="submit" type="submit" value="Save Changes"></input> 
				                </form>
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