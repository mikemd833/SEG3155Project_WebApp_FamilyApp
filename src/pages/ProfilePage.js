import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from './demo-data/month-appointments';
//Imports related to Cards Material UI
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 300,
    },
    media: {
        height: 400,
      },
    });

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: appointments,
          currentViewName: 'Week',
        };
    }
    render() {
        const { classes } = this.props;
        const { data, currentViewName } = this.state;
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {/* Left half side */}
                    <Grid item xs={7}>
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
                    <Grid item xs={5}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paperTitle}>Welcome SEG User</Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paperRight}> 
                                    <Scheduler
                                        data={data}
                                    >
                                        <ViewState
                                            defaultCurrentDate={"2020-03-27"}
                                            currentViewName={currentViewName}
                                        />
                                        <WeekView
                                        startDayHour={6}
                                        endDayHour={22}
                                        />
                                        <Toolbar />
                                        <DateNavigator />
                                        <TodayButton />
                                        <Appointments />
                                        <AppointmentTooltip
                                            showCloseButton
                                            showOpenButton
                                        />
                                    </Scheduler>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paperRight}>To Do</Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paperRight}>Shopping List
                                <font size="6">
                                    <ul id="list" style={{maxHeight: 200, overflow:"auto"}}>
                                        <li>Protein</li>
                                        <li>Broccoli</li>
                                        <li>Rice</li>
                                        <li>Chicken</li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </font>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ProfilePage);