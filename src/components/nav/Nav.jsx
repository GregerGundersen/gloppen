import { Link } from "react-router-dom";



const Nav = () => {
    return (
        <div className="navBar">
            <div className="navLinks">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/admin'>Admin</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Nav;