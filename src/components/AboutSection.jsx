"use client";

// <ul className="list-disc pl-2">
{
  /* <li>JavaScript/TypeScript</li>
        <li>React.JS</li>
        <li>Next.JS</li>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Express.JS</li> */
}
{
  /* </ul> */
}

import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:gap-6">
        <div>
          <h3 className="font-bold text-md">Programming Languages</h3>
          <ul className="list-disc pl-2">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>NodeJS</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>C/C++</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-md">Frameworks</h3>
          <ul className="list-disc pl-2">
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>ExpressJS</li>
            <li>TailwindCSS</li>
            <li>Bootstrap</li>
            <li>AngularJS</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-md">Databases</h3>
          <ul className="list-disc pl-2">
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Prisma</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-md">Tools and Technical</h3>
          <ul className="list-disc pl-2">
            <li>Git</li>
            <li>Firebase</li>
            <li>Figma</li>
            <li>JWT</li>
            <li>React Redux</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors of Computer Science - Constructor University</li>
        <li>A-levels - GEMS Institute of Higher Education</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>The Complete 2024 Web Development Bootcamp - Udemy</li>
        <li>React - The Complete Guide 2024 - Udemy</li>
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
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a passionate Web Developer, specialized in creating responsive,
            user-centric interfaces. My portofolio boasts numerous project where
            I&apos;ve demonstrated proficiency in crafting clean and intuitive
            designs. Now, I&apos;m eagerly seeking engaging opportunities in
            both part-time and full-time capacities to further expand my skills
            and contribute to impactful projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
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
