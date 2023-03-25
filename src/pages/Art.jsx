import React from 'react'
import Image from "next/image";


function Art({ image }) {
  return (
    <div>
        <Image className='Pull Shadow rounded-md hover:shadow-Ind ' src={ image } alt='/'/>
    </div>
  )
}

export default Art