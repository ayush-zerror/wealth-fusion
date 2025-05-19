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
    if (menu) {
      gsap.to('#navigation', {
        opacity: 1, duration: 0.3,
        onComplete: () => {
          gsap.set("#navigation", { pointerEvents: "all" })
        }
      })
    }
    else {
      gsap.to('#navigation', {
        opacity: 0, duration: 0.3,
        onComplete: () => {
          gsap.set("#navigation", { pointerEvents: "none" })
        }
      })

    }
  }, [menu])


  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  
    // Run on mount and on route change
    handleHashChange()
  
    route.events.on('routeChangeComplete', handleHashChange)
    return () => {
      route.events.off('routeChangeComplete', handleHashChange)
    }
  }, [])
  


  return (
    <nav id='navbar' className={`${route.pathname === '' ? '' : 'white'}`}>
      <Link href='/'><Image width={1000} height={1000} src="/blue-logo.png" alt='logo' /></Link>
      <div className='links'>
        {MenuData.map((item, index) => (
          <div key={index} className='nav-item'>
            <Link href={item.path} id={`${route.pathname === item.path ? 'active':''}`} className={`${item.name === "Contact" ? 'contact-btn' : 'underline'}`}>
              {item.name}
            </Link>
            {item.subItems && (
              <div className='dropdown'>
                {item.subItems.map((sub, i) => (
                  <a href={sub.path} key={i} className='dropdown-link'>
                    {sub.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <span className='menu' onClick={() => { setMenu(!menu) }}><i className={` ${menu ? 'ri-close-line' : 'ri-menu-3-line'}`}></i></span>
      <div id="navigation">
        <div className='menu-links'>
          {MenuData.map((item, index) => <Link onClick={() => setMenu(!menu)} href={item.path} key={index}>{item.name}</Link>)}
        </div>
      </div>
    </nav>
  )
}

export default Navbar