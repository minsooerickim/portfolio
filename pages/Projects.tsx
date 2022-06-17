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
  const res = await fetch('${process.env.NEXTAUTH_URL}/api/projects/current')
  const data = await res.json()
  const res1 = await fetch('${process.env.NEXTAUTH_URL}/api/projects/past')
  const data1 = await res1.json()

  return {
    props: {
      currentProjects: data,
      pastProjects: data1,
    }
  }
}

