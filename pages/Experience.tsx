import CurrentExperience from '@/components/Experience/CurrentExperience';
import PastExperience from '@/components/Experience/PastExperience';
import { LottieWrapper } from '@/components/LottieWrapper';
import experience from '../lotties/experience.json'

import { Page } from '@/components/Page/Page';
import { InferGetStaticPropsType } from 'next';
import { motion } from 'framer-motion';


export default function Experience({ currentExperiences, pastExperiences }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        // <span className='flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain'>
        <div>
            <div className='flex justify-center md:p-20 text-normalText'>
                <h1>Experience</h1>
            </div>
            <Page title='Experience' description='list of my current/past experiences'>
                <motion.div layout className='md:grid md:grid-cols-3 gap-20'>
                    <CurrentExperience currentExperiences={currentExperiences} pastExperiences={undefined} />
                    <div><div className='hidden resize-none md:flex'><LottieWrapper animationData={experience} height={500} width={500}/></div></div>
                    <PastExperience pastExperiences={pastExperiences} currentExperiences={undefined} />
                </motion.div>
            </Page>
        </div>
        // </span>
    )
}

export async function getStaticProps() {
    const res = await fetch('${process.env.NEXTAUTH_URL}/api/experience/current')
    const data = await res.json()
    
    const res1 = await fetch('${process.env.NEXTAUTH_URL}/api/experience/past')
    const data1 = await res1.json()

    return {
        props: {
            currentExperiences: data,
            pastExperiences: data1,
        }
    }
}
