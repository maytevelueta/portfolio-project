import { useState } from "react";

const ProjectsList = () => {

    const [projects] = useState([
        { title: "The Bean Machine Project", photo: (<img src="/assets/the-movies-db.png" alt="projectimg" />), body: "lorem ipsum...", author: "mayte", id: 1 },
        { title: "Sweet Berries", photo: <img src="/assets/the-movies-db.png" alt="projectimg"/>, body: "lorem ipsum...", author: "mayte", id: 2 },
        { title: "CocktailsDB", photo: <img src="/assets/the-movies-db.png" alt="projectimg"/>, body: "lorem ipsum...", author: "mayte", id: 3 }
    ]);

    return ( 
        <div className="project-list">
            <a href="/project-listing" style={{
                textDecoration: "none",
                fontSize: "22px",
                fontWeight: "bold"
                }}>Recent Projects</a>
            <div className="project-container">
            {projects.map((project) => (
                <div className="project-preview" key={project.id}>
                    <h2>{ project.title }</h2>
                    <img className="project-image" src="/assets/the-movies-db.png" alt="projectimg" />
                    <p>{ project.body }</p> 
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default ProjectsList;