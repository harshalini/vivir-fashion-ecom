import { Navbar } from "../../components/all-comp"
import { AccLinks } from "../../components/account-comp/acc-links"
import { useAuth } from "../../context/auth-context"
import { useState } from "react"

export const SignUp = () => {
    document.title = `Vivir Fashion | Signup`

    const { UserSignUpHandler } = useAuth()

    const [userSignUp, setUserSignUp] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
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
                        <form className="register-form">
                            <input type="text" placeholder="Firstname" required
                                onChange={(e) => setUserSignUp({ ...userSignUp, firstName: e.target.value })}
                            />
                            <input type="text" placeholder="LastName" required
                                onChange={(e) => setUserSignUp({ ...userSignUp, lastName: e.target.value })}
                            />
                            <input type="email" placeholder="Email" required
                                onChange={(e) => setUserSignUp({ ...userSignUp, email: e.target.value })}
                            />
                            <input type="password" placeholder="Password" required
                                onChange={(e) => setUserSignUp({ ...userSignUp, password: e.target.value })}
                            />
                            <div className="pswd-rem">
                                <input type="checkbox" id="check" />
                                <label id="remember-check">I accept the terms and conditions</label>
                            </div>
                            <button type="submit" className="account-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    UserSignUpHandler(userSignUp)
                                }
                                }
                            >Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}