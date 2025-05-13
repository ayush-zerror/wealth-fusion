import Image from 'next/image'
import React from 'react'

const CompanyMap = () => {
  return (
    <div id='company-map'>
       <Image width={1000} height={1000} src="/map.png" alt='company-map'/>
    </div>
  )
}

export default CompanyMap