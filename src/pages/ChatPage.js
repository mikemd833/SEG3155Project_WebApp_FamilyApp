import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Stream Chat React Modules
import { Chat, Channel, ChannelHeader, Thread} from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';

// Layout Imports
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
        overflow: 'auto hidden',
    },
    chatButton: {
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
    gridListItem: {
        padding: theme.spacing(1),
    },
  });

class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatClient: new StreamChat('4j9h2uxtma94'),
            userToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY29sZC1tYXRoLTUifQ.Q4LVm_4R8Hi3xLXtpdSVAFR92C2cwXk9_HxVLW7Lq08',
            selectedUser: 'FamilyChat'
        }

        // Chat boilerplate
        this.state.chatClient.setUser(
        {
            id: 'cold-math-5',
            name: 'Cold math',
            image: 'https://getstream.io/random_svg'
        },
        this.state.userToken,
        );

        this.handleSelectedUser = this.handleSelectedUser.bind(this);
    }

    // Handle selected user
    handleSelectedUser = (name) => {
        this.setState({
            selectedUser: name
        })
    }

    render() {
        const { classes } = this.props;

        const channel = this.state.chatClient.channel('messaging', this.state.selectedUser, {
            // add as many custom fields as you'd like
            image: 'https://getstream.io/random_svg',
            name: this.state.selectedUser,
        });
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
                                        <Button className={classes.chatButton} onClick={() => this.handleSelectedUser("FamilyChat")}> Family Chat </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.chatButton} onClick={() => this.handleSelectedUser("Karim")}> Karim </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.chatButton} onClick={() => this.handleSelectedUser("Matt")}> Matt </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.chatButton} onClick={() => this.handleSelectedUser("Mike")}> Mike </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.chatButton} onClick={() => this.handleSelectedUser("Miguel")}> Miguel </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.chatButton} onClick={() => this.handleSelectedUser("Alan")}> Alan </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridListItem}>
                                        <Button className={classes.chatButton} onClick={() => this.handleSelectedUser("Tanner")}> Tanner </Button>
                                    </Grid>
                            </Paper>
                        </Paper>
                    </Grid>
                    {/* Right Side */}
                    <Grid item xs={9}>
                        <Paper className={classes.paperRight}>
                            <div className="str-chat" style={{ height: 'unset' }}>
                                <Chat client={this.state.chatClient} theme={'messaging light'}>
                                    <Channel channel={channel}>
                                    <div className="str-chat__main-panel" style={{ height: '700px' }}>
                                        <ChannelHeader title={this.state.selectedUser}/>
                                        <MessageList />
                                        <MessageInput />
                                    </div>
                                    <Thread />
                                    </Channel>
                                </Chat>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ChatPage);