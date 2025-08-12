// src/pages/Auth/Login.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import InputField from "../../components/InputField";
import SocialButton from "../../components/SocialButton";
import googleLogo from "../../assets/google.png";
// import facebookLogo from "../../assets/facebook.png";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Logging in with:", formData);
		// Add login logic here (API call)
	};

	return (
		<AuthLayout>
			<h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>

			<div className="flex justify-between mb-6 gap-4">
				<SocialButton
					imgSrc={googleLogo}
					text="Log in with Google"
					iconColor="text-red-500"
				/>
				{/* <SocialButton
					imgSrc={facebookLogo}
					text="Log in with Facebook"
					iconColor="text-blue-600"
				/> */}
			</div>

			<div className="flex items-center mb-6">
				<hr className="flex-grow border-gray-300" />
				<span className="px-2 text-gray-400 text-sm">OR</span>
				<hr className="flex-grow border-gray-300" />
			</div>

			<form onSubmit={handleSubmit}>
				<InputField
					label="E-mail Address"
					type="email"
					name="email"
					placeholder="Enter your e-mail"
					value={formData.email}
					onChange={handleChange}
				/>

				<InputField
					label="Password"
					type="password"
					name="password"
					placeholder="Enter password"
					value={formData.password}
					onChange={handleChange}
				/>

				<button
					type="submit"
					className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
				>
					Log In
				</button>
			</form>

			<p className="text-center text-sm mt-4">
				Don’t have an account?{" "}
				<Link to="/signup" className="text-purple-600 hover:underline">
					Create one
				</Link>
			</p>
		</AuthLayout>
	);
};

export default Login;
