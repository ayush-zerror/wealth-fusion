import { Committee, Team } from '@/helpers/Team'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section3 = () => {
  return (
    <div id='about-section3'>
        <h2>The Team</h2>
        <div className='team-container'>
            {Team.map((member, index) => (<div key={index} className="member">
                <div className='profile'>
                    <Image width={1000} height={1000} src={member.image}  alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <div className='tag'>
                    <p>{member.role}</p>
                    <Link href="/"><i className="ri-linkedin-box-fill"></i></Link>
                </div>
                <p>{member.bio}</p>
            </div>))}
            
        </div>
        <h2>Risk Committee</h2>
        <div className='team-container'>
            {Committee.map((member, index) => (<div key={index} className="member">
                <div className='profile'>
                    <Image width={1000} height={1000} src={member.image}  alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <div className='tag'>
                    <p>{member.role}</p>
                    <Link href="/"><i className="ri-linkedin-box-fill"></i></Link>
                </div>
                <p>{member.bio}</p>
            </div>))}
            
        </div>
    </div>
  )
}

export default Section3