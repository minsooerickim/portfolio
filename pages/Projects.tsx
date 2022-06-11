import { Page } from '@/components/Page/Page';
import CurrentProjects from '@/components/Project/CurrentProjects';
import PastProjects from '@/components/Project/PastProjects';
import { motion } from 'framer-motion';
import { InferGetStaticPropsType } from 'next'

export default function Projects({ currentProjects, pastProjects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <span className='flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain'>
      <Page title='Projects'>
        <motion.div layout className="grid grid-cols-2 gap-20">
          <CurrentProjects currentProjects={currentProjects} pastProjects={undefined} />
          <PastProjects pastProjects={pastProjects} currentProjects={undefined} />
        </motion.div>
      </Page>
    </span>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/projects/current')
  const data = await res.json()

  const res1 = await fetch('http://localhost:3000/api/projects/past')
  const data1 = await res1.json()

  return {
    props: {
      currentProjects: data,
      pastProjects: data1,
    }
  }
}

