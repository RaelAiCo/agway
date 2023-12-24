'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';


const PostCard = ({blog, index}) => {
    index*= 0.05;
  return (
    <>
    <motion.div
    initial={{ opacity:0, y: 20}}
    whileInView={{
        opacity: 1,
        y: 0,
        transition: {delay: index, duration: 0.5},
    }}
    viewport={{once: true}}
    className='bg-white relative overflow-hidden'
    >
       <Link
       href={blog.url} className='relative block overflow-hidden group'>
        <Image 
        src={blog.image}
        alt={blog.title}
        width={1064}
        height={644}
        className='object-cover object-center h-[400px] !max-w-full
       duration-300 transition-all ease-in-out group-hover:scale-[1.05]'
        />
       </Link> 
       <div className='p-8' >
            <p className='text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]' >
                {format(parseISO(blog.date), "LLL d, yyyy")} • {blog.author} </p>
            <h3 className='mb-4' >
                <Link href={blog.url} className='text-2xl leading-none' > {blog.title} </Link>
            </h3> 
            <p>
                <Link href={blog.url} className='text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block
                border-blue-500' >
                Read More
                </Link>
            </p>
        </div>
    </motion.div>
    </>
  )
}

export default PostCard;