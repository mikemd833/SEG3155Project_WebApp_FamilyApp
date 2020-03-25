import React from 'react';
//Layout Imports
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
        height: 730,
    },
    paperRight: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 730,
    },
    media: {
        height: 400,
      },
  });

class ChatPage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Paper className={classes.paperLeft}>

                        </Paper>
                    </Grid>
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