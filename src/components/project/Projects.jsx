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
    const projectList = [
        {
            title: 'ATM Management System',
            tools: 'Java Oops',
            link: 'https://your-atm-project-link.com',
            image: 'atmImage'
        },
        {
            title: 'Pizza Bill Generator',
            tools: 'Java Oops',
            link: 'https://your-pizza-project-link.com',
            image: 'pizzaImage'
        },
        {
            title: 'Food Card App',
            tools: 'React.js',
            link: 'https://your-food-card-app.com',
            image: 'foodAppImage'
        }
    ];

    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-content">
                <div className="content">
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgb(78,70,70)' }}>
                        {projectList.map((project, index) => (
                            <React.Fragment key={index}>
                                <ListItem
                                    alignItems="flex-start"
                                    button
                                    component="a"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{cursor:'pointer'}}
                                >
                                    <ListItemAvatar>
                                        <Avatar alt={project.title} src={project.image} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: '#ff3838', fontFamily: 'poppins',fontSize:'1.2rem' }}
                                            >
                                                {project.title}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'white', fontFamily: 'poppins' }}
                                            >
                                                <br />Tools <span>- {project.tools}</span>
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                {index !== projectList.length - 1 && <Divider variant="inset" component="li" />}
                            </React.Fragment>
                        ))}
                    </List>
                </div>
            </div>
        </div>
    )
}
