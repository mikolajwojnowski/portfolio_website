import './Section.css'
import './About.css'
import { FaArrowRight } from "react-icons/fa6";


const About = () => {
    return(
        <section id="about" className="section-card about-section">
            <div className='about-me'>
                <h1 className="section-heading">About Me</h1>
                <p className="about-copy">I'm a 24-year-old Computer Science student with a passion for technology and programming</p>
            </div>
            {/* <a className='about-me-btn' href="#tech">
                <span className='about-me-text'>Get to know me better</span>
                <span className='about-me-text-icon'><FaArrowRight /></span>
            </a> */}
        </section>
    )
}

export default About

