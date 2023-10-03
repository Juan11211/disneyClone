import React, { useState } from 'react'
import logo from '../assets/disneylogo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { FaUsers } from 'react-icons/fa'
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem'

function Header() {
    const [toggle,setToggle]=useState(false);
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        },
        {
            name: 'WATCH PARTY',
            icon: FaUsers
        }
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex gap-8 items-center'>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
        {menu.map((item, index)=>(
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
        ))}
        </div>
          <div className='flex md:hidden gap-5'>
        {menu.map((item,index)=>index<4&&(
            <HeaderItem  key={index} name={''} Icon={item.icon} />
        ))}
         <div className='md:hidden' onClick={()=>setToggle(!toggle)}>       
            <HeaderItem  name={''} Icon={HiDotsVertical} />
           {toggle? <div className='absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index)=>index>3&&(
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
            ))}
            </div>:null}
            </div> 
        </div>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7rU_ORdI5m6Gc9xFjaB849cnrnLtp4mj6Q&usqp=CAU"
        className='w-[50px] h-[50px] rounded-full'/>
    </div>
  )
}

export default Header