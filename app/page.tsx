import About from '@/components/About';
import Hero from '@/components/Hero';
import RecentBlog from '@/components/RecentBlog';
import Services from '@/components/services';
import Subscribe from '@/components/subscribe';
import Testimonials from '@/components/testimonials';
import Image from 'next/image';

export default function Home() {
  return (
    
   <>
  <Hero className="pt-32 pb-0 lg:pb-10"/>
  <About className="py-16 lg:py-32 overflow-hidden"/>
  <Services className="py-16 !pt-32 lg:py-32" />
  <Testimonials className="py-16 lg:py-32"/>
  <RecentBlog className="pt-14 pb-15 lg:pb-32"/>
  <Subscribe  className="py-16 pt-64 -mt-48 lg:py-32 bg-blue-500" />
 
  
  </>
   
  );
}
