import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dealioImg from "/public/dealio3.png";
import lbImg from "/public/lb.png";
import mdImg from "/public/md.png";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Blog",
    hash: "blog",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "TechEducators Full Stack MERN Bootcamp",
    location: "Liverpool, Eng",
    description:
      "I graduated after 12 weeks of studying. I am now ready and prepared to build my own projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Dealio",
    description:
      "Worked as part of a team to create a CRUD application, I worked on creating and seeding the database, implementing the GET, PUT, POST, and DELETE methods into the form.",
    tags: ["React", "Vite", "MongoDB", "Express", "NodeJS"],
    imageUrl: dealioImg,
  },
  {
    title: "lukesblog",
    description: "A personal portfolio and blog made with Next.js.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Framer",
      "PostgreSQL",
    ],
    imageUrl: lbImg,
  },
  {
    title: "Math Dragons",
    description:
      "A maths based game that manipulates the DOM to dynamically to display text, images, and options while tracking and updating scores, and incorporating quiz-like challenges.",
    tags: ["HTML", "JavaScript", "CSS"],
    imageUrl: mdImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
