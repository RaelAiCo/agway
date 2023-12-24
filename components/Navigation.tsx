"use client";
import React, {Fragment, useState, useEffect} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationMenu = [
    {href:'/', label: 'Home'},
    {href:'/projects', label: 'Projects'},
    {href:'/blog', label: 'Blog'},
    {href:'/about', label: 'About'},
    {href:'/contact', label: 'Contact'},

]
const Navigation = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    let newPathname = '';

    newPathname = pathname;
    if (pathname.includes('/blog')) {
        newPathname = '/blog';
    } else if (pathname.includes('/projects')) {
        newPathname = '/projects';
    }


    let wHeight = null;
    let wWidth = null;
    if (typeof window !== 'undefined') {
        wHeight = window.innerHeight;
        wWidth = window.innerWidth;
    }

    const [dimensions, setDimensions] = useState({
        height: wHeight,
        width: wWidth,
    })
     
    useEffect(() => {
        function handleResize() {
          setDimensions((prevDimensions) => ({
            height: window.innerHeight,
            width: window.innerWidth,
          }));
          if (dimensions.width > 768 && open) {
            setOpen(false);
          }
        }
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [dimensions, open]);
      




  return (
    <>
    <header role="banner" className='py-3 absolute w-full z-[3]'>

        
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
            <div>
             <Link href="/" className='flex items-center gap-2'>
                <p className='text-[30px] text-gray-800 font-bold cursor-pointer'> Agway<span className='text-blue-500 sm:block-hidden' >Investment</span></p></Link>
            </div>  
            <div className='flex'>
            <ul role="list" className='hidden md:flex space-x-8'>
                {navigationMenu.map((menu,idx) => (
                    <li key={menu.label}>
                        <Link href={menu.href} className={`relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full
                        before:h-[2px] before:bg-blue-500 before:origin-[100%, 50%] before:transition-all before:duration-300
                        before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:before:origin-[100%, 0%]
                        hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px] uppercase font-semibold pb-2 ${newPathname === menu.href ? 
                        "border-blue-500 text-blue-500 before:scale-x-[1.05]" : "border-transparent"}`}>{menu.label}</Link>
                    </li>
                ))}
            </ul>
            <button className='md:hidden text-md' onClick={()=> setOpen(true)}>Menu</button>

             </div>
        </div>
        
    </header>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          > 
        <div className='fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='pointer-events-none fixed inset-y-0 right-0
                flex max-w-full pl-10'>
                    <Transition.Child
                    as={Fragment}
                    enter='transform transition-all ease-in-out duration-500 sm:duration-500'
                    enterFrom='translate-x-full'
                    enterTo='translate-x-0'
                    leave='transform transition-all ease-in-out duration-500 sm:duration-500'
                    leaveFrom='translate-x-0'
                    leaveTo='translate-x-full'
                    >
                        <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                            <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                                <div className='flex-1 overflow-y-auto px-8 py-6 sm:px-12'>
                                    <div className='flex items-start justify-between'>
                                        <Dialog.Title className="text-lg font-medium text-gray-900">
                                            Menu
                                        </Dialog.Title>
                                        <div className='ml-3 flex h-7 items-center'>
                                            <button 
                                            type='button'
                                            className='relative -m-2 p-2 text-gray-400 hover:text-gray-500'
                                            onClick={()=> setOpen(false)}
                                            >
                                                <span className='absolute -inset-0.5'/>
                                                <span className='sr-only'>Close panel</span>
                                                <XMarkIcon className='h-6 w-6'
                                                aria-hidden="true"/>
                                            </button>

                                        </div>
                                    </div>
                                    <div className='mt-8'>
                                        <div className='flow-root'>
                                            <ul role="list">
                                                {navigationMenu.map((menu, idx)=>(
                                                    <li key={menu.label}>
                                                    <Link href={menu.href} className='py-2 inline-block'>
                                                        {menu.label}
                                                    </Link>
                                                </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                                    <div>
                                        <Link href="/contact" className='block tect-center text-[11.5px] tracking-[2px] font-bold uppercase bg-blue-500 py-4 px-5 text-white'>
                                            Contact us now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            

                        </Dialog.Panel>

                    </Transition.Child>

                </div>
            </div>
        </div>
        </Dialog>  
    </Transition.Root>
    
    </>
  )
}

export default Navigation
