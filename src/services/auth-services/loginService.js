import axios from "axios";
import { toast } from "react-toastify";

export const LoginServiceHandler = async (email, password) => {
    try {
        const res = await axios.post("/api/auth/login", {
            email: email,
            password: password
        })
        toast.success("Logged in successfully")
        return res.data
    }
    catch (error) {
        toast.error("Error occured in logging in")
    }
}