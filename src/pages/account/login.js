import { Navbar } from "../../components/all-comp"
import { AccLinks } from "../../components/account-comp/acc-links"
export const Login = () => {
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
                        <form className="login-form">
                            <input type="text" placeholder="Username" required />
                            <input type="password" placeholder="Password" required />
                            <div className="pswd-rem">
                                <input type="checkbox" id="check" />
                                <label id="remember-check">Remember me</label>
                            </div>
                            <button type="submit" className="account-btn">Login</button>
                            <a href="#" className="fr-pswd">Forgot password?</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}