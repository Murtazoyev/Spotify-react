import React, { useEffect, useState } from "react";
import { useContext } from "react";
import BrowseAll from "../Components/Search_childs/BrowseAll";
import RecentSearches from "../Components/Search_childs/RecentSearches";
import SearchResult from "../Components/Search_childs/SearchResult";
import searchContext from "../Contexts/searchcontext";
import { Helmet } from "react-helmet-async";
import { useHttp } from "../hook/http.hook";
import TOKEN from "../Contexts/token";
import makeDebouncedHook from "../hook/makeDebauncedHook";
import { debounce } from "lodash-es";

const useDebounce = makeDebouncedHook(debounce);

function Seach() {
	const [tracks, setTracks] = useState([]);
	const { searchText } = useContext(searchContext);
	const token = useContext(TOKEN);

	const { request } = useHttp();

	const makeRequest = useDebounce(() => {
		if (searchText.length > 0) {
			request(
				`https://api.spotify.com/v1/search?q=${searchText}&type=track%2Cartist&market=uz&limit=5&offset=5`,
				"GET",
				null,
				{
					Authorization: `Bearer ${token}`,
				}
			).then((res) => {
				setTracks(res.tracks.items);
			});
		}
	}, 400);

	useEffect(() => makeRequest, [searchText])

	return (
		<>
			<Helmet>
				<title>Spotify - Search</title>
			</Helmet>
			<div className="w-full pt-[24px]  mb-[100px]">
				{searchText ? (
					<SearchResult tracks={tracks} />
				) : (
					<RecentSearches />
				)}
				<BrowseAll />
			</div>
		</>
	);
}

export default Seach;
