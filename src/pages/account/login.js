import { Navbar } from "../../components/all-comp"
import { AccLinks } from "../../components/account-comp/acc-links"
import { useAuth } from "../../context/auth-context"
import { useNavigate } from "react-router"
import { useState, useEffect } from "react"

export const Login = () => {
    document.title = `Vivir Fashion | Login`
    const navigate = useNavigate();
    const { UserLoginHandler, authUser } = useAuth()
    const [userLogIn, setUserLogIn] = useState({
        email: "",
        password: ""
    })
    const guestCredentials = {
        email: "harshalinip@gmail.com",
        password: "harshalinip"
    }

    useEffect(() => {
        authUser.isUserLoggedIn ? navigate("/products") : null
    }, [])
    return (
        <div>
            <div className="container product-navbar">
                <Navbar />
            </div>
            <div className="account-page">
                <div className="account-container">
                    <div className="signUp-offer">
                        <img src="../assets/vivir-models.png" alt="signup-offer-img"></img>
                        <div className="offer-info">
                            <p><strong>Flat Rs.400 + free shipping</strong></p>
                            <p>On your first order</p>
                        </div>
                    </div>
                    <div className="form-container">
                        <AccLinks />
                        <form className="login-form"
                            onSubmit={(e) => {
                                e.preventDefault()
                                UserLoginHandler(guestCredentials)
                            }}
                        >
                            <input type="text" placeholder="Email"
                                onChange={(e) => setUserLogIn({ ...userLogIn, email: e.target.value })}
                            />
                            <input type="password" placeholder="Password"
                                onChange={(e) => setUserLogIn({ ...userLogIn, password: e.target.value })}
                            />
                            <div className="pswd-rem">
                                <input type="checkbox" id="check" />
                                <label id="remember-check">Remember me</label>
                            </div>
                            <button type="button" className="account-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    UserLoginHandler(userLogIn)
                                }}
                            >Login</button>
                            <button type="submit" className="account-btn"
                            >Login as Guest</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}