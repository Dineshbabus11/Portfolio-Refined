import React, { useState } from "react";
import { Tabs, Tab, Box, Grid, Paper, Typography } from "@mui/material";
import './Skills.scss';

// Icons
import { FaJava, FaReact, FaHtml5, FaPython, FaGitSquare, FaGithubSquare } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { SiPostman, SiEclipseide } from "react-icons/si";
import { PiFigmaLogoBold } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";

const languagesFrameworks = [
    { name: "Java", icon: <FaJava style={{ color: "white" }} /> },
    { name: "React.js", icon: <FaReact style={{ color: "white" }} /> },
    { name: "HTML", icon: <FaHtml5 style={{ color: "white" }} /> },
    { name: "CSS", icon: <IoLogoCss3 style={{ color: "white" }} /> },
    { name: "JavaScript", icon: <DiJavascript style={{ color: "white" }} /> },
    { name: "Python", icon: <FaPython style={{ color: "white" }} /> },
];

const tools = [
    { name: "Git", icon: <FaGitSquare style={{ color: "white" }} /> },
    { name: "GitHub", icon: <FaGithubSquare style={{ color: "white" }} /> },
    { name: "Postman", icon: <SiPostman style={{ color: "white" }} /> },
    { name: "Figma", icon: <PiFigmaLogoBold style={{ color: "white" }} /> },
    { name: "VS Code", icon: <VscVscode style={{ color: "white" }} /> },
    { name: "Eclipse", icon: <SiEclipseide style={{ color: "white" }} /> },
];

const SkillTab = ({ items }) => (
    <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {items.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
                <Paper elevation={3} sx={{
                    p: 3,
                    background: 'black',
                    textAlign: 'center',
                    borderRadius: '12px',
                    transition: 'transform 0.2s ease-in-out',
                    cursor: 'pointer',
                    '&:hover': {
                        transform: 'scale(1.1)',
                        background: 'rgb(78, 70, 70)'
                    }
                }}>
                    <Box sx={{ fontSize: 40, mb: 1 }}>{item.icon}</Box>
                    <Typography sx={{ fontFamily: 'Poppins', color: '#ff3838' }}>
                        {item.name}
                    </Typography>
                </Paper>
            </Grid>
        ))}
    </Grid>
);

export const Skills = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="skills-content">
                <Box sx={{ width: "100%" }}>
                    <Tabs
                        value={tabIndex}
                        onChange={handleChange}
                        centered
                        TabIndicatorProps={{ style: { backgroundColor: "#ff3838" } }}
                    >
                        <Tab label="Languages & Frameworks"
                            sx={{
                                color: tabIndex === 0 ? '#ff3838' : 'white',
                                fontFamily: 'Poppins',
                                fontWeight: 600
                            }}
                        />
                        <Tab label="Tools"
                            sx={{
                                color: tabIndex === 1 ? '#ff3838' : 'white',
                                fontFamily: 'Poppins',
                                fontWeight: 600
                            }}
                        />
                    </Tabs>

                    <Box sx={{ mt: 5 }}>
                        {tabIndex === 0 && <SkillTab items={languagesFrameworks} />}
                        {tabIndex === 1 && <SkillTab items={tools} />}
                    </Box>
                </Box>
            </div>
        </div>
    );
};
