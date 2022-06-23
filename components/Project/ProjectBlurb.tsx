import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { CgWebsite } from 'react-icons/cg'
import { LottieWrapperClick } from '../LottieWrapperClick'
import like from '../../lotties/like.json'
import { useState } from 'react'
import router from 'next/router'
import { useSession } from 'next-auth/react'

// inspired from the one and only https://www.jspescas.io/projects
interface BlurbProps {
  title: string
  date: string
  description: string
  stack: string[]
  githubLink?: string
  external?: boolean
  webLink?: string
  likes: number
  likedUsers: string[]
}
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
interface BodyProps {
  title: string
  date: string
  description: string
  stack: string[]
  githubLink?: string
  webLink?: string
  likes: number
  likedUsers: string[]
}

function ProjectBody({
  title,
  date,
  description,
  stack,
  githubLink,
  webLink,
  likes,
  likedUsers,
}: BodyProps) {
  const { data: session, status } = useSession()
  const refreshData = () => {
    //used to update likes taking advantage of SSR
    router.replace(router.asPath)
  }

  const updateLikes = async () => {
    const res = await fetch(
      'https://minsoo.vercel.app/api/projects/updateLikes',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0',
          Accept: 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ title }),
      }
    )
    await res.json()
    if (res.status === 200) {
      console.log('Updated Likes!')
    } else {
      console.log('Uh oh. Something went wrong.')
    }
  }

  const [isPaused, setisPaused] = useState(true)

  const handleClick = async (event) => {
    event.stopPropagation()
    if (status == 'unauthenticated') {
      alert('You must be signed in to like the projects!')
      return
    }

    const res = await fetch(
      'https://minsoo.vercel.app/api/projects/checkLiked',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0',
          Accept: 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ title }),
      }
    )
    const result = await res.json()
    if (res.status === 200) {
      console.log('Got LikedUsers!')
    } else {
      console.log('Uh oh. Something went wrong.')
    }
    if (result.found) {
      alert(
        'you already liked this project! You can only like a project once!!'
      )
      setisPaused(true)
    } else if (!result.found) {
      await updateLikes()
      setisPaused(false)
      setTimeout(() => {
        setisPaused(true)
      }, 1100)
      refreshData()
    }
  }

  return (
    <motion.div className="drop-shadow-xl flex-col p-5 rounded-lg bg-card hover:bg-border resize-none">
      <div className="flex flex-col mb-3 font-semibold">
        <div className="flex items-center">
          <h3 className="text-text-normalText items-center">{title}</h3>
          <motion.button
            whileHover={{ scale: 1.2 }}
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            whileTap={{ scale: 0.995 }}
            onClick={handleClick}
          >
            <LottieWrapperClick
              animationData={like}
              height={60}
              width={60}
              isPaused={isPaused}
            />
          </motion.button>
          <span className=" pr-10">{likes}</span>
        </div>
        <div className="text-sm text-secondaryNormalText">{date}</div>
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
        <div className="flex flex-wrap mt-5 gap-1.5 items-center">
          {webLink && (
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ ease: 'easeInOut', duration: 0.1 }}
              whileTap={{ scale: 0.995 }}
              href={webLink}
              className="z-2"
              onClick={(event) => event.stopPropagation()}
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
              onClick={(event) => event.stopPropagation()}
            >
              <FiGithub />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
export default function ProjectBlurb({
  githubLink,
  webLink,
  title,
  date,
  description,
  stack,
  external,
  likes,
  likedUsers,
}: BlurbProps) {
  return (
    <>
      {githubLink ? (
        external ? (
          <ExternalLinkWrapper link={githubLink}>
            <ProjectBody
              title={title}
              date={date}
              description={description}
              stack={stack}
              githubLink={githubLink}
              webLink={webLink}
              likes={likes}
              likedUsers={likedUsers}
            />
          </ExternalLinkWrapper>
        ) : (
          <InternalLinkWrapper link={githubLink}>
            <ProjectBody
              title={title}
              date={date}
              description={description}
              stack={stack}
              githubLink={githubLink}
              webLink={webLink}
              likes={likes}
              likedUsers={likedUsers}
            />
          </InternalLinkWrapper>
        )
      ) : (
        <span className="flex cursor-default">
          <ProjectBody
            title={title}
            date={date}
            description={description}
            stack={stack}
            githubLink={githubLink}
            webLink={webLink}
            likes={likes}
            likedUsers={likedUsers}
          />
        </span>
      )}
    </>
  )
}
