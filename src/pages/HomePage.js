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
// Stream Chat React Modules
import { Chat, Channel, Thread} from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';

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
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 500,
        overflow: "auto hidden"
    },
    paperRight: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 300,
    },
    media: {
        height: 400,
      }
  });


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: appointments,
            currentViewName: 'Week',
            chatClient: new StreamChat('4j9h2uxtma94'),
            userToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY29sZC1tYXRoLTUifQ.Q4LVm_4R8Hi3xLXtpdSVAFR92C2cwXk9_HxVLW7Lq08',
            selectedUser: 'FamilyChat'
        };
        // Chat boilerplate
        this.state.chatClient.setUser(
            {
                id: 'cold-math-5',
                name: 'Cold math',
                image: 'https://getstream.io/random_svg'
            },
            this.state.userToken,
        );
    }
    render() {
        const { classes } = this.props;
        const { data, currentViewName } = this.state;
        const channel = this.state.chatClient.channel('messaging', this.state.selectedUser, {
            // add as many custom fields as you'd like
            name: this.state.selectedUser,
        });
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {/* Left half side */}
                    <Grid item xs={7}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paperLeft}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        The SEG Family
                                    </Typography>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={require('../imgs/familypic1.jpg')}
                                            title="Family Picture"
                                        />
                                        <CardContent>
                                        </CardContent>
                                    </CardActionArea>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paperLeft}>
                                    <div className="str-chat" style={{ height: '200px' }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                The Family Chat
                                            </Typography>
                                            <Chat client={this.state.chatClient}>
                                                <Channel channel={channel}>
                                                    <div className="str-chat__main-panel" style={{ height: '450px' }}>
                                                        <MessageList />
                                                        <MessageInput />
                                                    </div>
                                                </Channel>
                                            </Chat>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Right half side */}
                    <Grid item xs={5}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paperTitle}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Welcome Karim
                                    </Typography>
                                </Paper>
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
                                <Paper className={classes.paperRight}>To Do
                                <font size="6">
                                    <ul id="list" style={{maxHeight: 200, overflow:"auto"}}>
                                    <li>Take out the garbage</li>
                                    <li>Clean the kitchen</li>
                                    <li>Finish database A2</li>
                                    </ul>
                                </font>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paperRight}>Shopping List
                                <font size="6">
                                    <ul id="list" style={{maxHeight: 200, overflow:"auto"}}>
                                        <li>Protein</li>
                                        <li>Broccoli</li>
                                        <li>Rice</li>
                                        <li>Chicken</li>
                                        <li>Pasta</li>
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

export default withStyles(styles, { withTheme: true })(HomePage);