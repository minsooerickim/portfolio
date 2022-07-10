import { getStaticProps } from '@/pages/Experience'
import { InferGetStaticPropsType } from 'next'
import { Key } from 'react'
import ExperienceBlurb from '@/components/Experience/ExperienceBlurb'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ExperienceDetails from '@/components/Experience/ExperienceDetails'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      duration: 0.5,
    },
  },
}

export default function PastExperience({
  pastExperiences,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <motion.ul>
      <h2 className="text-text flex justify-center">Past</h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 p-4 space-y-4 max-w-2xl"
      >
        {pastExperiences.map((experience: Key) => (
          <motion.div key={experience} variants={item}>
            <Item experience={experience} />
          </motion.div>
        ))}
      </motion.div>
    </motion.ul>
  )
}

export function Item({ experience }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <motion.li
      layout
      whileHover={{ scale: 1.03 }}
      transition={{ ease: 'easeInOut', duration: 0.1 }}
      whileTap={{ scale: 0.995 }}
      className="bg-subBackground"
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
    >
      <ExperienceBlurb
        key={experience.id}
        company={experience.company}
        position={experience.position}
        date={experience.date}
        description={experience.description}
        stack={experience.stack}
        location={experience.location}
        githubLink={experience.githubLink}
        webLink={experience.webLink}
      />
      {isOpen && (
        <ExperienceDetails
          details={experience.details}
          imgs={experience.imgs}
        />
      )}
    </motion.li>
  )
}
