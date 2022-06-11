import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import { CgWebsite } from 'react-icons/cg'
// this project listing approach is taken from https://github.com/claynaut/jspescas.io/blob/master/components/Project/components.tsx
interface BlurbProps {
    title: string
    date: string
    description: string
    stack: string[]
    githubLink?: string
    external?: boolean
    webLink?: string
}
interface LinkProps {
    children: React.ReactNode | React.ReactNode[]
    link: string
}
const ExternalLinkWrapper = ({ children, link }: LinkProps) => (
    <a target='_blank' rel='noreferrer noopener' href={link} className='flex cursor-pointer'>
      {children}
    </a>
)
const InternalLinkWrapper = ({ children, link }: LinkProps) => (
    // <Link passHref href={link}>
      <span className='cursor-pointer'>
        {children}
      </span>
    /* </Link> */
)
interface BodyProps {
    title: string
    date: string
    description: string
    stack: string[]
    githubLink?: string
    webLink?: string
  }
  
const ProjectBody = ({ title, date, description, stack, githubLink, webLink }: BodyProps) => (
    <motion.div 
      className='group flex flex-col w-full p-5 rounded-lg bg-primary hover:bg-border'
    >
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 font-semibold'>
        <h3 className='text-text-secondary group-hover:text-accent'>
          {title}
        </h3>
        <div className='text-sm'>
          {date}
        </div>
      </div>
      <p className='text-base'>
        {description}
      </p>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 font-semibold'>
        <div className='flex flex-wrap mt-5 gap-1.5 font-semibold text-sm'>
          { stack.map((tech) => 
            <div key={tech} className='px-2.5 py-1 rounded-md bg-accent'>
              {tech}
            </div>
          )}
        </div>
        <div className='flex flex-wrap mt-5 gap-1.5'>
          {webLink && <motion.a 
            whileHover={{ scale: 1.2 }} 
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            whileTap={{ scale: 0.995}} 
            href={webLink} className='z-2'>
            <CgWebsite />
          </motion.a>}
          {githubLink && <motion.a 
            whileHover={{ scale: 1.2 }} 
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            whileTap={{ scale: 0.995}} 
            href={githubLink} className='z-2'>
            <FiGithub />
          </motion.a>}
        </div>
      </div>
    </motion.div>
  )
export default function ProjectBlurb({ githubLink, webLink, title, date, description, stack, external }: BlurbProps) {
    return (
        <>
        {
            githubLink ?
            ( external
                ?
                <ExternalLinkWrapper link={githubLink}>
                    <ProjectBody
                      title={title}
                      date={date}
                      description={description}
                      stack={stack}
                      githubLink={githubLink}
                      webLink={webLink}
                    />
                </ExternalLinkWrapper>
                :
                <InternalLinkWrapper link={githubLink}>
                    <ProjectBody
                      title={title}
                      date={date}
                      description={description}
                      stack={stack}
                      githubLink={githubLink}
                      webLink={webLink}
                    />
                </InternalLinkWrapper>
                )
            :
            <span className='flex cursor-default'>
                <ProjectBody
                  title={title}
                  date={date}
                  description={description}
                  stack={stack}
                  githubLink={githubLink}
                  webLink={webLink}
                />       
            </span>
        }
        </>
    )
}