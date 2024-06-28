import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Culture from "../pages/guide/Culture";
import Gastronomy from "../pages/guide/Gastronomy";
import Hotels from "../pages/guide/Hotels";
import Transport from "../pages/guide/Transport";
import Terrain from "../pages/guide/Terrain";
// import TAA from "../TAA";

export default function Layout() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/guide/culture' element={<Culture />} />
				<Route path='/guide/gastronomy' element={<Gastronomy />} />
				<Route path='/guide/hotels' element={<Hotels />} />
				<Route path='/guide/transport' element={<Transport />} />
				<Route path='/guide/terrain' element={<Terrain />} />
			</Routes>
			{/* <TAA/> */}
		</BrowserRouter>
	);
}
