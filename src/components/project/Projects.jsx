import React from 'react'
import './Projects.scss'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import QuizIcon from '@mui/icons-material/Quiz';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TuneIcon from '@mui/icons-material/Tune';
import ParaglidingIcon from '@mui/icons-material/Paragliding';


export const Projects = () => {
    const projectList = [
        {
            title: 'ATM Management System',
            tools: 'Java Oops',
            link: 'https://github.com/Dineshbabus11/ATM-Machine-Management-System',
            image: <LocalAtmIcon sx={{background:'black',color:'#ff3838',width:'45px',height:'45px',borderRadius:'50%'}}/>
        },
        {
            title: 'Pizza Bill Generator',
            tools: 'Java Oops',
            link: 'https://github.com/Dineshbabus11/Pizza_Bill_Generator',
            image: <LocalPizzaIcon sx={{background:'black',color:'#ff3838',width:'45px',height:'45px',borderRadius:'50%'}}/>
        },
        {
            title: 'Food Card App',
            tools: 'React.js',
            link: 'https://savoryfoodcart.netlify.app/',
            image: <FastfoodIcon sx={{background:'black',color:'#ff3838',width:'45px',height:'45px',borderRadius:'50%'}}/>
        }
    ];

    const projectList1 = [
        {
            title: 'Weather App',
            tools: 'React.js, OpenWeather API',
            link: 'https://github.com/Dineshbabus11/weather_app',
            image: <WbSunnyIcon sx={{background:'black',color:'#ff3838',width:'45px',height:'45px',borderRadius:'50%'}}/>
        },
        {
            title: 'Quiz App',
            tools: 'React.js',
            link: 'https://dbsquiz.netlify.app/',
            image: <QuizIcon sx={{background:'black',color:'#ff3838',width:'45px',height:'45px',borderRadius:'50%'}}/>
        },
        {
            title: 'QR Code Generator',
            tools: 'React.js, API',
            link: 'https://merry-crepe-43acce.netlify.app/',
            image: <QrCodeScannerIcon sx={{background:'black',color:'#ff3838',width:'45px',height:'45px',borderRadius:'50%'}}/>
        }
    ];

    const projectList2 = [
        {
            title: 'Currency Convertor App',
            tools: 'React.js, Open API',
            link: 'https://github.com/Dineshbabus11/Currency-convertor',
            image: <CurrencyExchangeIcon sx={{background:'black',color:'#ff3838',width:'45px',height:'45px',borderRadius:'50%'}}/>
        },
        {
            title: 'Product Filter',
            tools: 'HTML, CSS, JS',
            link: 'https://dbsproduct.netlify.app/',
            image: <TuneIcon sx={{background:'black',color:'#ff3838',width:'45px',height:'45px',borderRadius:'50%'}}/>
        },
        {
            title: 'BMI Calculator',
            tools: 'React.js',
            link: 'https://dbsbmicalulator.netlify.app/',
            image: <ParaglidingIcon sx={{background:'black',color:'#ff3838',width:'45px',height:'45px',borderRadius:'50%'}}/>
        }
    ];

    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-content">
                <div className="content">
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgb(78,70,70)' ,borderRadius:'10px'}}>
                        {projectList.map((project, index) => (
                            <React.Fragment key={index}>
                                <ListItem
                                    alignItems="flex-start"
                                    button
                                    component="a"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{cursor:'pointer',transition:'transform 0.3s ease',
                                        '&:hover':{
                                            transform:'scale(1.1)'
                                        }
                                    }}
                                >
                                    <ListItemAvatar>
                                        {project.image}
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: '#ff3838', fontFamily: 'poppins',fontSize:'1.2rem'}}
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

                <div className="content">
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgb(78,70,70)' ,borderRadius:'10px'}}>
                        {projectList1.map((project, index) => (
                            <React.Fragment key={index}>
                                <ListItem
                                    alignItems="flex-start"
                                    button
                                    component="a"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{cursor:'pointer',transition:'transform 0.3s ease',
                                        '&:hover':{
                                            transform:'scale(1.1)'
                                        }
                                    }}
                                >
                                    <ListItemAvatar>
                                        {project.image}
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

                <div className="content">
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgb(78,70,70)' ,borderRadius:'10px'}}>
                        {projectList2.map((project, index) => (
                            <React.Fragment key={index}>
                                <ListItem
                                    alignItems="flex-start"
                                    button
                                    component="a"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{cursor:'pointer',transition:'transform 0.3s ease',
                                        '&:hover':{
                                            transform:'scale(1.1)'
                                        }
                                    }}
                                >
                                    <ListItemAvatar>
                                        {project.image}
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
