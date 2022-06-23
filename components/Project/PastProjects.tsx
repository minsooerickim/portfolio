import { getStaticProps } from '@/pages/Projects'
import { InferGetStaticPropsType } from 'next'
import { Key } from 'react'
import ProjectBlurb from './ProjectBlurb'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectDetails from './ProjectDetails'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
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
      duration: 0.8,
    },
  },
}

export default function PastProjects({
  pastProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <motion.ul>
      <h2 className="text-text flex justify-center">Past</h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 p-4 space-y-4 max-w-xl"
      >
        {pastProjects.map((project: Key) => (
          <motion.div key={project} variants={item}>
            <Item project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.ul>
  )
}

export function Item({ project }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <motion.li
      layout
      transition={{ ease: 'easeInOut', duration: 0.2 }}
      className="bg-subBackground"
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
        likes={project.likes}
        likedUsers={project.likedUsers}
      />
      {isOpen && (
        <ProjectDetails imgs={project.imgs} details={project.details} />
      )}
    </motion.li>
  )
}
