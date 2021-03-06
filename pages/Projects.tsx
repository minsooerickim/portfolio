import { LottieWrapper } from '@/components/LottieWrapper'
import { Page } from '@/components/Page/Page'
import CurrentProjects from '@/components/Project/CurrentProjects'
import PastProjects from '@/components/Project/PastProjects'
import clientPromise from '@/lib/mongodb'
import { motion } from 'framer-motion'
import { InferGetStaticPropsType } from 'next'
import project from '../lotties/project.json'

export default function Projects({
  currentProjects,
  pastProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <div className="flex justify-center xl:p-20 text-normalText">
        <h1>Projects</h1>
      </div>
      <Page title="Projects" description="list of my current/past projects">
        <motion.div layout className="xl:grid xl:grid-cols-3 gap-20">
          <CurrentProjects
            currentProjects={currentProjects}
            pastProjects={undefined}
          />
          <div>
            <div className="hidden xl:flex min-w-4 m-auto">
              <LottieWrapper
                animationData={project}
                height={'100%'}
                width={'100%'}
              />
            </div>
          </div>
          <PastProjects
            pastProjects={pastProjects}
            currentProjects={undefined}
          />
        </motion.div>
      </Page>
    </div>
  )
}

// You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).
// https://nextjs.org/learn/basics/api-routes/api-routes-details
export async function getStaticProps() {
  async function getProjects() {
    try {
      const isConnected = await clientPromise
      const db = isConnected.db(process.env.MONGODB_DB)

      let projects = await db.collection('currentProjects').find({}).toArray()
      projects = JSON.parse(JSON.stringify(projects))
      return projects
    } catch {
      console.log('Unable to fetch currentProjects at the moment :(')
    }
  }
  async function getPastProjects() {
    try {
      const isConnected = await clientPromise
      const db = isConnected.db(process.env.MONGODB_DB)

      let projects = await db.collection('pastProjects').find({}).toArray()
      projects = JSON.parse(JSON.stringify(projects))
      return projects
    } catch {
      console.log('Unable to fetch pastProjects at the moment :(')
    }
  }

  const data = await getProjects()
  const data1 = await getPastProjects()

  return {
    props: {
      currentProjects: data,
      pastProjects: data1,
    },
  }
}
