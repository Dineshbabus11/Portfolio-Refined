import React from 'react';
import './Experience.scss';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

// Icons
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import WebIcon from '@mui/icons-material/Web';
import EqualizerIcon from '@mui/icons-material/Equalizer';

export const Experience = () => {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="experience-content">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="white"
              fontFamily="Poppins"
            >
              July 2024 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ height: '30px' }} />
              <TimelineDot
                sx={{
                  background: '#ff3838',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.5)',
                  },
                }}
              >
                <LaptopChromebookIcon />
              </TimelineDot>
              <TimelineConnector sx={{ height: '30px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" sx={{ fontFamily: 'Poppins', color: '#ff3838' }}>
                Thulir, India (Part-Time)
              </Typography>
              <Typography sx={{ fontFamily: 'Poppins', color: 'white' }}>Junior Web Developer</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="white"
              fontFamily="Poppins"
            >
              January 2024 - February 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ height: '30px' }} />
              <TimelineDot
                sx={{
                  background: 'black',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.5)',
                  },
                }}
              >
                <WebIcon />
              </TimelineDot>
              <TimelineConnector sx={{ height: '30px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" sx={{ fontFamily: 'Poppins', color: '#ff3838' }}>
                Squash Apps Private Limited, Coimbatore (Intern)
              </Typography>
              <Typography sx={{ fontFamily: 'Poppins', color: 'white' }}>Web Developer Intern</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="white"
              fontFamily="Poppins"
            >
              August 2023 - September 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ height: '30px' }} />
              <TimelineDot
                sx={{
                  background: '#ff3838',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.5)',
                  },
                }}
              >
                <EqualizerIcon />
              </TimelineDot>
              <TimelineConnector sx={{ height: '30px' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" sx={{ fontFamily: 'Poppins', color: '#ff3838' }}>
                KG IT Services, Bangalore (Intern)
              </Typography>
              <Typography sx={{ fontFamily: 'Poppins', color: 'white' }}>Data Analyst Intern</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};
