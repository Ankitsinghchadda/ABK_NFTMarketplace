import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { MdWallet, MdClose } from 'react-icons/md'
import { CgMenuLeft } from 'react-icons/cg'
import MobileMenu from './MobileMenu'


const Navbar = () => {
    const navigate = useNavigate()
    const [openMenu, setMenu] = useState(false)
    
  return (
    <header className={`h-[72px] fixed w-full z-[99] text-lg font-semibold translate-y-0 ${openMenu ? 'bg-white text-black': 'text-white'}`}>
      <nav className='flex justify-between px-4 md:px-8 items-center h-full'>
        <div className='flex items-center'>
          <button className='flex md:hidden mr-2 cursor-pointer transition-all ease-in-out' onClick={() => setMenu(prev => !prev)}>
            {openMenu ? <MdClose size={28}/> : <CgMenuLeft size={28}/>}
          </button>
          <div className="cursor-pointer" onClick={() => navigate('/')}>
            NFT_MARKET
          </div>
          
        </div>

        <ul className='hidden lg:flex'>
          <li className='mr-5'>Home</li>
          <li className='mr-5'>Explore</li>
          <li className='mr-5'>Create NFT</li>
          <li className=''>Home</li>
        </ul>

        <div className='flex'>
          <button className='inline-flex items-center mr-3 md:mr-5 rounded-xl md:rounded-lg bg-white/[0.12] backdrop-blur-[10px] p-3 cursor-pointer'>
            <span className=''>
              <MdWallet size={28}/>
            </span>
            <span className='hidden md:flex text-white ml-2'>
              Connect wallet
            </span>
          </button>
          <button className='rounded-xl md:rounded-lg bg-white/[0.12] backdrop-blur-[10px] inline-flex items-center p-3 cursor-pointer ' onClick={() => navigate('/profile')}>
            <span className=''>
              <IoPersonCircleOutline size={28}/>
            </span>
          </button>
        </div>
      </nav>
      {openMenu && <MobileMenu />}
    </header>
  )
}

export default Navbar
