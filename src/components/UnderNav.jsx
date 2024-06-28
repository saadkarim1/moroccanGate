import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

export default function UnderNav() {
	return (
		<div className='underNav relative bg-slate-100 element-center gap-[50px]'>
			<Link
				to='/'
				className='relative  text-base  font-bold hover:text-[#00A448] border-slate-100 py-4 px-3   cursor-pointer group'
			>
				<span>Home</span>
			</Link>
			<span className='relative  text-base font-bold hover:text-[#00A448]   py-4 px-3 cursor-pointer group'>
				Moroccan Guide
				<MdArrowDropDown className='inline text-2xl' />
				<div className='tooText invisible absolute text-center top-[100%] font-normal left-0 right-0 bg-[#00A448]  rounded-[6px] text-white  transition-opacity duration-500 ease-linear  group-hover:visible group-hover:opacity-100 r z-50'>
					<Link
						to='/guide/culture'
						className='block py-3 hover:underline hover:scale-110 transition duration-200'
					>
						Culture
					</Link>
					<Link
						to='/guide/gastronomy'
						className='block py-3 hover:underline hover:scale-110 transition duration-200'
					>
						Gastronomy
					</Link>
					<Link
						to='/guide/hotels'
						className='block py-3 hover:underline hover:scale-110 transition duration-200'
					>
						hotels & hostels
					</Link>
					<Link
						to='/guide/transport'
						className='block py-3 hover:underline hover:scale-110 transition duration-200'
					>
						Transport
					</Link>
					<Link
						to='/guide/terrain'
						className='block py-3 hover:underline hover:scale-110 transition duration-200'
					>
						terrain
					</Link>
				</div>
			</span>
			<span className='relative  text-base font-bold hover:text-[#00A448]  py-4 px-3 cursor-pointer group'>
				Competition
				<MdArrowDropDown className='inline text-2xl' />
				<div className='tooText invisible absolute text-center top-[100%] font-normal left-0 right-0 bg-[#00A448]  rounded-[6px] text-white  transition-opacity duration-500 ease-linear  group-hover:visible group-hover:opacity-100 r z-50'>
					<a className='block py-3 hover:underline hover:scale-110 transition duration-200'>
						News
					</a>
					<a className='block py-3 hover:underline hover:scale-110 transition duration-200'>
						Groups/Result
					</a>
					<a className='block py-3 hover:underline hover:scale-110 transition duration-200'>
						Match
					</a>
					<a className='block py-3 hover:underline hover:scale-110 transition duration-200'>
						Videos
					</a>
					<a className='block py-3 hover:underline hover:scale-110 transition duration-200'>
						Tickets
					</a>
				</div>
			</span>
			<span className='relative   text-base font-bold hover:text-[#00A448]  py-4 px-3 cursor-pointer group'>
				Community Chats
				<MdArrowDropDown className='inline text-2xl p-0' />
				<div className='toochat invisible absolute text-center top-[100%] font-normal left-0 right-0 bg-[#00A448]  rounded-[6px] text-white  transition-opacity duration-500 ease-linear  group-hover:visible group-hover:opacity-100 r z-50'>
					<a className='block py-3 hover:underline hover:scale-110 transition duration-200'>
						Events
					</a>
					<a className='block py-3 hover:underline hover:scale-110 transition duration-200'>
						General chat
					</a>
				</div>
			</span>
			<span className='relative  text-base font-bold hover:text-[#00A448] border-slate-100  py-4 px-3 cursor-pointer group'>
				Contact us
			</span>
		</div>
	);
}
