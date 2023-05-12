import React from 'react'
import {BsTwitter, BsInstagram, BsDiscord, BsYoutube, } from 'react-icons/bs'
import {FaTiktok, FaRedditAlien} from 'react-icons/fa'

const MobileMenu = () => {
  return (
    <aside className='bg-white text-black h-screen transition-all px-4 z-40'>
        <ul className=''>
            <li className='h-[72px] flex items-center '>Drops</li>
            <li className='h-[72px] flex items-center '>Stats</li>
            <li className='h-[72px] flex items-center '>Resourse</li>
            <li className='h-[72px] flex items-center '>Create</li>
            <li className='h-[72px] flex items-center '>NFT wallet pro</li>
        </ul>
        <button className='h-[60px] bg-blue-500 text-white rounded-lg w-full'>
            Connect Wallet
        </button>

        <div className='h-[80px] flex items-center w-full justify-center z-[999]'>
            <div className='flex justify-between max-w-[300px] w-full h-[30px] text-gray-400'>
                <div>
                    <BsTwitter size={24}/>
                </div>
                <div>
                    <BsInstagram size={24}/>
                </div>
                <div>
                    <BsDiscord size={24}/>
                </div>
                <div>
                    <BsYoutube size={24}/>
                </div>
                <div>
                    <FaRedditAlien size={24}/>
                </div>
                <div>
                    <FaTiktok size={24}/>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default MobileMenu
