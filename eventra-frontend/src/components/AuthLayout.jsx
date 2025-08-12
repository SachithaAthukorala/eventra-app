// src/components/AuthLayout.jsx
import React from "react";

const AuthLayout = ({ children }) => {
	return (
		<div className="min-h-screen flex">
			{/* Left panel */}
			<div className="w-1/2 bg-gradient-to-br from-[#2e026d] to-black text-white flex flex-col justify-center items-center p-10 rounded-tr-[50px] rounded-br-[50px]">
				<h1 className="text-4xl font-bold text-purple-400 mb-4">Eventra</h1>
				<p className="text-2xl font-semibold text-center max-w-sm leading-snug">
					Create your account and explore events that match your vibe.
				</p>
			</div>

			{/* Right panel */}
			<div className="w-1/2 flex items-center justify-center px-12 py-10">
				<div className="w-full max-w-md">{children}</div>
			</div>
		</div>
	);
};

export default AuthLayout;
