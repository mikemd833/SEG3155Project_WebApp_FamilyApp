import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from './demo-data/month-appointments';

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
  });


class HomePage extends React.Component {
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
                                <Paper className={classes.paperLeft}>Family Photo</Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paperLeft}>Family Chat</Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Right half side */}
                    <Grid item xs={5}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paperTitle}>Welcome User</Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paperRight}>Calendar
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
                                <Paper className={classes.paperRight}>Shopping List</Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(HomePage);