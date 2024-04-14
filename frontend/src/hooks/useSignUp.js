import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext.jsx';

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    const signup = async (inputs) => {
        const success = handleInputErrors(inputs);
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(inputs)
            })
            const data = await res.json();
            if(data.error) {
                throw new Error(data.error);
            }
            // console.log(data);
            // set the user to localstorage
            // so that info can be get from localstorage when refresh
            localStorage.setItem("chat-user", JSON.stringify(data));
            // context
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { loading, signup };
}

export default useSignUp;

function handleInputErrors(inputs) {
    if (!inputs.fullName || !inputs.username || !inputs.password || !inputs.confirmPassword || !inputs.gender) {
        toast.error("Please fill in all fields.");
        return false;
    }
    if (inputs.password !== inputs.confirmPassword) {
        toast.error("Passwords do not match.");
        return false;
    }
    if (inputs.password.length < 6) {
        toast.error("Password must be at least 6 characters.");
        return false;
    }
    return true;
}