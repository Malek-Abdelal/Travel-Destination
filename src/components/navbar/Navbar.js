import { Link } from "react-router-dom";
import './Navbar.css';
function NavBar () {
    return (
        <>
        <p>Travel app</p>
        <nav>
            <ul>
                <li><Link id="link" to = '/'>Home</Link></li>
                <li>services</li>
                <li>contact</li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar;