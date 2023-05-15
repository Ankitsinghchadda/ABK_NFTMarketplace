import React from 'react'

const Profile = () => {
  return (
    <>
      <div className='flex flex-col w-full h-full'>
        <div className=' relative overflow-hidden w-full h-full'>
          <div className='h-0 pb-[40%] md:pb-[25%] bg-gray-100 hover:bg-gray-300 max-h-[320px]'></div>
          <div className='px-4 h-[60px] md:h-[80px] lg:h-[100px] w-full lg:px-8 mb-4 md:mb-0'>
            <div className='rounded-full border-4 border-white shadow-md absolute h-[100px] w-[100px] md:h-[140px] md:w-[140px] lg:w-[168px] lg:h-[168px] -mt-[36px] md:-mt-[86px]'>
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="" className='object-cover w-full h-full rounded-full'/>
            </div>
          </div>
          <div className='px-4 lg:px-8'>
            <h1 className='font-bold text-xl md:text-2xl mb-2'>Your Name</h1>
            <div className='flex text-sm md:text-lg flex-col md:flex-row '>
              <span>0x51e9...Dd50 ETH</span>
              <span className='text-gray-500 md:ml-3'>Joined May 2023</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
