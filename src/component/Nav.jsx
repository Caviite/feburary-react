import { useContext } from "react"
import NavStyle from "./nav.module.css"
import { Link } from "react-router-dom"
import { userContext } from "../context/userContext"

function Nav() {
    const { user, logOut, isAuthenticated } = useContext(userContext)
    return (

        <div className={NavStyle.navContainer}>
            <div className={NavStyle.logo}>LOGO{user ? ` • ${user?.name}` : ''}</div>

            <ul className={NavStyle.navItems}>
                <li className={NavStyle.navLink}><Link to="/">Home</Link></li>
                <li className={NavStyle.navLink}><Link to="About">About</Link></li>
                <li className={NavStyle.navLink}><Link to="Product">Product</Link></li>
                <li className={NavStyle.navLink}><Link to="Contact">Contact</Link></li>
                <li className={NavStyle.navLink}><Link to={"Profile/" + (user?.name ?? '')}>Profile</Link></li>
                {isAuthenticated ? (
                    <li className={NavStyle.navLink} onClick={logOut}>Logout</li>
                ) : (
                    <>
                        <li className={NavStyle.navLink}><Link to="Signup">Signup</Link></li>
                        <li className={NavStyle.navLink}><Link to="Login">Login</Link></li>
                    </>
                )}
            </ul>

        </div>
    )
}

export default Nav 