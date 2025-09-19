import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/himanshuach/Himanshu-Portfolio.git",
  ownerName: "Dhaneshwar Kumar",
  ownerEmail: "rajsanyam@gmail.com",
  phone: "+91 6204144364",
  linkedin: "https://linkedin.com/in/himanshuach",
  github: "https://github.com/himanshuach",
  leetcode: "https://leetcode.com/himanshuach",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName}'s Portfolio`,
  description: "Frontend Developer skilled in React, Next.js, TypeScript, and modern UI/UX. Passionate about building fast, accessible, and responsive web experiences.",
  keywords: [
    "fullstack",
    "reactjs",
    "nodejs",
    "nextjs",
    "react",
    "javascript",
    "typescript",
    "mongodb",
    "express",
    "tailwindcss",
    "portfolio",
    "web development",
    "frontend",
    "threejs",
    "framer-motion",
    "backend",
    "mern stack"
  ],
  authors: {
    name: links.ownerName,
    url: links.github,
  },
} as const;
