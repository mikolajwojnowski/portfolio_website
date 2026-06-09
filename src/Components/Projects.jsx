import './Section.css'
import './Projects.css'
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A React and Vite portfolio with an interactive WebGL background, smooth anchors, and focused profile sections.',
        stack: ['React', 'Vite', 'Three.js'],
        link: 'https://github.com/mikolajwojnowski',
    },
    {
        title: 'Portfolio Website',
        description: 'A React and Vite portfolio with an interactive WebGL background, smooth anchors, and focused profile sections.',
        stack: ['React', 'Vite', 'Three.js'],
        link: 'https://github.com/mikolajwojnowski',
    },
    {
        title: 'Portfolio Website',
        description: 'A React and Vite portfolio with an interactive WebGL background, smooth anchors, and focused profile sections.',
        stack: ['React', 'Vite', 'Three.js'],
        link: 'https://github.com/mikolajwojnowski',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section-card projects-section">
            <h1 className="section-heading">Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <article className="project-card" key={`${project.title}-${index}`}>
                        <div>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                        <div className="project-stack" aria-label={`${project.title} technologies`}>
                            {project.stack.map((technology) => (
                                <span key={technology}>{technology}</span>
                            ))}
                        </div>
                        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                            <FaGithub aria-hidden="true" />
                            <span>View on GitHub</span>
                            <FaArrowRight className="project-link-arrow" aria-hidden="true" />
                        </a>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects