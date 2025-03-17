import { MenuData } from '@/helpers/MenuData'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const route = useRouter()
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    if(menu){
      gsap.to('#navigation', {opacity:1, duration: 0.3})
    }
    else{
      gsap.to('#navigation', {opacity:0, duration: 0.3})
    }
  })

  return (
    <nav id='navbar' className={`${route.pathname === '/' ? '' : 'white'}`}>
      <Link href='/'><Image width={1000} height={1000} src="/logo.png" alt='logo' /></Link>
      <div className='links'>
        {MenuData.map((item, index) => <Link href={item.path} key={index}>{item.name}</Link>)}
      </div>
      <span className='menu' onClick={()=>setMenu(!menu)}><i className={` ${menu ? 'ri-close-line':'ri-menu-3-line'}`}></i></span>
      <div id="navigation">
        <div className='menu-links'>
          {MenuData.map((item, index) => <Link onClick={()=>setMenu(!menu)} href={item.path} key={index}>{item.name}</Link>)}
        </div>
      </div>
    </nav>
  )
}

export default Navbar