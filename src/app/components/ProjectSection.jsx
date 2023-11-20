"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


  const projectsData = [
    {
      id: 1,
      title: "Responsive Project",
      description: "Project 1 description: This responsive portfolio project is designed to showcase my web development work in a mobile-friendly format. It emphasizes clean and efficient design principles, ensuring a seamless user experience across various devices.",
      image: "/images/projects/" + encodeURIComponent("Portfolio Responsive.PNG"),
      tag: ["All", "web"], 
      gitUrl: "https://github.com/Joha0112/Web-Page-Johana",
      previewUrl: "",
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Project 2 description: This portfolio project showcases a collection of my web development work. It includes a variety of web applications and websites, each demonstrating different skills and technologies.",
      image: "/images/projects/Portafolio.PNG",
      tag: ["All", "Web"], 
      gitUrl: "https://github.com/Joha0112/Johana-Africano",
      previewUrl: "https://johana-africano.vercel.app/",
    },
  {
    id: 3,
    title: "Airplane",
    description: "Project 3 description: This layout project for an airline's landing page combines attractive design and functionality, providing users with an informative and user-friendly platform to explore travel options.",
    image: "/images/projects/aerolinea-proyecto.PNG" ,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Joha0112/aerolinea",
    previewUrl: "https://aerolinea-ten.vercel.app/",
  },
  {
    id: 4,
    title: "Funny English",
    description: "Project 4 description: It is an exciting and effective mobile application designed to facilitate the learning of the English language in an interactive and accessible way.",
    image:"/images/projects/funny-english-figma.PNG",    
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://www.behance.net/gallery/143531859/FUNNY-ENGLISH",
  },
  
  {
    id: 5,
    title: "Pinterest Clon",
    description: "Project 5 description: Pinterest Clon is a web application that replicates the core functionalities of the popular image-sharing platform, Pinterest. Users can create accounts, browse a wide range of images, and save them to their collections.",
    image:"/images/projects/Pinterest-Clon.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Joha0112/pinterest-proyecto",
    previewUrl: "https://joha0112.github.io/pinterest-proyecto/",
  },
  {
    id: 6,
    title: "ATM",
    description: "Project 6 description: Interactive website that simulates the operation of a virtual ATM. This application allows users to check their account balances, make cash withdrawals, and deposit funds into their fictitious account.",
    image:"/images/projects/Cajero-Automatico.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Joha0112/Cajero-Automatico",
    previewUrl: "https://joha0112.github.io/Cajero-Automatico/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;