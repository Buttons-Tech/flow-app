import React from 'react'
import { MdMenuOpen } from "react-icons/md";
import flowLogo from '../../assets/flow-logo-png.png'

const NavBar = () => {

  return (
    <div className='border  border-[3px] border-gray-500 w-full '>
      <div className='flex justify-between items-center px-4'>
        <div className='flex items-center '>
            <div className=' w-[4rem] h-[3rem] bg-[#b1c907]'></div>
        <img src={flowLogo} className='w-[8rem]' alt="" />
        </div>
            <MdMenuOpen size={50} />
      </div>

    </div>
  )
}

export default NavBar
