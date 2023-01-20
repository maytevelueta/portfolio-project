import firstImage from "../assets/the-movies-db.png";
import secondImage from "../assets/marove-aqua.png";
import thirdImage from "../assets/cocktails-db.png";
import { useState } from "react";

const ProjectsList = () => {

    const [projects] = useState([
        { title: "MoviesDB", photo: [firstImage], link: "https://moviesdb-maytev.netlify.app", body: "", author: "mayte", id: 1 },
        { title: "Marove Aqua", photo: [secondImage], link: "https://cocktails-app-mr.netlify.app/", body: "", author: "mayte", id: 2 },
        { title: "CocktailsDB", photo: [thirdImage], link: "https://cocktails-app-mr.netlify.app/", body: "", author: "mayte", id: 3 }
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
                <div className="project-preview" key={ project.id }>
                <a href={ project.link } style={{
                textDecoration: "none",
                fontSize: "22px",
                fontWeight: "bold",
                }}>{ project.title }</a>
                    <img className="project-image"  src={ project.photo } alt="projectimg"/>
                    <p>{ project.body }</p> 
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default ProjectsList;