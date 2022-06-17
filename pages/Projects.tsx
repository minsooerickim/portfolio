import { LottieWrapper } from '@/components/LottieWrapper';
import { Page } from '@/components/Page/Page';
import CurrentProjects from '@/components/Project/CurrentProjects';
import PastProjects from '@/components/Project/PastProjects';
import { motion } from 'framer-motion';
import { InferGetStaticPropsType } from 'next'
import project from '../lotties/project.json'

export default function Projects({ currentProjects, pastProjects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    // <span className='flex justify-center px-40 w-full bg-pattern bg-repeat bg-contain'>
    <div>
      <div className='flex justify-center md:p-20 text-normalText'>
          <h1>Projects</h1>
      </div>
      <Page title='Projects' description='list of my current/past projects'>
        <motion.div className="md:grid md:grid-cols-3 gap-20">
          <CurrentProjects currentProjects={currentProjects} pastProjects={undefined} />
          <div><div className='hidden resize-none md:flex'><LottieWrapper animationData={project} height={500} width={500}/></div></div>
          <PastProjects pastProjects={pastProjects} currentProjects={undefined} />
        </motion.div>
      </Page>
    </div>
    // </span>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://portfolio-ouj1fs8j7-minsooerickim.vercel.app/api/projects/current', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0',
      Accept: "application/json; charset=UTF-8",
    },
  })
  const data = await res.json()
  const res1 = await fetch('https://portfolio-ouj1fs8j7-minsooerickim.vercel.app/api/projects/past', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0',
      Accept: "application/json; charset=UTF-8",
    },
  })
  const data1 = await res1.json()

  return {
    props: {
      currentProjects: data,
      pastProjects: data1,
    }
  }
}

