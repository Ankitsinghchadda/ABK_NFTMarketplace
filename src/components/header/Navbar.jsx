import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { MdWallet, MdClose } from 'react-icons/md'
import { CgMenuLeft } from 'react-icons/cg'
import MobileMenu from './MobileMenu'


const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [openMenu, setMenu] = useState(false)
    const [color, setColor] = useState(false);
    const [page, setPage] = useState(false);
   

    const changeColor = () => {
      if(window.scrollY >= 70){
        setColor(true);
      }else {
        setColor(false);
      }
    }

    useEffect(() => {
      if(location.pathname === '/profile' || location.pathname === '/createNFT' || location.pathname === '/explore'){
        setPage(true)
      }else{
        setPage(false)
      }
    }, [location])
    
    window.addEventListener('scroll', changeColor);

    const toggleMenu = () => {
      setMenu(prev => !prev)
    }

    const closeMenu = () => {
      setMenu(false);
    }
    
  return (
    <header className={`h-[72px] fixed w-full z-[99] text-lg font-semibold translate-y-0 ${openMenu || color || page ? 'bg-white text-black shadow-md': 'text-white'}`}>
      <nav className='flex justify-between px-4 md:px-8 items-center h-full'>
        <div className='flex items-center'>
          <button className='flex lg:hidden mr-2 cursor-pointer transition-all ease-in-out' onClick={toggleMenu}>
            {openMenu ? <MdClose size={28}/> : <CgMenuLeft size={28}/>}
          </button>
          <div className="cursor-pointer" onClick={() => navigate('/')}>
            NFT_MARKET
          </div>
          
        </div>

        <ul className='hidden lg:flex cursor-pointer'>
          <li className='mr-5' onClick={() => navigate('/')}>Home</li>
          <li className='mr-5' onClick={() => navigate('/explore')}>Explore</li>
          <li className='mr-5' onClick={() => navigate('/createNFT')}>Create NFT</li>
          <li className=''>Docs</li>
        </ul>

        <div className='flex'>
          <button className={`inline-flex items-center mr-3 md:mr-5 rounded-xl md:rounded-lg bg-white/[0.12] backdrop-blur-[10px] p-3 cursor-pointer ${color || page ? 'border' : ''}`}>
            <span className=''>
              <MdWallet size={28}/>
            </span>
            <span className={`hidden md:flex ml-2 ${color || page ? 'text-black' : 'text-white'}`}>
              Connect wallet
            </span>
          </button>
          <button className={`rounded-xl md:rounded-lg bg-white/[0.12] backdrop-blur-[10px] inline-flex items-center p-3 cursor-pointer ${color || page ? 'border' : ''}`} onClick={() => navigate('/profile')}>
            <span className=''>
              <IoPersonCircleOutline size={28}/>
            </span>
          </button>
        </div>
      </nav>
      {openMenu && <MobileMenu closeMenu={closeMenu}/>}
    </header>
  )
}

export default Navbar
