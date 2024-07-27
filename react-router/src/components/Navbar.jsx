import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <nav>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>about</li></Link>
                <Link to="/services"><li>Services</li></Link>
                <Link to="/user"><li>username</li></Link>
                <Link to="/"><li>Careers</li></Link>
            </nav>
        </>
    )
}
