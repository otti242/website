import React from 'react';
import Image from 'next/image'

  

function Hero() {
  return (
    <div className="w-full h-screen overflow-hidden relative">
        <Image 
        src="/gallery/cirrus.jpg" 
        width={0}
        height={0}
        sizes="100vw" 
        alt="About"
        className="w-full object-cover min-h-screen"/>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
          <h1 className="text-6xl text-white font-bold uppercase mb-3">Welcome to otte.net</h1>
          <h3 className="text-4xl font-light bg-yellow-500 p-1">Deep Sky Astrophotography</h3>
          <h4 className="text-2xl text-white">by Andreas Otte</h4>
        </div>
    </div>
  )
}

export default Hero
