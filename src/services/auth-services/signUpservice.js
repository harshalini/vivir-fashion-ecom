import axios from "axios";
import { toast } from "react-toastify";

export const SignupServiceHandler = async (firstName, lastName, email, password) => {
    try {
        const res = await axios.post("api/auth/signup", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
        toast.success("Signed up successfully")
        return res.data;
    }
    catch (error) {
        toast.error("Error occured while signing in")
    }
}