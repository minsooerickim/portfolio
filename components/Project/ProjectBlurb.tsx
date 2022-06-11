import { motion } from 'framer-motion'

// this project listing approach is taken from https://github.com/claynaut/jspescas.io/blob/master/components/Project/components.tsx
interface BlurbProps {
    title: string
    date: string
    description: string
    stack: string[]
    link?: string
    external?: boolean
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
  }
  
const ProjectBody = ({ title, date, description, stack }: BodyProps) => (
    <motion.div 
      className='group flex flex-col w-full p-5 rounded-xl bg-primary hover:bg-border'
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
      <div className='flex flex-wrap mt-5 gap-1.5 font-semibold text-sm'>
        { stack.map((tech) => 
          <div className='px-2.5 py-1 rounded-md bg-accent text-accent-darkest bg-orange-400'>
            {tech}
          </div>
        )}
      </div>
    </motion.div>
  )
export default function ProjectBlurb({ link, title, date, description, stack, external }: BlurbProps) {
    return (
        <>
        {
            link ?
            ( external
                ?
                <ExternalLinkWrapper link={link}>
                    <ProjectBody
                    title={title}
                    date={date}
                    description={description}
                    stack={stack}
                    />
                </ExternalLinkWrapper>
                :
                <InternalLinkWrapper link={link}>
                    <ProjectBody
                    title={title}
                    date={date}
                    description={description}
                    stack={stack}
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
                />
            </span>
        }
        </>
    )
}