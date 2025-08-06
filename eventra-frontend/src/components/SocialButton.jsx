// src/components/SocialButton.jsx
import React from "react";

const SocialButton = ({ icon: Icon, imgSrc, text, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="flex items-center justify-center gap-2 border w-full py-2 rounded-md hover:bg-gray-50 transition"
		>
			{imgSrc ? (
				<img src={imgSrc} alt="social logo" className="w-5 h-5" />
			) : (
				<Icon className="text-xl" />
			)}
			<span>{text}</span>
		</button>
	);
};

export default SocialButton;
