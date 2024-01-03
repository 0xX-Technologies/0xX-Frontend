import Image from 'next/image'
import React from 'react'

const TypeBox = (props) => {

  return (
    <div className='bg-[#161616] w-[90vw] md:w-[30rem] lg:w-[520px] rounded-xl p-[2rem]'>
        <div className='text-[24px] md:text-[33px] text-white'> {props.title} </div>
        <div className='flex justify-center mt-4 md:my-4'> <Image src={props.img} alt='' style={{width: '16rem'}}/> </div>
        <div className='text-[13px] md:text-[17px] font-mono text-white leading-[18.69px] md:leading-[28.8px] opacity-[0.78]'>
          {props.description}
        </div>
    </div>
  )
}

export default TypeBox