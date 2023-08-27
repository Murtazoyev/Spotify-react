import React, { useState } from "react";
import { useContext } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import currentTrack from "../../Contexts/currentTrack";
import searchContext from "../../Contexts/searchcontext";
import Song from "../children/Song";

function SearchResult({ tracks }) {
	const trackIMG = tracks[0]?.album?.images[0]?.url;
	const [songOn, setSongOn] = useState(false);

	const { changeTrack } = useContext(currentTrack);

	const clickSong = () => {
		localStorage.setItem("lastTrack", JSON.stringify(tracks[0]));
		let data = {
			isPlaying: true,
			track: tracks[0],
		};

		changeTrack(data);
		setSongOn(true);
	};

	return (
		<div className="flex flex-col xl:flex-row gap-[25px] w-full mb-[35px] h-full">
			<div className="left_block  xl:w-[80%] lg:w-[100%] h-full">
				<h2 className="text-white  font-bold mb-[20px] xl:text-3xl lg:text-2xl md:text-2xl">
					Лучший результат
				</h2>
				<div className="first-track bg-[rgba(0,0,0,.3)] h-[200px] w-full rounded-lg p-[20px] relative overflow-hidden ">
					<img
						src={trackIMG || ""}
						className="mb-[20px] w-[80px] h-[80px] "
						alt=""
					/>
					<h2 className="text-white  font-bold xl:text-3xl lg:text-2xl md:text-xl">
						{tracks[0]?.name}
					</h2>
					<p className="text-[gray]  font-semibold xl:text-xl lg:text-[16px] md:text-xl">
						{tracks[0]?.artists[0].name} 
					</p>
					{
						songOn ? 
							<button
								className="max-md:w-[50px] max-md:h-[50px] w-[70px] h-[70px] flex justify-center items-center bg-[#65D36E] rounded-full absolute bottom-[15px] right-[15px] cursor-default "
								onClick={clickSong}
							>
								<FaPause size="23px" />
							</button>
							:
							<button
								className="play-btn  max-md:w-[50px] max-md:h-[50px] w-[70px] h-[70px] flex justify-center items-center bg-[#65D36E] rounded-full"
								onClick={clickSong}
							>
								<FaPlay size="23px" />
							</button>		
					}
				</div>
			</div>
			<div className="right_block w-full" >
				<h2 className="text-white font-bold mb-[20px] xl:text-3xl lg:text-2xl md:text-2xl">
					Треки
				</h2>
				<table className="w-full">
					<tbody className="w-full flex flex-col gap-1" >
						{tracks.map((item, idx) => (
							<Song key={item.id} item={item} idx={idx + 1} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default SearchResult;
