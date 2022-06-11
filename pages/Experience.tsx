import CurrentExperience from '@/components/Experience/CurrentExperience';
import PastExperience from '@/components/Experience/PastExperience';

import { Page } from '@/components/Page/Page';
import { InferGetStaticPropsType } from 'next';


export default function Experience({ currentExperiences, pastExperiences }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <span className='flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain'>
            <Page title='Experience'>
                <h1>Experience</h1>
                <CurrentExperience currentExperiences={currentExperiences} pastExperiences={undefined} />
                <PastExperience pastExperiences={pastExperiences} currentExperiences={undefined} />
            </Page>
        </span>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/experience/current')
    const data = await res.json()
    
    const res1 = await fetch('http://localhost:3000/api/experience/past')
    const data1 = await res1.json()

    return {
        props: {
            currentExperiences: data,
            pastExperiences: data1,
        }
    }
}
