import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
// import Culture from "./guide/Culture";
// import Gastronomy from "./guide/Gastronomy";
// import Hotels from "./guide/Hotels";
// import Terrain from "./guide/Terrain";
// import Transport from "./guide/Transport";
// import TAA from "../TAA";

export default function Layout() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route index path='/' element={<Home />} />
				{/* <Route path='/guide/culture' element={<Culture />} />
				<Route path='/guide/gastronomy' element={<Gastronomy />} />
				<Route path='/guide/hotels' element={<Hotels />} />
				<Route path='/guide/transport' element={<Transport />} />
				<Route path='/guide/terrain' element={<Terrain />} /> */}
			</Routes>
			{/* <TAA/> */}
		</BrowserRouter>
	);
}
