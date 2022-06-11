import { getStaticProps } from "@/pages/Projects";
import { InferGetStaticPropsType } from "next";
import { Key } from "react";
import ProjectBlurb from "./ProjectBlurb";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .2,
    }
  }
}

const item = {
  hidden: { 
    opacity: 0,
    x: '-100vw',
  },
  show: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    }
  }
}

export default function CurrentProjects({ currentProjects }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
      <motion.ul>
        <h2>Current</h2>
        <motion.div       
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 p-4 space-y-4 max-w-xl"
        >
            {currentProjects.map((project: Key) => (
                <motion.div key={project} variants={item}>
                  <Item project={project}/>
                </motion.div>
            ))}
        </motion.div>
      </motion.ul>
    )
}

export function Item({ project }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <motion.li 
        layout
        whileHover={{ scale: 1.03 }} 
        transition={{ ease: 'easeInOut', duration: 0.1 }}
        whileTap={{ scale: 0.995}} 
        className="bg-accent"  
        onClick={toggleOpen} 
        initial={{ borderRadius: 10 }}
      >
          <ProjectBlurb
              key={project.id}
              githubLink={project.githubLink}
              webLink={project.webLink}
              title={project.title}
              date={project.date}
              description={project.description}
              stack={project.stack}
          />
          {isOpen && <ProjectDetails details={project.details} imgs={[]}/>}
      </motion.li>
    );
}
