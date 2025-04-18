import React from 'react'
import './About.scss'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


export const About = () => {

    
    return (
        <div className="about">
            <h1>About</h1>
            <div className="about-full">
                <div className="about-content">
                    <Card variant="outlined" sx={{ background: 'rgb(78, 70, 70)', fontFamily: 'poppins', width: '360px' }}>
                        <Box sx={{ p: 2 }}>
                            <Stack
                                direction="row"
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', fontFamily: 'poppins' }}>
                                    B. Tech IT
                                </Typography>
                                <Typography gutterBottom variant="p" component="div" sx={{ color: '#ff3838', fontFamily: 'poppins', fontWeight: '500' }}>
                                    CGPA: 8.38
                                </Typography>
                            </Stack>
                            <Typography variant="body2" sx={{ color: 'white', fontFamily: 'poppins' }}>
                                KPR Institute of Engineering and Technology, Coimbatore, India.
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ p: 2 }}>
                            <Typography gutterBottom variant="body2" sx={{ color: 'white', fontFamily: 'poppins' }}>
                                Year
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip color="#ff3838" label="2022 - 2026" size="small" sx={{ background: "#ff3838", color: 'white' }} />
                            </Stack>
                        </Box>
                    </Card>

                    <Card variant="outlined" sx={{ background: 'rgb(78, 70, 70)', fontFamily: 'poppins', width: '360px' }}>
                        <Box sx={{ p: 2 }}>
                            <Stack
                                direction="row"
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', fontFamily: 'poppins' }}>
                                    HSC
                                </Typography>
                                <Typography gutterBottom variant="p" component="div" sx={{ color: '#ff3838', fontFamily: 'poppins', fontWeight: '500' }}>
                                    91.00%
                                </Typography>
                            </Stack>
                            <Typography variant="body2" sx={{ color: 'white', fontFamily: 'poppins' }}>
                                Jaycee Higher Secondary School, Coimbatore, India.
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ p: 2 }}>
                            <Typography gutterBottom variant="body2" sx={{ color: 'white', fontFamily: 'poppins' }}>
                                Year
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip color="#ff3838" label="2021 - 2022" size="small" sx={{ background: "#ff3838", color: 'white' }} />
                            </Stack>
                        </Box>
                    </Card>

                    <Card variant="outlined" sx={{ background: 'rgb(78, 70, 70)', fontFamily: 'poppins', width: '360px' }}>
                        <Box sx={{ p: 2 }}>
                            <Stack
                                direction="row"
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', fontFamily: 'poppins' }}>
                                    SSLC
                                </Typography>
                                <Typography gutterBottom variant="p" component="div" sx={{ color: '#ff3838', fontFamily: 'poppins', fontWeight: '500' }}>
                                    89.40%
                                </Typography>
                            </Stack>
                            <Typography variant="body2" sx={{ color: 'white', fontFamily: 'poppins' }}>
                                Jaycee Higher Secondary School, Coimbatore, India.
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ p: 2 }}>
                            <Typography gutterBottom variant="body2" sx={{ color: 'white', fontFamily: 'poppins' }}>
                                Year
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip color="#ff3838" label="2019 - 2020" size="small" sx={{ background: "#ff3838", color: 'white' }} />
                            </Stack>
                        </Box>
                    </Card>
                </div>
                <div className="about-des">
                    
                </div>
            </div>
        </div>
    )
}
