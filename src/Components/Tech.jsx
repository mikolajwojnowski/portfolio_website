import './Section.css'
import './Tech.css'
import { FaCss3Alt, FaDocker, FaHtml5, FaJava, FaJs, FaPython, FaReact } from "react-icons/fa";

const technologies = [
    { name: 'Python', icon: <FaPython className="tech-icon" aria-hidden="true" />, color: '#6da8d6' },
    { name: 'HTML', icon: <FaHtml5 className="tech-icon" aria-hidden="true" />, color: '#e86d3f' },
    { name: 'CSS', icon: <FaCss3Alt className="tech-icon" aria-hidden="true" />, color: '#4c9be8' },
    { name: 'JavaScript', icon: <FaJs className="tech-icon" aria-hidden="true" />, color: '#f0d457' },
    { name: 'Java', icon: <FaJava className="tech-icon" aria-hidden="true" />, color: '#e27d43' },
    { name: 'Docker', icon: <FaDocker className="tech-icon" aria-hidden="true" />, color: '#0f1ef3' },
    { name: 'React', icon: <FaReact className="tech-icon" aria-hidden="true" />, color: '#3e80c7' },
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