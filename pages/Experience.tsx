import CurrentExperience from '@/components/Experience/CurrentExperience'
import PastExperience from '@/components/Experience/PastExperience'
import { LottieWrapper } from '@/components/LottieWrapper'
import experience from '../lotties/experience.json'

import { Page } from '@/components/Page/Page'
import { InferGetStaticPropsType } from 'next'
import { motion } from 'framer-motion'
import clientPromise from '@/lib/mongodb'

export default function Experience({
  currentExperiences,
  pastExperiences,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <div className="flex justify-center xl:p-20 text-normalText">
        <h1>Experience</h1>
      </div>
      <Page
        title="Experience"
        description="list of my current/past experiences"
      >
        <motion.div layout className="xl:grid xl:grid-cols-3 gap-20">
          <CurrentExperience
            currentExperiences={currentExperiences}
            pastExperiences={undefined}
          />
          <div>
            <div className="hidden xl:flex min-w-4 m-auto">
              <LottieWrapper
                animationData={experience}
                height={'100%'}
                width={'100%'}
              />
            </div>
          </div>
          <PastExperience
            pastExperiences={pastExperiences}
            currentExperiences={undefined}
          />
        </motion.div>
      </Page>
    </div>
  )
}

export async function getStaticProps() {
  async function getExperience() {
    try {
      const isConnected = await clientPromise
      const db = isConnected.db(process.env.MONGODB_DB)

      let experiences = await db
        .collection('currentExperience')
        .find({})
        .toArray()
      return experiences
    } catch {
      console.log('Unable to fetch currentExperience at the moment :(')
    }
  }
  async function getPastExperience() {
    try {
      const isConnected = await clientPromise
      const db = isConnected.db(process.env.MONGODB_DB)

      let experiences = await db.collection('pastExperience').find({}).toArray()
      return experiences
    } catch {
      console.log('Unable to fetch pastExperience at the moment :(')
    }
  }
  let experiences = await getExperience()
  const data = JSON.parse(JSON.stringify(experiences))

  let experiences1 = await getPastExperience()
  const data1 = JSON.parse(JSON.stringify(experiences1))

  return {
    props: {
      currentExperiences: data || null,
      pastExperiences: data1 || null,
    },
  }
}
