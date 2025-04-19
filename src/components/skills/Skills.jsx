import React, { useState } from "react";
import { Tabs, Tab, Box, Grid, Paper, Typography } from "@mui/material";
import { Code, Build } from "@mui/icons-material";
import './Skills.scss'
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { PiFigmaLogoBold } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";
import { SiEclipseide } from "react-icons/si";



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
    <Grid container spacing={2} padding={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
        {items.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index} >
                <Paper elevation={3} sx={{
                    p: 2, textAlign: "center", background: 'black', cursor: 'pointer', transition: 'transform 0.2s ease,color 0.2s ease',
                    '&:hover': {
                        background: 'rgb(78, 70, 70)',
                        transform: 'scale(1.1)'
                    }
                }}>
                    <Box sx={{ fontSize: 40, width: '150px' }}>{item.icon}</Box>
                    <Typography variant="subtitle1" sx={{ fontFamily: 'poppins', color: '#ff3838' }}>{item.name}</Typography>
                </Paper>
            </Grid>
        ))}
    </Grid>
);

export const Skills = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (e, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="skills-content">
                <Box sx={{ width: "100%", mt: 4 }}>
                    <Tabs value={tabIndex} onChange={handleChange} centered
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: '#ff3838'
                            }
                        }}>
                        <Tab label="Languages & Frameworks" sx={{
                            color: tabIndex === 0 ? '#ff3838' : 'white',
                            fontFamily: 'poppins',
                            transition: 'color 0.3s ease',
                            '&:focus': {
                                color: 'white',
                            },
                        }} />
                        <Tab label="Tools" sx={{
                            color: tabIndex === 1 ? '#ff3838' : 'white',
                            fontFamily: 'poppins',
                            transition: 'color 0.3s ease',
                            '&:focus': {
                                color: 'white',
                            },
                        }} />
                    </Tabs>
                    <Box sx={{
                        marginTop: '40px'
                    }}>
                        {tabIndex === 0 && <SkillTab items={languagesFrameworks} />}
                        {tabIndex === 1 && <SkillTab items={tools} />}
                    </Box>
                </Box>
            </div>
        </div>
    )
}