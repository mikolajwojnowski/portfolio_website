import { FaSprayCanSparkles } from 'react-icons/fa6';
import './Section.css'
import './Tech.css'
import { FaCss3Alt, FaDocker, FaHtml5, FaJava, FaJs, FaPython, FaReact } from "react-icons/fa"; 
import { DiSpark } from "react-icons/di";
import { SiNumpy } from "react-icons/si";
import { SiFoodpanda } from "react-icons/si";


const technologies = [
    { name: 'Python', icon: <FaPython className="tech-icon" aria-hidden="true" />, color: '#6da8d6' },
    { name: 'HTML', icon: <FaHtml5 className="tech-icon" aria-hidden="true" />, color: '#e86d3f' },
    { name: 'CSS', icon: <FaCss3Alt className="tech-icon" aria-hidden="true" />, color: '#4c9be8' },
    { name: 'JavaScript', icon: <FaJs className="tech-icon" aria-hidden="true" />, color: '#f0d457' },
    { name: 'Java', icon: <FaJava className="tech-icon" aria-hidden="true" />, color: '#e27d43' },
    { name: 'Docker', icon: <FaDocker className="tech-icon" aria-hidden="true" />, color: '#0f1ef3' },
    { name: 'React', icon: <FaReact className="tech-icon" aria-hidden="true" />, color: '#3e80c7' },
    {name: 'PySpark', icon: <DiSpark className="tech-icon" aria-hidden="true" />, color: '#e7e7d7' },
    {name: 'NumPy', icon: <SiNumpy className="tech-icon" aria-hidden="true" />, color: '#0d7f91' },
    {name: 'Pandas', icon: <SiFoodpanda className="tech-icon" aria-hidden="true" />, color: '#ffffff' },

];

const Tech = () => {
    return(
        <section id="tech" className='section-card tech-section'>
            <h1 className="section-heading">Tech Stack</h1>
            <div className="tech-grid">
                {technologies.map(({ name, icon, color }) => (
                    <div className="tech-item" style={{ '--accent-color': color }} key={name}>
                        {icon}
                        <span>{name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Tech