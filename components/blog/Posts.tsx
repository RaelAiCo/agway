'use client';
import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { allPosts } from '.contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import ReactPaginate from 'react-paginate';
import { motion } from 'framer-motion';

const Items = ({currentItems}) => {
    return (
        <>
        {currentItems && currentItems.map((blog, index ) => {
            index *= 0.05;
            return (
                <motion.div className='bg-white relative overflow-hidden group'
                initial={{opacity:0, y: 20 }}
                whileInView={{
                    opacity: 1,
                    y:0,
                    transition: {
                        delay: index,
                        duration: 0.3
                        },
                    }}
                viewport={{once: true}}
                key={blog.title}
                >
                    <Link 
                     href={blog.url}
                     className='relative block overflow-hidden'
                     >
                    <Image 
                    src={blog.image}
                    alt="raelcodes"
                    width={1064}
                    height={644}
                    className="object-cover object-center h-[200px] 
                    duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
                    />
                    </Link>
                    <div className='p-8' >
                        <p className='text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]'>{format(parseISO(blog.date), "LLL d, yyyy")} • {blog.author}</p>
                        <h3 className='mb-4'>
                            <Link href={blog.url} className='text-2xl leading-none' > {blog.title} </Link>
                        </h3>
                        <p>
                            <Link href={blog.url} 
                            className='text-[12px] tracking-[2px] uppercase border-b-2
                            pb-2 inline-block border-blue-500' >
                                Read More
                            </Link>
                        </p>
                    </div>
                </motion.div>
            );


        })}
        
        </>
    );
};


const Posts = ({className, itemsPerPage, archive = false, params}) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [clickPaginate, setclickPaginate] = useState(false);
    const ref = useRef(null);

    let items = null;
    if (archive === false) {
        items = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
    } else {
        if (params?.slug) {
            items = allPosts.filter((blog)=> blog.categories.some(
            (category) => 
                category.title 
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, "")
                .replace(/[\s_-]+/g, "-")
                .replace(/^-+|-+$/g, "") === params.slug
                ) 
            );
        }
    }


    useEffect(() => {
        if (!itemsPerPage || isNaN(itemsPerPage) || itemsPerPage <= 0) {
          console.error("Invalid itemsPerPage value:", itemsPerPage);
          return;
        }
      
        // Ensure that items is an array before attempting to slice it
        if (Array.isArray(items)) {
          const endOffset = itemOffset + itemsPerPage;
          setCurrentItems(items.slice(itemOffset, endOffset));
          setPageCount(Math.ceil(items.length / itemsPerPage));
      
          if (clickPaginate === true) {
            ref.current?.scrollIntoView({ top: -50, behavior: "smooth" });
            setclickPaginate(false);
          }
        } else {
          console.error("Invalid items array:", items);
        }
      }, [items, itemsPerPage, itemOffset, setCurrentItems, setPageCount, setclickPaginate, clickPaginate]);
      
    

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setclickPaginate(true);
        setItemOffset(newOffset);
    };
    if (!items) return null;
    return (
        <section className={`${className}`} ref={ref}>
            <div className='container px-4 mx-auto'>
                <div className='lg:w-10/12 mx-auto mb-20 grid frid-cols-1 
                md:grid-cols-2 lg:grid-cols-3 gap-5' >
                    <Items currentItems={currentItems} />
                </div>
                <div className='lg:w-10/12 mx-auto flex flex-wrap'>
                    <ReactPaginate 
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    previousClassName='page-item'
                    previousLinkClassName='page-link'
                    nextClassName='page-link'
                    breakLabel="..."
                    breakClassName='page-item'
                    breakLinkClassName='page-link'
                    containerClassName='pagination'
                    activeClassName='active'
                    renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </section>
    );
};
export default Posts;