import './About.css'
import { FaArrowRight } from "react-icons/fa6";


const About = () => {
    return(
        <>
        <div id="about" className="parent-div">
            <div className='about-me'>
                {/* <h1>About Me</h1> */}
                {/* <hr /> */}
                <h2>
                     I'm 23-year old Computer Science student with a passion for technology and programming.
                </h2>
            </div>
            <div className='about-me-btn'>
                <p className='about-me-text'>Get to know me better</p>
                <p className='about-me-text-icon'><FaArrowRight /></p>
            </div>
        </div>
        </>
    )
}

export default About

