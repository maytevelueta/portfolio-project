import { useState } from "react";
import ProjectsList from "./components/ProjectsList";
import Values from "./components/Values";
import Contact from './Contact';

const Home = () => {
    const [values] = useState([
        {title: "Trust", body: "Materializing your envisioned product won't be a problem. Continuous communication is essential in my work process.", id: 1},
        {title: "Simplicity", body: "Maximize the value of the displayed information keeping the main scope uncomplicated.", id: 2},
        {title: "Functionality", body: "The final product will be presented in a neat design, focused on easing the user interactive experience.", id: 3}
    ]);
    
    return ( 
        <div className="home">
            <div className="header">
            <h1>Front-end developer, passionate about creating unique, simple and functional products of value.</h1>
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

