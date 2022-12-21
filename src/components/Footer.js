import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer-links">
            <a href="https://github.com/maytevelueta" icon={<BsGithub />}>GitHub</a>
            <a href="https://www.linkedin.com/in/mayté-rodríguez-velueta-66a295a1/" icon={<BsLinkedin />}>LinkedIn</a>
            </div>
        </footer>
     );
}
 
export default Footer;
