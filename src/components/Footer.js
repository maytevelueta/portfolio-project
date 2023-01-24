import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer ({
    GitHub = < BsGithub />,
    LinkedIn = < BsLinkedin />
}) {
    return ( 
        <footer className="footer">
            <div className="footer-links">
            <a href="https://github.com/maytevelueta" style={{ fill: "#AC7D88", fontSize: "1.5em" }}>{GitHub}</a>
            <a href="https://www.linkedin.com/in/mayté-rodríguez-velueta-66a295a1/" style={{ fill: "#AC7D88", fontSize: "1.5em" }}>{LinkedIn}</a>
            </div>
        </footer>
     );
}
 
export default Footer;
