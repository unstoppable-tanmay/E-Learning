/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Lesson = () => {
  return (
    <div className='w-[clamp(100px,200px,80vw)] flex flex-col gap-4'>
      <img src="/assets/course.webp" alt="" className='w-full aspect-[1/.5] rounded-md object-cover' />
      <div className="title font-semibold tetx-xl">What is Engineering ?</div>
    </div>
  )
}

export default Lesson