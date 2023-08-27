import { HiUserAdd } from "react-icons/hi"
import { IoCloseSharp } from "react-icons/io5";

const Drawer = () => {
   return (
      <div className="max-2xl:w-[270px] w-[345px] h-screen right-full absolute xl:relative xl:right-0 bg-black">
         <div className="max-2xl:w-[270px] max-w-[345px] w-full h-[100vh] fixed right-full top-0 bg-black px-5 py-[29px] xl:right-0">
            <div className="flex justify-between items-center ">
               <div className="">
                  <p className="text-[#CCCCCC] text-[20px] font-bold">Friend Activity</p>
               </div>
               <div className="flex gap-5">
                  <button>
                     <HiUserAdd className="cursor-pointer" color='#CCCCCC' size="27px" />
                  </button>
                  <button >
                     <IoCloseSharp className="cursor-pointer" color='#CCCCCC' size="27px" />
                  </button>
               </div>
            </div>

            <div className="mt-10">
               <p className="text-[18px] text-[#CCCCCC] font-medium">Let friends and followers on Spotify see what you’re listening to.</p>
            </div>

            <div role="status" className="shadow animate-pulse">
               <div className="flex items-center mt-4 space-x-3">
                  <svg className="w-14 h-14 text-gray-200 dark:text-[#8c8c8c]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                  <div className="w-full">
                     <div className="h-2.5 bg-gray-200 rounded-full dark:bg-[#8c8c8c] w-full max-w-[128px] mb-2"></div>
                     <div className="w-full max-w-[192px] h-2 bg-gray-200 rounded-full dark:bg-[#8c8c8c]"></div>
                  </div>
               </div>
               <div className="flex items-center mt-4 space-x-3">
                  <svg className="w-14 h-14 text-gray-200 dark:text-[#8c8c8c]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                  <div className="w-full">
                     <div className="h-2.5 bg-gray-200 rounded-full dark:bg-[#8c8c8c] w-full max-w-[128px] mb-2"></div>
                     <div className="w-full max-w-[192px] h-2 bg-gray-200 rounded-full dark:bg-[#8c8c8c]"></div>
                  </div>
               </div>
               <div className="flex items-center mt-4 space-x-3">
                  <svg className="w-14 h-14 text-gray-200 dark:text-[#8c8c8c]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                  <div className="w-full">
                     <div className="h-2.5 bg-gray-200 rounded-full dark:bg-[#8c8c8c] w-full max-w-[128px] mb-2"></div>
                     <div className="w-full max-w-[192px] h-2 bg-gray-200 rounded-full dark:bg-[#8c8c8c]"></div>
                  </div>
               </div>


            </div>

            <div className="mt-5">
               <p className="text-[18px] text-[#CCCCCC] font-medium">Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
            </div>

            <div className="mt-[23px] flex items-center justify-center">
               <button className="rounded-full bg-white uppercase max-w-[233px] w-full py-[20px] text-[#171717] tracking-[0.14em] font-bold text-[18px]">SETTINGS</button>
            </div>
         </div>
      </div>
   );
}

export default Drawer;