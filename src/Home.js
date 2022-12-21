import { useState } from "react";
import ProjectsList from "./components/ProjectsList";
import Values from "./components/Values";
import Contact from './Contact';

const Home = () => {
    const [values] = useState([
        {title: "Trust", body: "A great website work builds trust. Efficiency and communication are essential in my work process.", id: 1},
        {title: "Functionality", body: "My designs are focused to ease the user experience while navigating the site.", id: 2},
        {title: "Quality", body: "lorem ipsum...", id: 3}
    ]);
    
    return ( 
        <div className="home">
            <div className="header">
            <h1>Front-end developer, loving to create accessible and useful interactive products.</h1>
            <div class="dots-container">
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            </div>
            </div>
            <Values values={values} title="Core Values" />
            <ProjectsList />
            <Contact />
        </div>
     );
}
 
export default Home;

