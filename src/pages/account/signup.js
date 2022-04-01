import { Navbar } from "../../components/all-comp"
import { AccLinks } from "../../components/account-comp/acc-links"
export const SignUp = () => {
    return (
        <div>
            <div className="container product-navbar">
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
                        <form class="register-form">
                            <input type="text" placeholder="Username" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <input type="password" placeholder="Confirm password" required />
                            <button type="submit" class="account-btn">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}