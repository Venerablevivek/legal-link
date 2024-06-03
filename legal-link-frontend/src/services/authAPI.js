import {toast} from "react-hot-toast";
import { setLoading, setToken } from "../slices/authSlice";
import {setUser} from "../slices/profileSlice";
import { apiConnector } from "./apiConnector";
import { BASE_URL } from "../BASE_URL.js";


export function register(fullName,email,password,confirmPassword,phoneNumber,gender,imageUrl,accountType, navigate) {

    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            console.log("login inside ayay");
            const response = await apiConnector("POST", `${BASE_URL}/auth/register`, {
                fullName,
                email,
                password,
                confirmPassword,
                phoneNumber,
                gender,
                imageUrl,
                accountType,
            });

            console.log("login inside after request");

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            console.log("response data is ", response);

            toast.success("User Registrated Successfully");
            navigate("/login");

        } catch (error) {
            console.log("SIGNUP API ERROR.............", error.response.data.message)
            toast.error(`SignUp Failed due to ${error.response.data.message}`)
            navigate("/register")
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId)
    }
}

export function login(email, password, navigate){
    return async(dispatch) =>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST",`${BASE_URL}/auth/login`, {
                email,
                password
            });
            
            if(!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Login Successful");

            dispatch(setToken(response.data.token));
            dispatch(setUser({ ...response.data.user}));

            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("User", JSON.stringify(response.data.user))

            navigate("/");

        } catch (error) {
            console.log("LOGIN API ERROR..............", error)
            toast.error(`Login failed due to ${error.response.data.message}`)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }

export function updateUser(id, fullName,phoneNumber,gender,imageUrl,height,weight, navigate) {

    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("PUT", `${BASE_URL}/user/update-user`, {
                id,
                fullName,
                phoneNumber,
                gender,
                imageUrl,
                height,
                weight,
            });

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("User Data Updated Successfully");
            navigate("/dashboard/user/my-profile");

        } catch (error) {
            console.log("Update user api ERROR.............", error)
            toast.error(`Update User Failed, ${error.response.data.message}`)
            navigate("/dashboard/user/my-profile")
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId)
    }
}

export function updateLawyer(id, fullName,imageUrl,gender,phoneNumber,weight,height,specialization,ticketPrice,
    qualifications,experiences,timeSlots,about,bio, navigate) {

    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("PUT", `${BASE_URL}/user/update-lawyer`, {
                id, fullName,imageUrl,gender,phoneNumber,weight,height,specialization,ticketPrice,
    qualifications,experiences,timeSlots,about,bio,
            });

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("Lawyer Data Updated Successfully");
            navigate("/dashboard/lawyer/my-profile");

        } catch (error) {
            console.log("Update Lawyer api ERROR.............", error)
            toast.error(`${error.response.data.message}`)
            navigate("/dashboard/lawyer/my-profile")
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId)
    }
}

export function createStreak(id, present, streak, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("PUT", `${BASE_URL}/auth/create-streak`, {
                id, present, streak
            });

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("User Streak created Successfully");
            navigate("/streak-map");

        } catch (error) {
            console.log("User Streak api ERROR.............", error)
            toast.error("User Streak Failed")
            navigate("/streak-map")
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId)
    }
}

export function createReview(name,rating,job,imageUrl,reviewText,navigate) {

    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", `${BASE_URL}/user/review/create`, {
                name:name,rating,job,imageUrl,reviewText
            });

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("Review Created Successfully");
            navigate("/dashboard/user/my-profile");

        } catch (error) {
            console.log("Update user api ERROR.............", error)
            toast.error(`Review Can't created due to ${error.response.data.message}`)
            navigate("/dashboard/user/my-profile")
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId)
    }
}

export function createLawyerDetails(id,fullName,email,Document1,Document2,specialization, navigate) {

    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", `${BASE_URL}/lawyer/verify-details`, {
                id,fullName,email,Document1,Document2,specialization
            });

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("Documents Uploaded Successfully");
            navigate("/dashboard/lawyer/my-profile");

        } catch (error) {
            console.log("Update user api ERROR.............", error)
            toast.error("Unable to upload Documents ", error.response.data.message);
            navigate("/dashboard/lawyer/my-profile")
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId)
    }
}

export function updateLawyerStatus(id, status, navigate) {

    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const isApproved = status;
            const response = await apiConnector("PUT", `${BASE_URL}/lawyer/update-lawyer-status`, {
                id, isApproved
            });

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("Lawyer Status Updated Successfully");
            navigate("/admin-dashboard");

        } catch (error) {
            console.log("Update Lawyer api ERROR.............", error)
            toast.error("Update Lawyer Status Failed",error.response.data.message)
            navigate("/admin-dashboard")
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId)
    }
}

export function getPasswordResetToken(email, setEmailSent) {
    return async (dispatch) => {
        dispatch(setLoading(true))
        try{
            const response = await apiConnector("POST", `${BASE_URL}/auth/reset-password-token`, {email,})

            console.log("RESET PASSWORD TOKEN RESPONSE..........", response)

            if(!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Password Reset Email Sent Successfully")
            setEmailSent(true);
        } catch(error) {
            console.log("RESET PASSWORD TOKEN ERROR", error)
            toast.error("Failed To Send Email For Resetting Password",error.response.data.message);
        }
        dispatch(setLoading(false))
    }
}


export function resetPassword(password, confirmPassword, token, navigate){
    return async(dispatch) => {
        dispatch(setLoading(true));
        try {

            const response  = await apiConnector("POST", `${BASE_URL}/auth/reset-password`, {password, confirmPassword, token});

            console.log("RESET Password response ", response);

            if(!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Password has been reset Successfully");
            navigate("/reset-complete");
        } catch (error) {
            console.log("RESET PASSWORD TOKEN ERROR", error)
            toast.error("Unable to Reset Password, ",error.response.data.message);
        }
        dispatch(setLoading(false));
    }
}