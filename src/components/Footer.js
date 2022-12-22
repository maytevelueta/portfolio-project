import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer ({
    GitHub = < BsGithub />,
    LinkedIn = < BsLinkedin />
}) {
    return ( 
        <footer className="footer">
            <div className="footer-links">
            <a href="https://github.com/maytevelueta" >{GitHub}</a>
            <a href="https://www.linkedin.com/in/mayté-rodríguez-velueta-66a295a1/" >{LinkedIn}</a>
            </div>
        </footer>
     );
}
 
export default Footer;
