import React from 'react'
import './Projects.scss'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-content">
                <div className="content">
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgb(78,70,70)' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                sx={{ fontFamily: 'poppins' }}
                                primary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: '#ff3838', display: 'inline', fontFamily: 'poppins' }}
                                        >
                                            ATM Management System
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'white', display: 'inline', fontFamily: 'poppins' }}
                                        >
                                            Tools <span>- Java Oops</span>
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                sx={{ fontFamily: 'poppins' }}
                                primary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: '#ff3838', display: 'inline', fontFamily: 'poppins' }}
                                        >
                                            Pizza Bill Generator
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'white', display: 'inline', fontFamily: 'poppins' }}
                                        >
                                            Tools <span>- Java Oops</span>
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                sx={{ fontFamily: 'poppins' }}
                                primary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: '#ff3838', display: 'inline', fontFamily: 'poppins' }}
                                        >
                                            Food Card App
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'white', display: 'inline', fontFamily: 'poppins' }}
                                        >
                                            Tools <span>- React.js</span>
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </div>
            </div>
        </div>
    )
}
