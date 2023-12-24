'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BiLogoLinkedinSquare, BiLogoFacebookCircle } from "react-icons/bi";


const teamContent ={
    heading: {
        title: "Introducing our Exceptional Team",
        subTitle: "Meet our Team",
        description: " AGWAY Investment Limited is made up of vibrant individuals who have a timely grasp of industry trends in service provision. A youthful enthusiasm and energy greets the calling, emailing or walk in customer. All members of staff from the General Management right down to the General workers have undergone extensive training and competence in the proper utilization of all products and handling of customer queries.",
    },
    team: [
        {
            image: "/images/team-1-min.jpg",
            name: "Helgerh Musonda MR.",
            role: " Director and Co-Founder",
            linkedin: "https://linkedin.com",
            facebook: "https://facebook.com",
        },
        {
            image: "/images/team-3-min.jpg",
            name: "Martha Syamutondo",
            role: "Board Member",
            linkedin: "https://linkedin.com",
            facebook: "https://facebook.com",
        },
        {
            image: "/images/CEO.jpg",
            name: "David Syamutondo",
            role: "CEO and Co-Founder",
            linkedin: "https://linkedin.com",
            facebook: "https://facebook.com",
        },
    ],
};

const Team = ({className }) => {

    return (
        <section className={`${className}`}>
            <div className='container px-4 mx-auto'>
                <div className='lg:flex justify-center mb-20 lg:mb-36'>
                    <div className='w-full lg:w-8/12 lg:flex gap-7 items-center'>
                        <div className='lg:w-7/12 mb-5 lg: mb-0'>
                            {teamContent.heading.subTitle && (

                                <motion.span
                                initial={{opacity:0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y:0,
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.0,
                                    },
                                }}
                                viewport={{once: true}}
                                className='uppercase tracking-[3px] text-sm mb-5 inline-block
                                text-gray-500'
                                >
                                    {teamContent.heading.subTitle}
                                </motion.span>
                            )}

                            {teamContent.heading.title && (

                            <motion.h2
                            initial={{opacity:0, y: 10 }}
                            whileInView={{
                                opacity: 1,
                                y:0,
                                transition: {
                                    delay: 0.5,
                                    duration: 0.3,
                                },
                            }}
                            viewport={{once: true}}
                            className='text-2xl lg:text-4xl'
                            >
                                {teamContent.heading.title}
                            </motion.h2>
                            )}
                        </div>
                        <div className='lg:w-5/12 self-end'>
                        {teamContent.heading.description && (

                            <motion.p
                            initial={{opacity:0, y: 10 }}
                            whileInView={{
                                opacity: 1,
                                y:0,
                                transition: {
                                    delay: 0.5,
                                    duration: 0.6,
                                },
                            }}
                            viewport={{once: true}}
                            className='text-gray-500'
                            >
                                {teamContent.heading.description}
                            </motion.p>
                            )}

                        </div>
                    </div>
                </div>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                 gap-7 lg:w-10/12 mx-auto'>
                    {teamContent.team.map((person, idx) => {
                        idx*= 0.2;
                        return (
                            <motion.div
                            key={person.name}
                            className='bg-white relative overflow-hidden'
                            initial={{opacity:0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y:0,
                                transition: {
                                    delay: idx,
                                    duration: 0.3,
                                }
                            }}
                            viewport={{once: true}}
                            >
                              <Link href="#">
                              <Image 
                              src={person.image}
                              width={400}
                              height={400}
                              className='object-cover object-top w-full !max-h-72 !max-w-full'
                              alt='Image'
                              />  
                              </Link> 
                              <div className='p-8'>
                                <h3 className='mb-0.5'>{person.name}</h3>
                                <p className='text-gray-500 uppercase text-[12px] tracking-[1px] mb-4'>{person.role}</p>
                                <div>
                                    {person.facebook && (
                                        <Link
                                        href={person.facebook}
                                        className='duration-300 transition-all ease-in-out hover:opacity-30'
                                        >
                                        <BiLogoFacebookCircle className='text-lg'/>
                                        </Link>
                                    )}
                                    {person.linkedin && (
                                        <Link
                                        href={person.linkedin}
                                        className='duration-300 transition-all ease-in-out hover:opacity-30'
                                        >
                                        <BiLogoLinkedinSquare className='text-lg'/>
                                        </Link>
                                    )}
                                </div>
                              </div>
                            </motion.div>
                        );
                    })}
                 </div>
            </div>
        </section>
    );
};
export default Team;