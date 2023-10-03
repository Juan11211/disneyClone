import React from 'react'
import Disney from '../assets/disney.png'
import DisneyV from '../assets/videos/disney.mp4'
import Marvel from '../assets/marvel.png'
import MarvelV from '../assets/videos/marvel.mp4'
import Pixar from '../assets/pixar.png'
import PixarV from '../assets/videos/pixar.mp4'
import National from '../assets/pixar.png'
import NationalV from '../assets/videos/national-geographic.mp4'
import StarWars from '../assets/starwar.png'
import StarWarsVV from '../assets/videos/star-wars.mp4'


function ProductionHouse() {

    const videos = [
        { 
            id: 1,
            image: Disney,
            video: DisneyV
        },
        {
            id: 2, 
            image: Marvel,
            video: MarvelV
        },
        {
            id: 3,
            image: Pixar,
            video: PixarV
        },
        {
            id: 4,
            image: StarWars,
            video: StarWarsVV
        },
        {
            id: 5,
            image: National,
            video: NationalV
        }
    ]
  return (
    <div className='flex gap-2 p-2 px-5 md:px-16 md:gap-5'>
    {videos.map((item, index) => (
      <div
        key={index} // Add a unique key prop
        className='border-[2px] border-gray-600
                   rounded-lg hover:scale-110 transition-all duration-300
                   ease-in-out cursor-pointer relative shadow-xl 
                   shadow-gray-800'
      >
        <video
          src={item.video}
          autoPlay
          loop
          playsInline
          muted
          className='absolute rounded-md 
                     opacity-0 hover:opacity-50'
        />
        <img src={item.image} className=' opacity-100' />
      </div>
    ))}
  </div>
  
  )
}

export default ProductionHouse