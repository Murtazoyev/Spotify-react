import { useContext } from "react";
import { useEffect, useState } from "react";
import MyPlaylist from "../Components/children/MyPlaylist";
import PlaylistList from "../Components/Playlistlist";
import TOKEN from "../Contexts/token";
import { useHttp } from "../hook/http.hook";
import Loading from "../Components/children/Loading";
import {Helmet} from "react-helmet-async";

const Home = () => {
	const [plaslists, setPlayslits] = useState([]);
	const [myPlaslists, setMyPlayslits] = useState([]);
	const [releses, setReleses] = useState([]);
	const [errorMsg, setErrorMsg] = useState('');
	const [greeting, setGreeting] = useState('Hello');
	
	
	const { loading, error, request } = useHttp();

	const token = useContext(TOKEN);

	
	useEffect(() => {
		let date = new Date()
		let month = date.getMonth() + 1
		let timestamp = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + date.getHours() + ":" + date.getMinutes() + " UTC"
		timestamp = timestamp.replace(/-/g, "/")
		
		function dateIsValid(date) {
			return !Number.isNaN(new Date(date).getTime());
		}
		timestamp = dateIsValid(timestamp) ? new Date(timestamp).toISOString() : setErrorMsg('Not a valid date. Please try again')


		request(
			"https://api.spotify.com/v1/me/playlists?limit=50&offset=0",
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then((res) => {
			setMyPlayslits(res.items);
		});
		request(`https://api.spotify.com/v1/browse/featured-playlists?country=UZ&locale=uz&timestamp=${timestamp}&limit=50&offset=5`, 
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then(res => {
			setPlayslits(res?.playlists?.items)
		})
		request(`https://api.spotify.com/v1/browse/new-releases?country=UZ&limit=20&offset=5`, 
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then(res => {
			setReleses(res?.albums?.items)
		})
	}, []);

	useEffect(() => {
		let time = new Date().getHours()

		if(time > 18) {
			setGreeting("Good evening")
		} else if(time > 12) {
			setGreeting("Good afternoon")
		} else if(time >= 6) {
			setGreeting("Good morning")
		} else if(time >= 0) {
			setGreeting("Good night")
		}

	}, [])

	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <span>error</span>;
	}

	return (
		<>
            <Helmet>
                <title>Spotify - Home</title>
            </Helmet>
			<section className="">
				<div className="mt-[30px]">
					<h1 className="max-sm:text-2xl font-bold text-[39px] text-white mb-[30px]">
						{greeting}
					</h1>
					<div className="2xl:grid-cols-3 max-sm:grid-cols-2 grid grid-cols-2 gap-4 max-sm:gap-2 ">
						{
							myPlaslists.map((item) => (
								<MyPlaylist key={item.id} {...item} />
							))
						}
					</div>
				</div>
				<PlaylistList type={'songs'} errorMsg={errorMsg} plaslists={plaslists} title={"Made for you"} />
				<PlaylistList type={'album'} errorMsg={errorMsg} plaslists={releses} title={"New Releses"} />
			</section>
		</>
	);
};

export default Home;
