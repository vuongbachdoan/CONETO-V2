import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resendSignUpCode, sendConfirmationCode } from "../../../Services/authService";

export const FormConfirmSignUp = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState(null);
    const handleInput = (e) => {
        setCode(e.target.value);
    }
    const verify = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));
        sendConfirmationCode(user.username, code)
            .then(() => {
                navigate("/app")
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    const resendCode = () => {
        const user = JSON.parse(localStorage.getItem("user"))
        resendSignUpCode(user.username);
    }
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <form className="w-full max-w-md">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                    </div>

                    <div className="flex items-center justify-center mt-6">
                        <Link to="/sign-in" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                            sign in
                        </Link>

                        <Link to="/sign-up" className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b-2 dark:border-gray-400 dark:text-gray-300">
                            sign up
                        </Link>
                    </div>

                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <svg className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                            </svg>
                        </span>

                        <input onChange={handleInput} type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter code" />
                    </div>

                    <div className="mt-6">
                        <button onClick={verify} className="w-full px-6 mb-3 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Verify
                        </button>

                        <button onClick={resendCode} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Resend code
                        </button>

                        <div className="mt-6 text-center ">
                            <Link to="/sign-up" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                Don't have an account, sign up?
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}


