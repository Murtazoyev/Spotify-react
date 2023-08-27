import { useNavigate } from "react-router-dom";


const MyPlaylist = ({ id, images, name, tracks }) => {
	const navigate = useNavigate("/playlist/name");


	const showPlaylist = () => {
		navigate("/playlist?id=" + name, { state: {track: tracks.href, img: images[0]?.url} });
	};

	return (
		<div
			onClick={showPlaylist}
			className="flex rounded-md max-sm:rounded-sm overflow-hidden bg-[#ffffff20] w-full cursor-pointer"
		>
			<img
				src={images[0]?.url}
				className="w-[82px] max-sm:w-[50px] shadow-[0_20px_20px_black]"
				alt=""
			/>
			<div className="px-[21px] py-{28px} flex items-center justify-center ">
				<p className="font-bold text-xl max-sm:text-sm text-white truncate capitalize">
					{name}
				</p>
			</div>
		</div>
	);
};

export default MyPlaylist;
