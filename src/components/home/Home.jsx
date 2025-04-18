import React from 'react'
import './Home.scss'
import HomeImg from '../../img/Home_img.png'
import Button from '@mui/material/Button';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { saveAs } from 'file-saver';
import Resume from '../../file/DineshBabuS_IT_Resume.pdf'

export const Home = () => {

    const Download = async()=>{
        saveAs(Resume,'DineshBabuS_Resume.pdf');
    }

    return (

        <div className="home">
            <div className="home-left">
                <img src={HomeImg} alt="" />
            </div>
            <div className="home-right">
                <h1>Hi, I'm <span>Dinesh Babu S</span></h1>
                <h2>Web Developer & Problem Solver</h2>
                <p>I'm a B.Tech IT student and Junior Web Developer with experience in building dynamic, user-focused web applications using React.js, REST APIs, and Material UI.
                    Skilled in Java, UI/UX design (Figma), and version control (GitHub), I've developed real-world systems like Restaurant & Grocery Management platforms.
                    With hands-on exposure from multiple internships, I combine technical knowledge, teamwork, and design thinking to deliver scalable digital solutions.
                    Always eager to learn, I bring a strong foundation in frontend development, backend integration, and data handling across diverse projects.
                </p>
                <Button variant="contained" endIcon={<DownloadForOfflineIcon/>} sx={{background:'#ff3838',fontFamily:'poppins',fontSize:'1rem'}} onClick={Download}>
                    Download CV
                </Button>
            </div>
        </div>
    )
}
