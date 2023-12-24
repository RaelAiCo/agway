import React from "react";
import Link from "next/link";
import Hero from "@/components/about/Hero";
import Projects from "@/components/projects/Projects";
import CTA from "@/components/CTA";


export const metadata = {
    title: "Projects - Agway Investment Limited",

};

function page() {
    return (
        <>
        <Hero className="pt-52 pb-24" title="Projects" subTitle="Our Projects" />
        <Projects className="pt-0 pb-52" itemsPerPage={2} />
        <CTA 
        className="pt-32 lg:py-32 bg-blue-500"
        cta_label="Get in touch" 
        cta_link="contact/" 
        title="Do you have a project in mind?"
        description="Agway is your strategic partner, excelling in consultancy, project management, and general supply. Our passionate team turns visions into reality, streamlining supply chains and implementing cutting-edge tech. Let's shape success together—your project, our priority, and your success, our mission. Reach out today for transformative solutions!"
         />

        </>
    );
}
export default page;