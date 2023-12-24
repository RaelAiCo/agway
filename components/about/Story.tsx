'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import img1 from '/public/images/img-square-1-min.jpg';
import img2 from '/public/images/img-square-2-min.jpg';
import img3 from '/public/images/img-square-3-min.jpg';
import img4 from '/public/images/img-square-4-min.jpg';
import img5 from '/public/images/img-square-5-min.jpg';
import img6 from '/public/images/img-square-6-min.jpg';

import post1 from '/public/images/post-1-min.jpg';
import post2 from '/public/images/post-2-min.jpg';

const storyContent = {
    column1: {
        imgs: [
            {
                img: img5,
                alt: "Team brainstorming",
                width: 1188,
                height: 1413,
                tailwindClass: "h-56 lg:h-96"
            },
            {
                img: img1,
                alt: "making a plan",
                width: 1188,
                height: 1413,
            },
        ]
    },
    column2: {
        imgs: [
            {
                img: img2,
                alt: "Team meeting",
                width: 1188,
                height: 1413,
                tailwindClass: "h-48 lg:h-64"
            },
            {
                img: post2,
                alt: "deliver",
                width: 1188,
                height: 1413,
                tailwindClass: "h-56 lg:h-64"
            },
            {
                img: img4,
                alt: "deliver",
                width: 1188,
                height: 1413,
                tailwindClass: "h-56 lg:h-96"
            },
        ]
    },
    column3: {
        imgs: [
            {
                img: post1,
                alt: "honest",
                width: 1188,
                height: 1413,
               
            },
            {
                img: img3,
                alt: "write",
                width: 1188,
                height: 1413,
                
            },
            {
                img: img6,
                alt: "deliver",
                width: 1188,
                height: 1413,
                tailwindClass: "h-56 lg:h-96"
            },
        ]
    },
    storyText: {
        heading: "Crafting Tomorrow's Business Landscape",
        p1: "Conceived by a team of dedicated professionals,  our journey is one of passion and creativity. Starting small but dreaming big, we believe in the power of business to shape lives and communities. Over the years, we've grown into a dynamic force, blending our skills in consultancy, project management, and general supply to create solutions that inspire and endure.",
        p2: "Our path is all about chasing excellence and embracing new challenges. From early projects that ignited our spark to standout solutions now standing as testaments to our vision, every step is fueled by a love for innovation. Today, we're proud of what we've achieved, guided by the same spirit that set us on this path – to shape a world where business strategies, technology, and human experience come together seamlessly. Join us on this journey as we simplify complexity and make a positive impact in the world of business.",
        signature: "/images/signature.png",
        name: "HELGERH MUSONDA MR. ",
        roleTitle: "Director and Co-Founder"
    }
}  

const Story = ({className}) => {
  return (
    <section className={ `${className}`}>
        <div className='container px-4 mx-auto'>
            <div className='md:flex w-full md:w-10/12 mx-auto items-stretch
            md:gap-7'>
                <div className='md:w-4/12 self-center space-y-7 mb-7 md:mb-0'>
                    {storyContent.column1.imgs.map((item, idx) => {
                        idx *= 0.5;
                        return (
                            <motion.div
                            initial={{opacity: 0, y:20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: idx,
                        duration: 0.5
                    }
                }}
                viewport={{ once: true }}
                            >
                              <Image src={item.img}
                              width={item.width}
                              height={item.height}
                              alt={item.alt}
                              className={`${item.tailwindClass ? item.tailwindClass : ""} !max-w-full object-cover
                              object-center`}
                              
                              />
                            </motion.div>
                        );
                    })}
                </div>
                

                <div className='md:w-4/12 space-y-7 mb-7 md:mb-0'>
                {storyContent.column2.imgs.map((item, idx) => {
                        idx *= 0.5;
                        return (
                            <motion.div
                            initial={{opacity: 0, y:20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: idx,
                        duration: 0.5
                    }
                }}
                viewport={{ once: true }}
                            >
                              <Image src={item.img}
                              width={item.width}
                              height={item.height}
                              alt={item.alt}
                              className={`${item.tailwindClass ? item.tailwindClass : ""} !max-w-full object-cover
                              object-center`}
                              
                              />
                            </motion.div>
                        );
                    })}
                </div>
                <div className='md:w-4/12 self-center space-y-7'>
                {storyContent.column3.imgs.map((item, idx) => {
                        idx *= 0.5;
                        return (
                            <motion.div
                            initial={{opacity: 0, y:20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { 
                                    delay: idx,
                                    duration: 0.5
                                }
                             }}
                            viewport={{ once: true }}
                            >
                              <Image src={item.img}
                              width={item.width}
                              height={item.height}
                              alt={item.alt}
                              className={`${item.tailwindClass ? item.tailwindClass : ""} !max-w-full object-cover
                              object-center`}
                              
                              />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            
            <motion.div 
            initial={{opacity: 0, y:20 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { 
                    delay: 0.8,
                    duration: 0.5
                }
             }}
            viewport={{ once: true }}
            className='lg:flex flex-col mt-32 text-left w-full lg:w-6/12
            mx-auto'>
                {storyContent.storyText.heading && (
                    <h2 className='text-2xl md:text-3xl text-gray-800 mb-5'>
                    {storyContent.storyText.heading}
                </h2>
                )}
                {storyContent.storyText.p1 && (
                    <p className='leading-relaxed text-gray-500 mb-7'>
                    {storyContent.storyText.p1}
                </p>
                )}
                {storyContent.storyText.p2 && (
                    <p className='leading-relaxed text-gray-500 mb-10'>
                    {storyContent.storyText.p2}
                </p>
                )}
                <p>
                    <Image 
                    src={storyContent.storyText.signature}
                    alt={storyContent.storyText.name}
                    width={388}
                    height={113}
                    className='w-48 block mb-2'
                    />
                    <strong className='block mb-2 text-gray-800 font-medium font-semibold'>
                    {storyContent.storyText.name + " "}
                    <span className='text-gray-400'>{storyContent.storyText.roleTitle}</span>
                    </strong>
                </p>
            </motion.div>
        </div>
    </section>
  )
}

export default Story
