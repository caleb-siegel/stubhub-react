import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div>
                <NavLink to="about">About Us</NavLink>
            </div>
        </nav>
    )
}

export default Nav;