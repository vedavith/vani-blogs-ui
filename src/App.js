import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/pages/Layout";
import Login from "./components/pages/Login";
import RegisterUser from "./components/pages/RegisterUser";
import BlogList from "./components/pages/BlogList";
import BlogReader from "./components/pages/BlogReader";

function App() {
	return (
		// Creating Routes first and loading navBar
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
				<Route index element={<BlogList />} />
				<Route path="home" element={<BlogList />} />
				<Route path="login" element={<Login />} />
				<Route path="register-user" element={<RegisterUser />} />
				<Route path="blog-read" element={<BlogReader />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
