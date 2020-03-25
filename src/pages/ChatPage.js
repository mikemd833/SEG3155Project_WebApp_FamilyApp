import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

//Layout Imports
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

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
    paperRight: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 730,
    },
    chatButton: {
        padding: theme.spacing(2),
        textAlign: 'center',
        fontSize: 26,
        background: '#7FC4FD',
        height: 100,
        width: 380,
        color: 'white'
    },
    gridListItem: {
        padding: theme.spacing(1),
    }
  });

class ChatPage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container spacing={3}>
                    {/* Left Side */}
                    <Grid item xs={3}>
                        <Paper className={classes.mainPaperLeft}>
                            <Typography variant="h5" component="h2">Chat Rooms</Typography>
                            <Paper className={classes.subPaperLeft}>
                                {/* Each Chat */}
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.chatButton}> Family Chat </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.chatButton}> Karim </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.chatButton}> Matt </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.chatButton}> Mike </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.chatButton}> Miguel </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.chatButton}> Alan </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.chatButton}> Tanner </Button>
                                    </Grid>
                            </Paper>
                        </Paper>
                    </Grid>
                    {/* Right Side */}
                    <Grid item xs={9}>
                        <Paper className={classes.paperRight}>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ChatPage);