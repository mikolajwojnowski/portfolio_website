import './Section.css'
import './Projects.css'
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const projects = [
    {
        title: 'Tic Tac Toe',
    
        description: 'A Python implementation of the Tic Tac Toe game, featuring an AI opponent that uses the Minimax algorithm.',
        stack: ['Python', 'Pygame'],
        link: 'https://github.com/mikolajwojnowski/TicTacToe',
    },
    {
        title: 'Image Classifier',
        description: 'This project utilizes machine learning to classify images of animal faces using Python and the PyTorch library. The model is trained on the "Animal Faces" dataset from Kaggle',
        stack: ['Python', 'PyTorch'],
        link: 'https://github.com/mikolajwojnowski/image_classification',
    },
    {
        title: 'Movie Catalog Web Application',
        status: 'In Development',
        description: 'This web application mimics the operation of a simplified movie catalog, similar to FilmAffinity. The application provides a platform where users can view movie details, rate movies, add comments, and receive recommendations.',
        stack: ['PHP', 'HTML', 'JavaScript', 'CSS', 'MySQL','MATLAB'],
        link: 'https://github.com/mikolajwojnowski/movies.git',
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
                            <div className="project-title-row">
                                <h2>{project.title}</h2>
                                {project.status && <span className="project-status">{project.status}</span>}
                            </div>
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