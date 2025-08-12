// src/components/InputField.jsx
import React from "react";

const InputField = ({ label, type, placeholder, value, onChange }) => {
	return (
		<div className="mb-4">
			<label className="block text-sm font-medium mb-1">{label}</label>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
			/>
		</div>
	);
};

export default InputField;
