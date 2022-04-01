import { Navbar } from "../../components/all-comp"
import { AccLinks } from "../../components/account-comp/acc-links"
export const Login = () => {
    return (
        <div>
            <div class="container product-navbar">
                <Navbar />
            </div>
            <div class="account-page">
                <div class="account-container">
                    <div class="signUp-offer">
                        <img src="../assets/vivir-models.png" alt=""></img>
                        <div class="offer-info">
                            <p><strong>Flat Rs.400 + free shipping</strong></p>
                            <p>On your first order</p>
                        </div>
                    </div>
                    <div class="form-container">
                        <AccLinks />
                        <form class="login-form">
                            <input type="text" placeholder="Username" required />
                            <input type="password" placeholder="Password" required />
                            <div class="pswd-rem">
                                <input type="checkbox" id="check" />
                                <label id="remember-check">Remember me</label>
                            </div>
                            <button type="submit" class="account-btn">Login</button>
                            <a href="#" class="fr-pswd">Forgot password?</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}