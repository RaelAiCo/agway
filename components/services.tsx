'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    BiHardHat,
    BiBulb,
    BiBarChartAlt2,
    BiSolidRocket,
    BiSolidPhoneCall,
    BiRocket,
    BiNotepad,
    BiPhoneCall,
    BiRefresh,
} from 'react-icons/bi'

const servicesContent = {
heading: {
    title:"Holistic Solutions for Growth and Success",
    subTitle: "Our Services",
    description: "At Agway, our comprehensive range of services, including general supply, project management, and consultancy, is distinguished by innovative technology. We firmly believe that our commitment to research, dedication to quality, and a commitment to exceptional performance are the cornerstones of maintaining our leadership in the industry. Our ongoing pursuit of innovation and technology is driven by the goal of delivering outstanding services and products that contribute to the growth of both our customers and ourselves"
},
steps: [
    {
      number: '01',
      icon:  BiBarChartAlt2,
      title: "Business Administration and Project Management Services",
      description: "we work collaboratively to achieve optimal outcomes, earning the trust of our clients across diverse industries.",
      btn: {
        href: "#",
        label: "Learn More"
      }
    },
    {
        number: '02',
        icon:  BiBulb,
        title: "Business and IT Consultation Services",
        description: " we are dedicated to providing comprehensive Business and IT Consultation Services. Our seasoned consultants implement tailored IT solutions, aligning technology with our clients' business goals to enhance operational efficiency.",
        btn: {
          href: "#",
          label: "Learn More"
        }
      },
      {
        number: '03',
        icon:  BiHardHat,
        title: "Equipment and General Supplies Services",
        description: "we serve as the trusted source for Equipment and General Supplies, offering a diverse range of high-quality products to meet our clients' varied needs. Our commitment to reliability, competitive pricing, and lasting partnerships sets us apart.",
        btn: {
          href: "#",
          label: "Learn More"
        }
      }
],
features: [
    {
      number: '01',
      icon:      BiPhoneCall,
      title: "Reach out to us:",
      description: "When you're ready to explore how Agway can support your business goals, simply reach out to us. Whether it's for consultancy, general supply, or project management, we're here to help",
      btn: {
        href: "#",
        label: "Learn More"
      }
    },
    {
        number: '02',
        icon:  BiRefresh,
        title: "Let's Understand Your Needs:",
        description: " Once you've contacted us, our team will work closely with you to understand your specific requirements. This is a crucial step to ensure that our solutions align perfectly with your business needs.",
        btn: {
          href: "#",
          label: "Learn More"
        }
      },
      {
        number: '03',
        icon:  BiNotepad,
        title: "Tailored Proposal Just for You",
        description: "Based on our understanding of your needs, our dedicated team will craft a personalized proposal which will outline the recommended services, proposed solutions, and the associated costs. It's a comprehensive overview to give you clarity on what to expect.",
        btn: {
          href: "#",
          label: "Learn More"
        }
      },
      {
        number: '04',
        icon:  BiRocket,
        title: "Confirmation and Implementation",
        description: "If our proposal aligns with your goals, confirm your commitment to move forward, and we'll work closely with you to implement the solution, providing either expert consultancy, managing projects, or delivering essential supplies to support your success.",
        btn: {
          href: "#",
          label: "Learn More"
        }
      }
]


}

const Services = ({className}) => {
  return (
    <>
        <section className={`${className}`}>
        <div className='container px-4 mx-auto'>
            <div className='lg:flex justify-center mb-20 lg:mb-36'>
                <div className='w-full lg:w-8/12 lg:flex gap-0 items-center'>
                    <div className='lg:w-7/12 mb-5 lg:mb-0'>
                    { servicesContent.heading.subTitle && (
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
                        className='uppercase tracking-[3px] text-sm mb-5
                        inline-block text-gray-500'>
                            { servicesContent.heading.subTitle}
                        </motion.span>
                    )}
                       { servicesContent.heading.title && (
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
                        { servicesContent.heading.title}
                       </motion.h2>
                       )}
                        
                    </div>

                    <div className='lg:5/12 self-end'>
                    { servicesContent.heading.description && (
                        <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.6,
                                duration: 0.5,
                            }
                        }}
                        viewport={{ once: true }}
                        className='text-gray-500'
                        >{ servicesContent.heading.description}
                        </motion.p>
                    )}
                        
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 -mb-72 lg:w-10/12
            mx-auto'>
                {servicesContent.steps.map((step, idx) => {
                    idx *= 0.2;
                    return(
                        <motion.div key={step.title} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: idx,
                                duration: 0.5,
                            }
                        }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, transition: 0.1, }}
                        className='group duration-300 pt-32
                        pl-10 pr-10 pb-20 bg-white relative overflow-hidden 
                        hover:bg-[#fb2576] hover:shadow-2xl'>
                            <span className='text-[200px] inline-block z-[1]
                            font-semibold absolute -top-[120px] opacity-5 left-0
                            leading-0'> { step.number}</span>
                            <div className='absolute top-10 right-10'>
                                <span className='text-3xl text-blue-500 
                                duration-300 transition-all ease-in-out 
                                group-hover:text-white'>
                                    <step.icon />
                                </span>
                            </div>

                            <div className='relative z-40 flex gap-3 items-start'>
                                <div className='font-semibold duration-300
                                transition-all ease-in-out group-hover:text-white 
                                group-hover:text-opacity-50'>
                                    {step.number}
                                </div>
                                <div>
                                    <h3 className='text-[18px] mb-4 duration-300 transition-all ease-in-out group-hover:text-white'>
                                        {step.title}
                                    </h3>
                                    <p className='leading-relaxed text-[15px] text-gray-500
                                    mb-7 duration-300 transition-all ease-in-out group-hover:text-white'>
                                        {step.description}
                                    </p>
                                    <p>
                                        <Link href={step.btn.href} className='text-[12px]
                                        tracking-[2px] uppercase border-b-2 pb-2 inline-block
                                        border-blue-500 duration-300 transition-all ease-in-out
                                        group-hover:border-white group-hover:text-white'>
                                            {step.btn.label}
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
        </section>
        <section className='pt-72 lg:pt-60 bg-blue-500'>
                <div className='container px-4 mx-auto'>
                    <div className='lg:flex justify-center'>
                        <div className='w-full lg:w-8/12 flex gap-0 items-center'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                                {servicesContent.features.map((features, idx) =>{
                                    idx *= 0.2;
                                    return (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: idx,
                                                duration: 0.5,
                                            }
                                        }}
                                        viewport={{ once: true }}
                                        key={features.title} className='relative z-40
                                        flex gap-3 items-start'>
                                            <div>
                                                <span className='text-3xl text-white '>
                                                    <features.icon />
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className='text-lg mb-4 text-white'>
                                                    {features.title}
                                                </h3>
                                                <p className='leading-relaxed text-[15px]
                                                text-white text-opacity-75 mb-7'>
                                                    {features.description}
                                                </p>
                                                <p>
                                                    <Link href={features.btn.href}
                                                    className='text-[12px] tracking-[2px] uppercase border-b-2 pb-2
                                                    inline-block text-white border-white border-opacity-25 transition-all
                                                    duration-300 ease-in-out hover:border-opacity-100'>{features.btn.label}</Link>
                                                </p>
                                            </div>
                                    </motion.div>

                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Services
