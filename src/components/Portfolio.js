import React from 'react';
import { FaGithub } from "react-icons/fa";
import '../App.css';

const Portfolio = ({projects}) =>{
    return(
        <div className="work_container">
            <h1>portfolio.</h1>
            <div className="projects_container">
                {projects.map((project)=>(
                <div key={project.id} className="project">
                    <div className="image">
                        <a href={project.url}>
                            <img src={project.imageSrc} alt={project.title}></img>
                        </a>
                    </div>
                    <div className="title">
                    <a href={project.repoUrl}> <FaGithub></FaGithub> {project.title}
                    </a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio