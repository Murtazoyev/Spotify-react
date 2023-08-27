import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { TfiControlShuffle } from 'react-icons/tfi';
import { RiRepeat2Line } from 'react-icons/ri';
import { MdSkipPrevious } from 'react-icons/md';
import { MdSkipNext } from 'react-icons/md';
import { MdPauseCircle } from 'react-icons/md';
import { MdPlayCircle } from 'react-icons/md';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { TbDevices2 } from 'react-icons/tb';
import { TbVolume } from 'react-icons/tb';
import { MdOpenInFull } from 'react-icons/md';
import currentTrack from "../Contexts/currentTrack";

const Player = () => {
    const {track, changeTrack} = useContext(currentTrack)

    let [like, setLike] = useState(true)
    let [pause, setPause] = useState(track.isPlaying)
    let [image, setImage] = useState(false)
    const [local, setLocal] = useState(JSON.parse(localStorage.getItem('lastTrack')))


    useEffect(() => {
        const audio = document.querySelector('audio')
        // pause ? audio.play() : audio.pause()
        if(pause) {
            audio.play()
            changeTrack({...track, isPlaying: true})
        } else {
            audio.pause()
            changeTrack({...track, isPlaying: false})
        }

    }, [pause])

    const img = track?.track?.album?.images[0]?.url || local?.album?.images[0]?.url ||  "https://i.scdn.co/image/ab67616d00001e020eb9240c0c5bbba4a0495587"
    const artist = track?.track?.album?.artists[0]?.name || local?.album?.artists[0]?.name

    useEffect(() => {
        setPause(track.isPlaying)
    }, [track.isPlaying])

    const handleSong = () => {
        setPause(!pause)
    }

    return ( 
        <div className="fixed overflow-hidden bottom-0 left-0 bg-[#181818] h-fit w-full flex justify-between items-center p-5 z-[1000] max-lg:p-3 max-[500px]:p-1 max-lg:bottom-24 max-lg:ml-5 max-lg:w-11/12 max-lg:rounded-3xl max-lg:h-24 max-[500px]:h-20">
            <div className="left flex gap-2 items-center max-lg:gap-1">
                {image ? <img src={img} className="bigImg" onClick={() => setImage(!image)}/> : <img src={img} className="w-20 rounded-xl max-lg:w-12 max-[500px]:w-10"  onClick={() => setImage(!image)}/>}           
                <div className="flex text-white flex-col">
                    <p className="whitespace-nowrap w-56 overflow-hidden max-lg:text-sm max-[500px]:text-xs max-lg:w-40 max-lg:overflow-hidden max-[500px]:w-36 max-[500px]:overflow-hidden max-sm:w-32  max-sm:overflow-hidden">{track?.track.name || local?.name}</p>
                    <p className="text-gray-400 max-lg:text-sm max-[500px]:text-xs">{artist}</p>
                </div>
                {like ? <AiFillHeart color="#63CF6C" size={25} className="ml-6 max-lg:ml-2" onClick={() => setLike(!like)}/> : <AiOutlineHeart className="ml-6" color="white" size={25} onClick={() => setLike(!like)}/> }
            </div>
            <div className="mid flex flex-col items-center">
                <div className="top flex gap-2 items-center">
                    <TfiControlShuffle color="c4c4c4" size={30} className=" max-lg:hidden"/>
                    <MdSkipPrevious color="c4c4c4" size={35} className=" max-lg:hidden"/>

                    {pause ? <MdPauseCircle color="white" size={45} onClick={handleSong}/> : <MdPlayCircle color="white" size={45} onClick={handleSong}/> }
                    
                    <MdSkipNext color="c4c4c4" size={35} className=" max-lg:hidden"/>
                    <RiRepeat2Line color="c4c4c4" size={30} className=" max-lg:hidden"/>
                </div>
                <div className="bot">
                    <audio src={track?.track?.preview_url || local?.preview_url} controls autoPlay className="max-lg:absolute max-lg:bottom-0 left-0 max-lg:w-full max-lg:h-4"/>
                </div>
            </div>
            <div className="right flex gap-2 items-center max-lg:hidden">
                <HiOutlineQueueList color="white" size={20}/>
                <TbDevices2 color="white" size={20}/>
                <TbVolume color="white" size={20}/>
                <input type="range" className="input2 w-full"  style={{width: "100px"}}/>
                <MdOpenInFull color="white" size={20}/>
            </div>
        </div>

    );
}
export default Player; 