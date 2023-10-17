"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from  "./TabButton";



const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Angular</li>
        <li>Next.js</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Tailwind</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Developtment</li>
        <li>PROtalento, Colombia</li>
         <li>Software Analysis and Development</li>
        <li>SENA, Colombia</li>

      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Máster in coding DEV.F</li>
        <li>Introduction to React.js Course on Platzi</li>
        <li>English Course for Developers on Platzi</li>
        <li>CSS Animation Course on Platzi</li>
        <li>Basic JavaScript Course on Platzi</li>
        <li>Introduction to MySQL Course on Platzi</li>
        <li>Fundamentals of TypeScript Courseon Platzi</li>
        <li>Professional Python Course on Platzi</li>


      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/projects/about-image.png" width={500} height={500} alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a Front-end Web Developer  specialized in creating engaging websites 
            and applications. With solid knowledge in HTML, Css, Sass, Javascript, React, 
            Angular and Next.js. I can transform your ideas into an innovative digital 
            experience for your business. Oriented to creativity, the user experience in 
            order to deliver digital products with amazing experiences. Also, with
            extensive knowledge in Figma and git, to ensure better efficiency. If you 
            want to meet an expert in Front-end development with skills in user interfaces
            and user expeience.Contact me!
           </p>
           <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};



export default AboutSection;