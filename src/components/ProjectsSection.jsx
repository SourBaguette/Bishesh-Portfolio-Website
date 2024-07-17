"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJS E-Commerce App",
    description: "E-Commerce App built using NextJS and Wix Headless",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    demoURL: "https://shrestha-ecommerce-store.netlify.app/",
    codeURL: "",
  },
  {
    id: 2,
    title: "Food Recipe App",
    description: "Browse recipes for your favorite meals.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    demoURL: "https://next-level-food-lemon.vercel.app/",
    codeURL: "https://github.com/SourBaguette/Food-Order-App",
  },
  {
    id: 3,
    title: "ThreeJS 3D customization Tool",
    description: "",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    demoURL: "T-shirt customization tool built using ThreeJS and ChatGPT",
    codeURL: "https://github.com/SourBaguette/project_threejs",
  },
  {
    id: 4,
    title: "Simon Game",
    description: "A basic Simon Game built using JavaScript",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    demoURL: "https://sourbaguette.github.io/SimonGame.github.io/",
    codeURL: "https://github.com/SourBaguette/SimonGame.github.io",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    description: "A basic Tic-Tac-Toe game built using JavaScript",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    demoURL: "https://sourbaguette.netlify.app/",
    codeURL: "https://github.com/SourBaguette/Tic-Tac-Toe",
  },
];
const ProjectsSection = () => {
  const ref = useRef(null);
  const [tag, setTag] = useState("All");
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        /> */}
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
              demoURL={project.demoURL}
              codeURL={project.codeURL}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
