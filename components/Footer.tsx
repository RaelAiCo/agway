import React from 'react';
import Link from 'next/link';
import { BiSolidHeart } from 'react-icons/bi';

const footerContent = {
    footerLinks : [
        {
            heading: "Product",
            links: [
                {
                    href: '#',
                    label: "Overview", 
                },
                {
                    href: '#',
                    label: "Solutions", 
                },
                {
                    href: '#',
                    label: "Pricing", 
                },
                {
                    href: '#',
                    label: "Releases",
                    badge: "New", 
                },
            ]
        },
        {
            heading: "Company",
            links: [
                {
                    href: "#",
                    label: " About us",
                },
                {
                    href: "#",
                    label: " Leadership",
                },
                {
                    href: "#",
                    label: " Careers",
                    badge: "We're hiring",
                },
                {
                    href: "#",
                    label: " Contact",
                },
            ]
        },
        {
            heading: "Resources",
            links: [
                {
                    href: "#",
                    label: "Blog",
                },
                {
                    href: "#",
                    label: "Events",
                },
                {
                    href: "#",
                    label: "Newsletter",
                },
                {
                    href: "#",
                    label: "Support",
                },
            ]
        }
    ]
}

const Copyright = () => {
    return (
        <div className='pt-7 mt-7 md:mt-14 md:pt-14 border-t border-t-gray-100
        text-center text-gray-500'>
            <p className='text-center items-center mx-auto text-sm'>
                &copy; 2023 {" "}
                <Link href="/" className='text-blue-500'>Agway</Link>
                . All rights reserved. Created by {" "}
                <Link href="mailto:israelmuyoba@gmail.com" target="_blank" 
                className='text-blue-500'>Israel Muyoba</Link>
            </p>
        </div>
    )
}

const Footer = ({className}) => {
  return (
    <footer className={`${className} overflow-hidden w-full h-full relative`}>
        <div className='container px-4 mx-auto z-20 relative'>
            <div className='md:flex'>

                <div className='md:w-4/12 mb-10 md:mb-0'>
                    <Link href="/" className='text-[22px] text-gray-800 font-bold'>
                        Agway<span className='text-blue-500'>Investment</span>
                    </Link>
                </div>
                <div className='md:w-8/12'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                        {footerContent.footerLinks.map((item, idx) =>(
                            <div className='mb-10 md:mb-0' key={item.heading}>
                                <h3 className='text-gray-800 mb=3'>{item.heading}</h3>
                                <ul className='list-none'>
                                    {item.links.map((link, idx) => (
                                        <li className='mb-2' key={link.label}>
                                            <Link href={link.href} className={`${link.badge ? "flex gap-2 items-center" : ""} text-gray-500 duration-300 transition-all ease-in-out hover:text-blue-500`}>
                                                {link.badge ? (<>
                                                <span>{link.label}</span>
                                                <span className='py-0.5 px-2 rounded-full
                                                bg-blue-100 border border-blue-500 text-[10px]
                                                text-blue-500 font-semibold'>{link.badge}</span>
                                                </>) : (link.label)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                </div>

        <Copyright />
        </div>
    </footer >
  )
}

export default Footer