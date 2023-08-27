import React from 'react'
import {IoIosCloseCircleOutline} from 'react-icons/io'


function RecentSearches_child() {
    return(
        <div className='w-[200px] h-[300px] bg-[#1B1B1B] rounded-lg relative pt-[19px] pr-[21px] pl-[19px]'>
            <IoIosCloseCircleOutline color='white' size="24px" className='absolute right-[7px] top-[7px] '/>
            <div className='w-[150px] h-[150px] rounded-full overflow-hidden flex flex-col justify-center mb-[24px]'>
                <img src="/img/artist-img_1.svg" height="100%" width="100%"  alt="" />
            </div>
            <p className='text-2xl text-white'>Ed Sheeran</p>
            <span className='text-1xl text-[gray]'>Artist</span>
        </div>
    )
}

function RecentSearches() {
  return (
    <div className='RecentSearches mb-[50px] hidden md:block'>
        <h1 className='text-3xl font-bold mb-[24px] text-[#fff]'>Recent searches</h1>
        <div className='flex gap-[20px]'>
            <RecentSearches_child/>
            <RecentSearches_child/>
        </div>
    </div>
    
  )
}

export default RecentSearches