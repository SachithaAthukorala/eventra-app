// src/App.jsx
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login"; // Create this later

function App() {
	return (
		<Router>
			<Routes>
				{/* Default route */}
				<Route path="/" element={<Navigate to="/signup" />} />

				{/* Auth pages */}
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
