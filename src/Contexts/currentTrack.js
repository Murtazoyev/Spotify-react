import { createContext } from "react";

const currentTrack = createContext(JSON.parse(localStorage.getItem('lastTrack')) || {
    isPlaying: false,
    track: ""
})

export default currentTrack