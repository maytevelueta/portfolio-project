import { useState } from "react";
import firstImage from "../assets/the-movies-db.png";
import secondImage from "../assets/the-movies-db.png";
import thirdImage from "../assets/cocktails-db.png";

const ProjectsList = () => {

    const [projects] = useState([
        { title: "MoviesDB", image: {firstImage}, body: "lorem ipsum...", author: "mayte", id: 1 },
        { title: "Marove Aqua", image: {secondImage}, body: "lorem ipsum...", author: "mayte", id: 2 },
        { title: "CocktailsDB", image: {thirdImage}, body: "lorem ipsum...", author: "mayte", id: 3 }
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
                    <img src={ project.image } className="project-image" alt="projectimg" />
                    <p>{ project.body }</p> 
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default ProjectsList;