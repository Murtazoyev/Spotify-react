import "../index.scss";

import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { BsPlusSquareFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { useState } from 'react';

const Aside = () => {
	return (
		<aside className="max-2xl:w-[250px] max-xl:bg-gradient-to-b max-xl:from-transparent max-xl:to-[#000000] max-lg:bg-transparent max-lg:justify-center max-lg:bottom-0 max-lg:max-w-none max-lg:py-4 max-lg:w-full max-lg:h-24 max-w-[300px] h-[100vh] fixed bottom-0 left-0 bg-black max-lg:p-0 w-full pt-[70px] px-[30px] flex-1 pb-4 z-50">
			<div className="max-lg:border-b-[0px] max-lg:border-[#000000] border-b-[1px] bottom-solid border-[#282828]">
				<div className="flex flex-col gap-6 mb-5">
					<nav>
						<ul className="flex max-lg:items-center max-lg:justify-around lg:flex-col max-lg:gap-0 gap-6 text-[#aaaaaa]">
							<li className="">
								<NavLink
									end
									style={({ isActive }) => ({
										color: isActive ? "#ffffff" : "inherit",
									})}
									to="/"
									className="max-lg:flex-col flex gap-1 items-center w-fit"
								>
									<div className="max-lg:w-[30px]  w-[50px]">
										<MdHomeFilled
											size="37px"
											color="inherit"
										/>
									</div>
									<span className="text-lg font-bold max-lg:text-[14px]">
										Home
									</span>
								</NavLink>
							</li>
							<li className="">
								<NavLink
									style={({ isActive }) => ({
										color: isActive ? "#ffffff" : "inherit",
									})}
									to="search"
									className="max-lg:flex-col flex gap-1 items-center w-fit"
								>
									<div className="max-lg:w-[30px] w-[50px]">
										<FiSearch size="35px" color="inherit" />
									</div>
									<span className="text-lg font-bold max-lg:text-[14px]">
										Search
									</span>
								</NavLink>
							</li>
							<li className="">
								<NavLink
									style={({ isActive }) => ({
										color: isActive ? "#ffffff" : "inherit",
									})}
									to="/library"
									className="max-lg:flex-col flex gap-1 items-center w-fit"
								>
									<div className="max-lg:w-[30px] w-[50px]">
										<VscLibrary
											size="32px"
											color="inherit"
										/>
									</div>
									<span className="text-lg font-bold max-lg:text-[14px]">
										Your Library
									</span>
								</NavLink>
							</li>
							<li className="max-lg:mt-0 mt-8 max-lg:hidden">
								<NavLink
									end
									style={({ isActive }) => ({
										color: isActive ? "#ffffff" : "inherit",
									})}
									to="create-playlist"
									className="max-lg:flex-col flex gap-1 items-center w-fit"
								>
									<div className="max-lg:w-[30px] w-[50px]">
										<BsPlusSquareFill
											size="32px"
											color="inherit"
										/>
									</div>
									<span className="text-lg font-bold max-lg:text-[14px]">
										Create Playlist
									</span>
								</NavLink>
							</li>
							<li className="max-lg:hidden">
								<NavLink
									end
									style={({ isActive }) => ({
										color: isActive ? "#ffffff" : "inherit",
									})}
									to="liked-songs"
									className="max-lg:flex-col flex gap-1 items-center w-fit"
								>
									<div className="max-lg:w-fit w-[50px]">
										<div className="p-[7px] w-fit bg-gradient-to-r from-[#3333A3] to-[#eeeeee] rounded-[4px]">
											<FaHeart
												size="18px"
												color="white"
											/>
										</div>
									</div>
									<span className="text-lg font-bold max-lg:text-[14px]">
										Liked Songs
									</span>
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="max-lg:hidden pt-[22px] flex flex-col gap-[18px]">
				<p className="text-[#B3B3B3] text-lg truncate cursor-pointer">
					Chill Mix
				</p>
				<p className="text-[#B3B3B3] text-lg truncate cursor-pointer">
					Happy Hits!
				</p>
				<p className="text-[#B3B3B3] text-lg truncate cursor-pointer">
					Animefob
				</p>
			</div>
		</aside>
	);
};

export default Aside;
