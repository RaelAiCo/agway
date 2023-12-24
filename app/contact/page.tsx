import ContactForm from '@/components/ContactForm';
import Hero from '@/components/about/Hero';
import React from 'react';


export const metadata = {
  title: "Contact | Agway Investments Limited",
};
const page = () => {
  return (
    <>
    <Hero className="pt-32 pb-24" title="Contact" subTitle="Get In Touch" />

    <ContactForm className={undefined} />
    
    </>
  )
}

export default page