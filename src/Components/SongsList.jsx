import { FaPlay } from "react-icons/fa"
import { FiHeart, FiSearch } from "react-icons/fi"
import { HiArrowRight } from "react-icons/hi"
import { BiTime } from 'react-icons/bi';

import Song from "./children/Song";
import { useHttp } from "../hook/http.hook";
import { useContext } from "react";
import TOKEN from "../Contexts/token";

const SongsList = ({tracks}) => {

   return (
      <div className="mt-8">
         <div className="flex justify-between items-center">
            <div className="max-sm:gap-3 flex items-center gap-[40px]">
               <button className="max-md:w-[50px] max-md:h-[50px] w-[70px] h-[70px] flex justify-center items-center bg-[#65D36E] rounded-full">
                  <FaPlay size="23px" />
               </button>
               <button><FiHeart size="38px" color="#ffffff" /></button>
               <button className="p-1 h-fit rounded-full border-[4px]"><HiArrowRight className="rotate-[90deg]" size="22px" color="#ffffff" /></button>
               <button className="w-10 h-10 rounded-full flex justify-center items-center gap-[5px]">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
               </button>
            </div>
            <div className="flex items-center gap-9">
               <button><FiSearch size="22px" color="#ffffff" /></button>
               <select className="max-sm:hidden bg-transparent text-white text-[18px] font-medium">
                  <option>Custom order</option>
                  <option>Custom order</option>
                  <option>Custom order</option>
               </select>
            </div>
         </div>
         <table className="w-full mt-11 max-md:mt-6">
            <thead className='block border-b-2 border-[#666666] py-3 mb-7'>
               <tr className="flex gap-5 text-base text-[#B3B3B3]">
                  <td className="flex-0">#</td>
                  <td className="flex-auto">TITLE</td>
                  <td className="flex-auto max-sm:hidden">ALBUM</td>
                  <td className="flex-1 max-sm:hidden">DATE ADDED</td>
                  <td className="flex-0"><BiTime size='24px' /></td>
               </tr>
            </thead>
            <tbody className='space-y-4'>
               {
                  tracks.map((item, idx) => <Song key={idx} idx={idx + 1} item={item.track ? item.track : item} />) 
               }
            </tbody>
         </table>
      </div>
   );
}

export default SongsList;