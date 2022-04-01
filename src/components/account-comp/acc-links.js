import { NavLink } from "react-router-dom"
export const AccLinks = () => {
    const activeLink = ({isActive}) => {
        return {
            borderBottom: isActive ? "solid 4px var(--orange)" : "none",
            textDecoration: "none"
        }
    }
    return (
        <div className="acc-link">
        <NavLink to = "/login" style = {activeLink}>
            <p className="login-link">Login</p>
        </NavLink>
        <NavLink to = "/signup" style = {activeLink}>
            <p className="signup-link">Signup</p>
        </NavLink>
        </div>
    )
}