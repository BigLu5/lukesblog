"use client";

import React from "react";
import SectionHeading from "./Section-Heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Biology</span>, I decided to pursue other
        avenues of interest such as trading and web development. I enrolled on
        the{" "}
        <span className="font-medium">
          TechEducators Full Stack MERN Bootcamp
        </span>
        . <span className="italic">My favorite part of web dev</span> is
        producing visually appealing and functional websites. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer or UX designer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy long walks
        outdoors, playing video games, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          marketing and social media management
        </span>
        .
      </p>
    </motion.section>
  );
}
