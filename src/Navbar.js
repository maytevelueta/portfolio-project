
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>>Mayte Velueta</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/contact">Contact</a>
                <a href="/project-listing" style={{
                    color: "white",
                    backgroundColor: "#85586F",
                    borderRadius: "8px"
                }}>Projects</a>
            </div>
        </nav>
     );
}
 
export default Navbar;