import { useContext } from "react";
import { useEffect, useState } from "react";
import MyPlaylist from "../Components/children/MyPlaylist";
import PlaylistList from "../Components/Playlistlist";
import TOKEN from "../Contexts/token";
import { useHttp } from "../hook/http.hook";
import Loading from "../Components/children/Loading";
import {Helmet} from "react-helmet-async";

const Library = () => {
	const [releses, setReleses] = useState([]);
	
	const { loading, error, request } = useHttp();

	const token = useContext(TOKEN);

	
	useEffect(() => {
		request(`https://api.spotify.com/v1/browse/new-releases?country=UZ&limit=50&offset=5`, 
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then(res => {
			setReleses(res?.albums?.items)
		})
	}, []);


	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <span>error</span>;
	}

	return (
		<>
            <Helmet>
                <title>Spotify - Library</title>
            </Helmet>
			<section className="">
				<PlaylistList type={'album'} plaslists={releses} title={"All you need"} />
			</section>
		</>
	);
};

export default Library;
