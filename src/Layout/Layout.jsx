import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Player from "../Components/Player";
import Login from "../Components/Login";
import TOKEN from "../Contexts/token";
import currentTrack from "../Contexts/currentTrack";
import Aside from "../Components/Aside";
import Header from "../Components/Header";
import { useHttp } from "../hook/http.hook";
import bgContext from "../Contexts/backgroundContext";
import searchContext from "../Contexts/searchcontext";


const Layout = () => {
	const [token, setToken] = useState();
	const [track, setTrack] = useState({
		isPLaying: false,
		track: "",
	});
	const [user, setUser] = useState(null)
	const [bgColor, setBgColor] = useState('')
	const [searchText, setSearchText] = useState('')
	const [anim, setAnim] = useState(false)
	

	const {request} = useHttp()

	const changeTrack = (data) => {
		setTrack(data);
	};

	const setContextBg = (data) => {
		setBgColor(data)
	}

	const changeSearchText = (text) => {
		setSearchText(text)
	}


	useEffect(() => {
		const hash = window.location.hash;
		let token = window.localStorage.getItem("token");

		if (!token && hash) {
			token = hash
				.substring(1)
				.split("&")
				.find((elem) => elem.startsWith("access_token"))
				.split("=")[1];

			window.location.href = "";
			window.localStorage.setItem("token", token);
		}

		setToken(token);

		request('https://api.spotify.com/v1/me', "GET", null,
		{
			Authorization: `Bearer ${token}`,
		}).then(res => setUser(res))
	}, []);

	useEffect(() => {
		setAnim(!anim)
	}, [bgColor]);
	
	if (!token) {
		return <Login />;
	}

	// let rgb = `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`

	return (
		<>
		<bgContext.Provider value={{bgColor, setContextBg}} >
			<currentTrack.Provider value={{ track, changeTrack }}>
				<searchContext.Provider value={{searchText, changeSearchText}} >
					<div className='h-[510px] w-full absolute z-[-1] left-0 top-0 bg-gradient-to-b from-[#37373720] to-[#121212]'
						style={{background: `linear-gradient(${bgColor}, #121212)`, opacity: anim ? "1" : "0" }}
					></div>
					<div className='h-[510px] w-full absolute z-[-1] left-0 top-0 bg-gradient-to-b from-[#37373720] to-[#121212]'
						style={{background: `linear-gradient(${bgColor}, #121212)`, opacity: anim ? "0" : "1"}}
					></div>
					<div className="flex-1 h-fit px-6 max-sm:px-3">
						<Header user={user} />
						<Aside />
						<main className='pb-40 md:pl-[18%] pl-[0%] ' >
							<TOKEN.Provider value={token}>
									<Outlet />
							</TOKEN.Provider>
						</main>
						<Player />
					</div>
				</searchContext.Provider>
			</currentTrack.Provider>
		</bgContext.Provider>
		</>
	);
};

export default Layout;