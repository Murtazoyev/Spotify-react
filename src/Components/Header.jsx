import {useContext, useState} from 'react'
import { BsClockHistory } from "react-icons/bs";
import { FiSearch, FiSettings } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SlBell } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom";

import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import searchContext from '../Contexts/searchcontext';

const Header = ({ user }) => {
	const navigate = useNavigate();

	const [anchorElUser, setAnchorElUser] = useState(null);
	const {searchText, changeSearchText} = useContext(searchContext);
	

	const localStorageClear = () => {
		localStorage.clear();
		window.location = window.location.href;
	};

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const location = useLocation();

	const userImage = user?.images[0]?.url;

	return (
		<header className="max-lg:py-4 max-sm::py-3 text-white py-5 flex items-center justify-between md:pl-[18%] pl-[0%] max-sm:mb-[50px]">
			<div className="flex items-center">
				<button
					onClick={() => navigate(-1)}
					className="max-sm:hidden p-[4px] bg-[#00000090] rounded-full mr-5"
				>
					<IoIosArrowBack size="32" />
				</button>
				<button
					onClick={() => navigate(1)}
					className="max-sm:hidden p-[4px] bg-[#00000090] rounded-full"
				>
					<IoIosArrowForward size="32" />
				</button>
				{location.pathname === "/search" ? (
					<div className="mob-inp flex gap-2 w-full rounded-full items-center bg-white py-[12px] px-[18px] mx-[20px] max-sm:absolute top-20 left-2 max-sm:mx-0 max-sm:w-[95%] max-sm:rounded-sm" >
						<FiSearch size="27" color="black" />
						<input
							className="xl:w-[270px] lg:w-[270px] md:w-[270px] sm:w-[270px] w-full h-[25px] outline-none text-[22px] text-black"
							placeholder="Artists, songs, or podcasts"
							type="text"
							defaultValue={searchText}
							onInput={(e) => changeSearchText(e.target.value)}
						/>
					</div>
				) : null}
				<p className="max-sm:block hidden text-2xl font-semibold">
					{user?.display_name}
				</p>
			</div>

			<div className="flex max-sm:gap-2 max-sm: w-fit max-sm:items-center">
				<p className="block max-sm:hidden text-2xl font-semibold mr-5">
					{user?.display_name}
				</p>
				<Link>
					<button className="hidden max-sm:block">
						<SlBell size="25px" color="#ffffff" />
					</button>
				</Link>
				<Link>
					<button className="hidden max-sm:block">
						<BsClockHistory size="25px" color="#ffffff" />
					</button>
				</Link>
				<Link to="/settings">
					<button className="hidden max-sm:block">
						<FiSettings size="25px" color="#ffffff" />
					</button>
				</Link>
				<Box sx={{ flexGrow: 0 }}>
					<Tooltip
						title="Open settings"
						sx={{ background: "#555555" }}
					>
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar
								alt={user?.display_name}
								src={userImage || "/static/images/avatar/2.jpg"}
							/>
						</IconButton>
					</Tooltip>
					<Menu
						sx={{
							mt: "45px",
							display: "flex",
							flexDirection: "column",
						}}
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						<MenuItem onClick={handleCloseUserMenu}>
							<Typography textAlign="center">Profile</Typography>
						</MenuItem>
						<MenuItem onClick={handleCloseUserMenu}>
							<Link to="/search">
								<Typography textAlign="center">
									Search
								</Typography>
							</Link>
						</MenuItem>
						<MenuItem onClick={handleCloseUserMenu}>
							<Link to="/settings">
								<Typography textAlign="center">
									Settings
								</Typography>
							</Link>
						</MenuItem>
						<MenuItem onClick={handleCloseUserMenu}>
							<Typography
								onClick={localStorageClear}
								textAlign="center"
							>
								Log out
							</Typography>
						</MenuItem>
					</Menu>
				</Box>
			</div>
		</header>
	);
};

export default Header;
