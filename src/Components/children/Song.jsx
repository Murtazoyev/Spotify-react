import { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import currentTrack from "../../Contexts/currentTrack";
import songImg from "../../resources/songImg.jpg";

const Song = ({ item, idx }) => {
	const { changeTrack } = useContext(currentTrack);

	const clickSong = () => {
		localStorage.setItem("lastTrack", JSON.stringify(item));
		let data = {
			isPlaying: true,
			track: item,
		};

		changeTrack(data);
	};
	const img = item?.album?.images[0]?.url

	return (
		<tr
			onClick={clickSong}
			className="max-sm:gap-3 flex gap-5 text-white font-bold items-center hover:bg-[rgba(0,0,0,.3)] p-[10px] rounded-[8px]"
		>
			<td className="flex-0 max-sm:hiiden">{idx}</td>
			<td className="flex-0">
				{
					img ? 
					<img
						className="max-sm:text-[14px] max-sm:w-11 max-sm:h-11 w-[52px] h-[52px]"
						src={img}
						alt=""
					/> :
					<div></div>
				}
			</td>
			<td className="flex-auto flex flex-col">
				<span className="max-sm:text-[14px] truncate max-lg:w-40 max-lg:overflow-hidden">{item.name}</span>
				<span className="max-sm:text-[12px] text-[#B3B3B3] truncate max-lg:w-40 max-lg:overflow-hidden">
					{item.artists[0].name}
				</span>
			</td>
			{/* <td className="flex-auto max-sm:hidden">{item.artists[0].name}</td> */}
			<td className="flex-auto"></td>
			<td className="flex-0">
				<AiOutlineHeart size="22px" />
			</td>
			<td className="flex-0 max-sm:hidden">2 : 12</td>
			<td className="max-[350px]:hidden flex-0 text-lg font-bold hidden max-sm:block rotate-90">
				. . .
			</td>
		</tr>
	);
};

export default Song;
