import { createContext, useContext, useState } from "react";
import { LoginServiceHandler } from "../services/auth-services/loginService";
import { SignupServiceHandler } from "../services/auth-services/signUpservice";
import { useLocation, useNavigate } from "react-router-dom";
const AuthContext = createContext()

const AuthenticationProvider = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation();
    const authToken = localStorage.getItem("authToken")

    const [authUser, setAuthUser] = useState({
        isUserLoggedIn: authToken ? true : false,
        token: authToken
    })
    const UserSignUpHandler = async ({ firstName, lastName, email, password }) => {
        const data = await SignupServiceHandler(firstName, lastName, email, password);
        localStorage.setItem("authToken", data.encodedToken);
        setAuthUser({
            token: data.encodedToken,
            isUserLoggedIn: true,
        })
        navigate("/products")
    }

    const UserLoginHandler = async ({ email, password }) => {
        const data = await LoginServiceHandler(email, password);
        localStorage.setItem("authToken", data.encodedToken);
        setAuthUser({
            token: data.encodedToken,
            isUserLoggedIn: true,
        });
        navigate("/products")
    };

    const logOutHandler = () => {
        setAuthUser({
            token: null,
            isUserLoggedIn: false
        })
        localStorage.removeItem("authToken")
        console.log("Logged out successfully")
    }
    return <AuthContext.Provider
        value={{ authUser, setAuthUser, UserLoginHandler, UserSignUpHandler, logOutHandler }}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { AuthenticationProvider, useAuth }