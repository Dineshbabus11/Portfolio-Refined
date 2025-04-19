import './App.css'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Experience } from './components/experience/Experience'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Projects } from './components/project/Projects'
import { Skills } from './components/skills/Skills'

function App() {
  return (
    <>
    <Header/>
    <div id="home"><Home/></div>
    
    <div id="about"><About/></div>
    
    <div id="skills"><Skills/></div>
    
    <div id="experience"><Experience/></div>
    
    <div id="projects"><Projects/></div>
    
    <div id="contact"><Contact/></div>
    
    </>
  )
}

export default App
