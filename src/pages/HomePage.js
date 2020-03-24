import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

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
    render() {
        const { classes } = this.props;
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
                                <Paper className={classes.paperRight}>Calendar</Paper>
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