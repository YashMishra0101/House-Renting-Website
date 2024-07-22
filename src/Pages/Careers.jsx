import React from 'react'
import career from '../assets/about1.png'
import Footer from '../componet/Footer'
export const Careers = () => {
  return (
    <>
    <div className='flex flex-col justify-between pt-14 px-10 gap-2 md:flex-row md:pt-28'>
        <div className='flex flex-col gap-4 md:gap-8'>
            <h3 className='font-bold text-lg '>CAREERS AT ROOM QUEST</h3>
            <h2 className='font-bold text-4xl '>WORK WITH US</h2>
            <p className='tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium est itaque ullam suscipit qui excepturi?</p>
            <button className='bg-blue-600 rounded-sm w-full h-12 text-white font-bold md:w-52'>VIEW CAREERS</button>
        </div>
        <div>
            
            <img src={career} alt="" srcSet="" />
        </div>
    </div>
    <div className='bg-blue-100 h-48 flex flex-col justify-center items-center gap-4 px-10'>
        <h3 className='text-3xl font-bold'>Career Opportunities</h3>
        <p className=''>Explore our open roles for working totally remotely, from the office or somewhere in between.</p>

    </div>
    <div className="flex items-center mt-10 px-10 md:px-48">
      <div className="h-0.5 bg-gray-300 w-full "></div>
      <div className="bg-blue-600 rounded-lg   text-white font-bold h-10 flex flex-col justify-center items-center w-80 hover:bg-blue-700">Sales</div>
      <div className="h-0.5 bg-gray-300 w-full "></div>
    </div>
    <div className=' flex flex-col gap-2 px-10 mt-5 mb-8 md:flex-row md:justify-evenly md:mt-10'>
        <div className="font-bold">Account Executive</div>
        <div className="">India-Nagpur</div>
        <div className="">Apply</div>
    </div>
    <div className=' flex flex-col gap-2 px-10 mt-5 mb-8 md:flex-row md:justify-evenly'>
        <div className="font-bold">Account Executive</div>
        <div className="">India-Nagpur</div>
        <div className="">Apply</div>
    </div>
    <div className=' flex flex-col gap-2 px-10 mt-5 mb-8 md:flex-row md:justify-evenly '>
        <div className="font-bold">Account Executive</div>
        <div className="">India-Nagpur</div>
        <div className="">Apply</div>
    </div>
    


    <Footer/>
    </>
  )
}
