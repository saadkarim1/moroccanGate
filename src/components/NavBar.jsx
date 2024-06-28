import React, { useEffect, useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { GiTrophy, GiTrophyCup } from "react-icons/gi";
import { HiMiniTrophy } from "react-icons/hi2";
import { MdArrowDropDown, MdOutlineLanguage } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import UnderNav from "./UnderNav";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

export default function NavBar() {
	// {Rouge} bg-[#C1272D]
	// {Vert} bg-[#007A33]
	// {OR} bg-[#FFD700]
	// {OR} bg-[#FFD700]
	// {BLUE MAJORELLE} bg-[#4A90E2]
	// {BLANC CASSE} bg-[#F8F8F8]
	// {NOIR} bg-[#333333]
	// {GRIS CLAIR} bg-[#CCCCCC]
	// const [hovering, setHovering] = useState(false);
	// const [currentSelected, setCurrentSelected] = useState();
	// const homeRef = useRef();
	// const markerClickRef = useRef();
	// const markerHoverRef = useRef();

	// const hendleClick = (e) => {
	// 	markerClickRef.current.style.left = e.target.offsetLeft + "px";
	// 	markerClickRef.current.style.width = e.target.offsetWidth + "px";
	// 	setCurrentSelected(e.currentTarget.id);
	// };

	// const hendleHover = (e) => {
	// 	if (e.currentTarget.id != currentSelected) {
	// 		markerHoverRef.current.style.left = e.target.offsetLeft + "px";
	// 		markerHoverRef.current.style.width = e.target.offsetWidth + "px";
	// 		setHovering(true);
	// 		// console.log(e.current.style)
	// 	}
	// };

	// useEffect(() => {
	// 	markerClickRef.current.style.left = homeRef.current.offsetLeft + "px";
	// 	markerClickRef.current.style.width = homeRef.current.offsetWidth + "px";
	// }, []);
	const [worldCup, setWorldCup] = useState(false);
	const [canCup, setCanCup] = useState(true);
	return (
		<nav className=' fixed z-50 w-[100vw] shadow-xl'>
			<div className='flex items-center md:justify-between   bg-[#000]   py-2'>
				<div className='logofont pl-3 md:pl-7 logo text-[#FFD700] text-lg lg:text-[45px] lg:w-[33.33%] w-[50%] cursor-pointer'>
					<Link to='/'>Moroccan Gate</Link>
				</div>
				<div className='hidden lg:inline-flex element-center gap-9 text-[40px] w-[33.33%] '>
					<Tooltip title='World Cup' enterDelay={500} leaveDelay={200} arrow>
						<div
							className={`rounded-[12px]  py-3 px-3 cursor-pointer transition-all duration-300 ${
								worldCup ? "bg-[#00A448]" : "bg-white"
							}`}
							onClick={() => {
								setWorldCup(true);
								setCanCup(false);
							}}
						>
							<img
								src='/src/assets/images/world.svg'
								alt=''
								width={50}
								className={`transition-all duration-300  ${
									worldCup && "scale-125 ]"
								} `}
							/>
						</div>
					</Tooltip>
					<Tooltip title='CAF' enterDelay={500} leaveDelay={200} arrow>
						<div
							className={`rounded-[12px]  py-[6px] px-3 cursor-pointer transition-all duration-300 ${
								canCup ? "bg-[#00A448]" : "bg-white"
							}`}
							onClick={() => {
								setWorldCup(false);
								setCanCup(true);
							}}
						>
							<img
								src='/src/assets/images/file.png'
								alt=''
								width={50}
								className={`transition-all duration-300 scale-100   ${
									canCup && "scale-150 ]"
								} `}
							/>
						</div>
					</Tooltip>
				</div>
				<div className='md:pr-7  pr-3 flex justify-end  items-center text-3xl lg:w-[33.33%] w-[50%] gap-2'>
					<button className='w-fit h-fit font-semibold text-black bg-white rounded-md md:rounded-[11px] md:py-2 py-1 md:px-3 px-2 md:text-lg text-sm hover:text-white transition  duration-500 hover:bg-black'>
						Sign in
					</button>
					<div className='bg-slate-100 w-[.9px] h-10'></div>
					<MdOutlineLanguage className='hidden lg:block cursor-pointer text-white ' />
					<HiMenu className='lg:hidden cursor-pointer text-white' />
				</div>
			</div>
			<div className='lg:hidden bg-white h-fit element-center gap-2 w-full py-2'>
				<div
					className={` element-center gap-1 logofont px-2 py-1 rounded-lg border-2 border-black cursor-pointer transition-all duration-300 ${
						worldCup ? "bg-[#00A448]" : "bg-white"
					}`}
					onClick={() => {
						setWorldCup(true);
						setCanCup(false);
					}}
				>
					<img
						src='/src/assets/images/world.svg'
						alt=''
						width={30}
						className={`transition-all duration-300  ${
							worldCup && "scale-105 ]"
						} `}
					/>
					World Cup
				</div>
				<div
					className={` element-center gap-1 logofont px-4 py-0 rounded-lg border-2 border-black cursor-pointer transition-all duration-300 ${
						canCup ? "bg-[#00A448]" : "bg-white"
					}`}
					onClick={() => {
						setWorldCup(false);
						setCanCup(true);
					}}
				>
					<img
						src='/src/assets/images/file.png'
						alt=''
						width={30}
						className={`transition-all duration-300 scale-100   ${
							canCup && "scale-110 ]"
						} `}
					/>
					CAF Cup
				</div>
			</div>
			<div className='hidden lg:block'>
				<UnderNav />
			</div>
		</nav>
	);
}
