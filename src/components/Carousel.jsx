import React, {useState} from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import { GoDotFill } from "react-icons/go";

const Carousel = () => {

    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1581938165093-050aeb5ef218?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1494336956603-39a3641efa1c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1485700281629-290c5a704409?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }



  return (
    <div className='max-w-[1400px] h-[50vh] w-full m-auto mt-4 px-4 relative group'>
        <div 
            style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>

        {/* left arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <IoIosArrowDropleft onClick={prevSlide} size={20}/>
            
        </div>


        {/* right arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <IoIosArrowDropright onClick={nextSlide} size={20}/>
            
        </div>

        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                <div 
                    key={slideIndex} 
                    onClick={() => goToSlide(slideIndex)} 
                    className={`text-lg cursor-pointer ${slideIndex == currentIndex ? "text-black" : "text-pink-400"}`}>
                    <GoDotFill />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Carousel