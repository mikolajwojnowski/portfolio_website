import './Tiles.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import BlurText from "../blocks/TextAnimations/BlurText/BlurText.jsx"
import { SiCredly } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import TypewriterEffect from './Typewriter.jsx';
const tiles = [
  {
    title: 'About',
    icon: '👤',
    link: '#about',
    color: '#F7CAC9',
  },
  {
    title: 'Projects',
    icon: '💻',
    link: '#projects',
    color: '#92A8D1',
  },
  {
    title: 'Contact',
    icon: '✉️',
    link: '#contact',
    color: '#B5EAD7',
  },
  {
    title: 'Blog',
    icon: '📝',
    link: '#blog',
    color: '#FFDAC1',
  },
];
const handleAnimationComplete = () => {
    console.log('Animation completed!');
};


const Tiles = () => (
    <div className="tiles-grid">

        <div className="div1"> 
            <div className="avatar">
                <img src="/me.png" alt="avatar-pic" />
            </div>
            <h1>Hi, I'm Mikolaj <br /> 
            <TypewriterEffect text="Software Developer. Engineer." speed={150} deleteSpeed={150} loop={true} />
            </h1>
        </div>

        <a href="https://github.com/mikolajwojnowski" className="logo-div-github" target="_blank" rel="noopener    noreferrer">
        <FaGithub size={50} style={{ color: '#fff' }}/>
        </a>

        <a href="https://www.linkedin.com/in/mikolajwojnowski/" className="logo-div-linkedin" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={50} style={{ color: '#fff' }}/>
        </a>

        <a href="https://www.credly.com/users/mikolaj-wojnowski" className="logo-div-credly" target="_blank" rel="noopener noreferrer">
        <SiCredly size={65} style={{ color: '#fff' }}/>
        </a>
        <a href="https://github.com/mikolajwojnowski" className="logo-div-instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={50} style={{ color: '#fff' }}/>
        </a>

    </div>
);

export default Tiles;
