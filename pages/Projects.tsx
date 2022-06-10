import { Page } from '@/components/Page/Page';
import CurrentProjects from '@/components/Project/CurrentProjects';
import PastProjects from '@/components/Project/PastProjects';
import { GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import getProjects from './api/projects/current';

export default function Projects({ currentProjects, pastProjects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page title='Projects'>
      <div className="flex flex-col space-y-4">
        <CurrentProjects currentProjects={currentProjects} pastProjects={undefined} />
          <h2>Past</h2>
          <PastProjects pastProjects={pastProjects} currentProjects={undefined} />
      </div>
    </Page>
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

