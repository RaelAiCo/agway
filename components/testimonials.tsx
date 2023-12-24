'use client';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import { motion } from 'framer-motion';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Image from 'next/image';
import {Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const testimonialsContent = {

    heading: {
        title:'Hear what our customers have to say.',
        subTitle:"Testimonials"
    },
    testimonials: [
        {
            img: "/images/person-1-min.jpg",
            name:"Chisomo Banda",
            titleRole:"Managing Director of TechSolutions Zambia Ltd",
            quote:"I can't speak highly enough of Agway's project management services. Working with them was a game-changer for our organization. The meticulous planning and seamless execution by Agway's team played a pivotal role in the success of our recent project. Their commitment to excellence is truly commendable."
        },
        {
            img: "/images/person-2-min.jpg",
            name:"Mwila Mulenga",
            titleRole:"Founder of HealthCare Innovations Zambia Ltd.",
            quote:"Agway's consultancy services have been a beacon for our business. Their strategic guidance has been a driving force behind our growth in the healthcare sector. The team's dedication and genuine partnership approach make Agway an invaluable asset. I wholeheartedly recommend their services."
        },
        {
            img: "/images/hero-img-min-9.jpg",
            name:"Kabaso Mbewe",
            titleRole:"Procurement Manager at GlobalTech Solutions Zambia.",
            quote:"When it comes to reliable general supply, Agway is unmatched. We've consistently received high-quality products within our budget and timelines. Agway's attention to detail and efficiency have made them an integral part of our supply chain. Working with them has truly elevated our procurement processes. I highly recommend Agway for their exceptional services."
        },
        
    ]
       
    }


const Testimonials = ({className}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(null);
    const [isBeginning, setIsBeginning] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        setIsEnd(sliderRef.current.swiper.isEnd);
        setIsBeginning(sliderRef.current.swiper.isBeginning);
    });

    const prevHandler = useCallback(() => {
        if(!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    });
    const nextHandler = useCallback(() => {
        if(!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    });



  return (
    <section className={`${className}overflow-hidden`} >
        <div className='container px-4 mx-auto'>
            <div className='flex justify-center'>
                <div className='w-full md:w-8/12 flex gap-0 items-center'>
                    <div className='text-center w-auto md:w-screen max-w-full
                    md:max-w-xl mx-auto mb-16'>
                        {testimonialsContent.heading.subTitle && (
                            <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.2,
                                    duration: 0.5,
                                }
                            }}
                            viewport={{ once: true }}
                            className='uppercase tracking-[3px] text-[12.5px]
                            mb-5 inline-block text-gray-500'>
                                {testimonialsContent.heading.subTitle}
                            </motion.span>
                        )}
                        
                        {testimonialsContent.heading.title && (
                            <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.3,
                                    duration: 0.5,
                                }
                            }}
                            viewport={{ once: true }}
                            className='text-2xl lg:text-4xl'>
                                {testimonialsContent.heading.title}
                            </motion.h2>
                        )}
                        
                    </div>
                </div>
            </div>
            <div className='lg:flex justify-start lg:justify-center'>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.9,  
                            duration: 0.5,
                        }
                    }}
                    viewport={{ once: true }}
                    className='w-full lg:w-10/12 lg:flex gap-0 items-center'>
                            <Swiper 
                            ref={sliderRef}
                            speed={700}
                            spaceBetween={30}
                            onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
                            className='z-50 py-32 mb-7 relative flex items-center'
                            >
                                {testimonialsContent.testimonials.map((testimonials, idx) => (
                                    <SwiperSlide className='w-full' key={testimonials.name}>
                                        <div className='block md:flex overflow-y-visible
                                        mt-10 items-stretch bg-white'>
                                            <div className='md:w-4/12'>
                                                <Image 
                                                src={testimonials.img}
                                                alt={testimonials.name}
                                                width={379}
                                                height={320}
                                                className='object-cover object-center
                                                !h-full !w-full'
                                                />
                                            </div>
                                            <div className='md:w-8/12 p-7 md:p-16 flex items-center'>
                                                <div>
                                                    <blockquote className='text-lg mb-7'>
                                                        <span className='text-[200px] leading-[0]
                                                        relative text-blue-500 block'>&ldquo;</span>
                                                        {testimonials.quote}
                                                    </blockquote>
                                                    <div className='flex space-x-3 text-sm'>
                                                        <strong>{testimonials.name}</strong>
                                                        <span>&mdash;</span>
                                                        <span>{ testimonials.titleRole}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                </motion.div>
            </div>
             <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{
                 opacity: 1,
                 y: 0,
                 transition: {
                     delay: 0.3,
                     duration: 0.5,
                 }
             }}
             viewport={{ once: true }}
             className='flex justify-center'>
                <div className='flex space-x-3'>
                    <div onClick={prevHandler} className={`${isBeginning == true ? 
                    "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer" : "opacity-100 bg-blue-500 text-white"} 
                    relative top-0 group transition-all
                    duration-300 ease-in-out w-12 h-12 cursor-pointer 
                    rounded-full inline-flex justify-center items-center`}>
                        <BiChevronLeft className={`text-3xl text-primary transition-all duration-300 ease-in-out 
                        group-hover:text-white ${isBeginning == true ? "group-hover:!text-gray-600" : "group-hover:text-white" }`}/>
                    </div>
                    <div onClick={nextHandler} className={`${isEnd == true ? 
                    "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer" : "opacity-100 bg-blue-500 text-white"} 
                    relative top-0 group transition-all
                    duration-300 ease-in-out w-12 h-12 cursor-pointer 
                    rounded-full inline-flex justify-center items-center`}>
                        <BiChevronRight className={`text-3xl text-primary transition-all duration-300 ease-in-out 
                        group-hover:text-white ${isEnd == true ? "group-hover:!text-gray-600" : "group-hover:text-white" }`}/>
                    </div>
                </div>
            </motion.div>                       

        </div>
    </section>
  )
}

export default Testimonials