// src/pages/Auth/SignUp.jsx
import React, { useState } from "react";
import AuthLayout from "../../components/AuthLayout";
import SocialButton from "../../components/SocialButton";
import InputField from "../../components/InputField";
import googleLogo from "../../assets/google.png";
// import facebookLogo from "../../assets/facebook.png";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [formData, setFormData] = useState({
		name: "",
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
		console.log("Form submitted:", formData);
		// Add form submit logic here
	};

	return (
		<AuthLayout>
			<h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>

			<div className="flex justify-between mb-6 gap-4">
				<SocialButton
					imgSrc={googleLogo}
					text="Sign up with Google"
					iconColor="text-red-500"
				/>
				{/* <SocialButton
					imgSrc={facebookLogo}
					text="Sign up with Facebook"
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
					label="Full Name"
					type="text"
					name="name"
					placeholder="Enter your full name"
					value={formData.name}
					onChange={handleChange}
				/>

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

				<InputField
					label="Confirm Password"
					type="password"
					name="password"
					placeholder="Re Enter password"
					value={formData.password}
					onChange={handleChange}
				/>

				<button
					type="submit"
					className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
				>
					Create Account
				</button>
			</form>

			<p className="text-center text-sm mt-4">
				Already have an account?{" "}
				<Link to="/login" className="text-purple-600 hover:underline">
					Log In
				</Link>
			</p>
		</AuthLayout>
	);
};

export default SignUp;
