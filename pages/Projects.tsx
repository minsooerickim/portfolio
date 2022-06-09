import { Page } from '@/components/Page/Page';
import { GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

function Projects({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page title='Projects'>
        <h1>Projects</h1>
        <h2>Completed Projects</h2>
        {projects.filter((p: { completed: Boolean; }) => p.completed).map((project: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
          return (
            <div key={project.id}>
              <p>{project.title}</p>
            </div>
          )
        })}
        <h2>Upcoming Projects</h2>
        {projects.filter((p: { upcoming: Boolean; }) => p.upcoming).map((project: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
          return (
            <div key={project.id}>
              <p>{project.title}</p>
            </div>
          )
        })}
    </Page>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/projects')
  const data = await res.json()
  // console.log(data)
  return {
    props: {
      projects: data,
    }
  }
}

export default Projects
