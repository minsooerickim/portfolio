import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { CgWebsite } from 'react-icons/cg'

// inspired from the one and only https://www.jspescas.io/projects
interface LinkProps {
  children: React.ReactNode | React.ReactNode[]
  link: string
}
const ExternalLinkWrapper = ({ children, link }: LinkProps) => (
  <a
    target="_blank"
    rel="noreferrer noopener"
    href={link}
    className="flex cursor-pointer"
  >
    {children}
  </a>
)
const InternalLinkWrapper = ({ children, link }: LinkProps) => (
  <span className="cursor-pointer">{children}</span>
)

interface BlurbProps {
  company: string
  position: string
  date: string
  description: string
  stack: string[]
  location: string
  githubLink?: string
  webLink?: string
}
interface BodyProps {
  company: string
  position: string
  date: string
  description: string
  stack: string[]
  location: string
  githubLink?: string
  webLink?: string
}

const ExperienceBody = ({
  company,
  position,
  date,
  description,
  stack,
  location,
  githubLink,
  webLink,
}: BodyProps) => (
  <motion.div className="drop-shadow-xl group flex flex-col w-full p-5 rounded-lg bg-card hover:bg-border cursor-pointer">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 font-semibold">
      <h3 className="text-text-normalText">
        {company}
        <div className="text-sm text-secondaryNormalText">{position}</div>
      </h3>
      <div className="text-sm text-secondaryNormalText">
        <div>{date}</div>
        <div className="float-right">{location}</div>
      </div>
    </div>
    <p className="text-base text-secondaryNormalText">{description}</p>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 font-semibold">
      <div className="flex flex-wrap mt-5 gap-1.5 font-semibold text-sm">
        {stack.map((tech) => (
          <div
            key={tech}
            className="px-2.5 py-1 rounded-md bg-text text-sub-secondary"
          >
            {tech}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap mt-5 gap-1.5">
        {webLink && (
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            whileTap={{ scale: 0.995 }}
            href={webLink}
            className="z-2"
          >
            <CgWebsite />
          </motion.a>
        )}
        {githubLink && (
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            whileTap={{ scale: 0.995 }}
            href={githubLink}
            className="z-2"
          >
            <FiGithub />
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
)
export default function ProjectBlurb({
  company,
  position,
  date,
  description,
  stack,
  location,
  githubLink,
  webLink,
}: BlurbProps) {
  return (
    <>
      {githubLink ? (
        external ? (
          <ExternalLinkWrapper link={githubLink}>
            <ExperienceBody
              company={company}
              position={position}
              date={date}
              description={description}
              location={location}
              stack={stack}
              githubLink={githubLink}
              webLink={webLink}
            />
          </ExternalLinkWrapper>
        ) : (
          <InternalLinkWrapper link={githubLink}>
            <ExperienceBody
              company={company}
              position={position}
              date={date}
              description={description}
              location={location}
              stack={stack}
              githubLink={githubLink}
              webLink={webLink}
            />
          </InternalLinkWrapper>
        )
      ) : (
        <span className="flex cursor-default">
          <ExperienceBody
            company={company}
            position={position}
            date={date}
            description={description}
            location={location}
            stack={stack}
            githubLink={githubLink}
            webLink={webLink}
          />
        </span>
      )}
    </>
  )
}
