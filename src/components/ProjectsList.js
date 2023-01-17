import { useState } from "react";

const ProjectsList = () => {

    const [projects] = useState([
        { title: "MoviesDB", photo: (<img src="/assets/the-movies-db.png" alt="projectimg" />), body: "lorem ipsum...", author: "mayte", id: 1 },
        { title: "Marove Aqua", photo: <img src="/assets/the-movies-db.png" alt="projectimg"/>, body: "lorem ipsum...", author: "mayte", id: 2 },
        { title: "CocktailsDB", photo: <img src="/assets/cocktails-db.png" alt="projectimg"/>, body: "lorem ipsum...", author: "mayte", id: 3 }
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
                <a href="https://cocktails-app-mr.netlify.app/" style={{
                textDecoration: "none",
                fontSize: "22px",
                fontWeight: "bold"
                }}>{ project.title }</a>
                    <img className="project-image" src="/assets/cocktails-db.png" alt="projectimg" />
                    <p>{ project.body }</p> 
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default ProjectsList;