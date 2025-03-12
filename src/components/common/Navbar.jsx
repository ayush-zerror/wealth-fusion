import { MenuData } from '@/helpers/MenuData'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
   const route = useRouter()
  return (
    <nav id='navbar' className={`${route.pathname === '/' ? '' : 'white'}`}>
        <Link href='/'><Image width={1000} height={1000} src="/logo.png" alt='logo' /></Link>
        <div className='links'>
            {MenuData.map((item, index) => <Link href={item.path} key={index}>{item.name}</Link>)}
        </div>
    </nav>
  )
}

export default Navbar