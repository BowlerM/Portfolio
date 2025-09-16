import About from '../pages/About';
import StudyBot from '../pages/projects/StudyBot';
import Contact from '../pages/Contact';
import CV from '../pages/CV';
import Marr from "../pages/projects/Marr";
import Webscrapi from "../pages/projects/Webscrapi";
import Commands from "../pages/Commands";
import Dissertation from '../pages/projects/Dissertation';

import { FaInfoCircle, FaFilePdf, FaFileCode, FaJsSquare, FaPython, FaTerminal } from 'react-icons/fa';

export const files = [
  {
    name: "ABOUT.md",
    icon: <FaInfoCircle className="file-icon" style={{ color: "#519ABA" }} />,
    component: About
  },
  {
    name: "CV.pdf",
    icon: <FaFilePdf className="file-icon" style={{ color: "#C8333A" }} />,
    component: CV
  },
  {
    name: "contact.json",
    icon: <FaFileCode className="file-icon" style={{ color: "#FFD43B" }} />,
    component: Contact
  },
  {
    name: "commands.sh",
    icon: <FaTerminal className="file-icon" style={{ color: "#00ff1e" }} />,
    component: Commands
  }
];

export const projectFiles = [
  {
    name: "EduCord.js",
    icon: <FaJsSquare className="file-icon" style={{ color: "#FFD43B" }} />,
    component: StudyBot
  },
  {
    name: "Marr.py",
    icon: <FaPython className="file-icon" style={{ color: "#519ABA" }} />,
    component: Marr
  },
  {
    name: "Webscrapi.py",
    icon: <FaPython className="file-icon" style={{ color: "#519ABA" }} />,
    component: Webscrapi
  },
  {
    name: "Dissertation.py",
    icon: <FaPython className="file-icon" style={{ color: "#519ABA" }} />,
    component: Dissertation
  }
];