import React from 'react';
import './Projects.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { FaUniversity, FaPizzaSlice, FaUtensils, FaSun, FaQuestionCircle, FaQrcode, FaMoneyBillWave, FaFilter, FaWeight, FaUserGraduate, FaUserTie } from 'react-icons/fa';

export const Projects = () => {
  const projects = [
    {
      title: 'Alumni Management System',
      tools: 'React.js, Material UI',
      link: 'https://unitidealumni.netlify.app/',
      icon: <FaUserGraduate className="project-icon" />
    },
    {
      title: 'Secondary Portfolio',
      tools: 'React.js, SCSS',
      link: 'https://dbsportfolio.netlify.app/',
      icon: <FaUserTie className="project-icon" />
    },        
    {
      title: 'ATM Management System',
      tools: 'Java OOPs',
      link: 'https://github.com/Dineshbabus11/ATM-Machine-Management-System',
      icon: <FaUniversity className="project-icon" />
    },
    {
      title: 'Pizza Bill Generator',
      tools: 'Java OOPs',
      link: 'https://github.com/Dineshbabus11/Pizza_Bill_Generator',
      icon: <FaPizzaSlice className="project-icon" />
    },
    {
      title: 'Food Cart App',
      tools: 'React.js',
      link: 'https://savoryfoodcart.netlify.app/',
      icon: <FaUtensils className="project-icon" />
    },
    {
      title: 'Weather App',
      tools: 'React.js, OpenWeather API',
      link: 'https://github.com/Dineshbabus11/weather_app',
      icon: <FaSun className="project-icon" />
    },
    {
      title: 'Quiz App',
      tools: 'React.js',
      link: 'https://dbsquiz.netlify.app/',
      icon: <FaQuestionCircle className="project-icon" />
    },
    {
      title: 'QR Code Generator',
      tools: 'React.js, API',
      link: 'https://merry-crepe-43acce.netlify.app/',
      icon: <FaQrcode className="project-icon" />
    },
    {
      title: 'Currency Convertor App',
      tools: 'React.js, Open API',
      link: 'https://github.com/Dineshbabus11/Currency-convertor',
      icon: <FaMoneyBillWave className="project-icon" />
    },
    {
      title: 'Product Filter',
      tools: 'HTML, CSS, JS',
      link: 'https://dbsproduct.netlify.app/',
      icon: <FaFilter className="project-icon" />
    },
    {
      title: 'BMI Calculator',
      tools: 'React.js',
      link: 'https://dbsbmicalulator.netlify.app/',
      icon: <FaWeight className="project-icon" />
    }
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-content">
        {projects.map((project, index) => (
          <div className="content" key={index}>
            <List>
              <ListItem
                alignItems="flex-start"
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-item"
              >
                <ListItemAvatar>
                  {project.icon}
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body2" className="project-title">
                      {project.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" className="project-tools">
                      Tools - {project.tools}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </div>
        ))}
      </div>
    </div>
  );
};
