import CurrentExperience from '@/components/Experience/CurrentExperience';
import PastExperience from '@/components/Experience/PastExperience';
import { LottieWrapper } from '@/components/LottieWrapper';
import experience from '../lotties/experience.json'

import { Page } from '@/components/Page/Page';
import { InferGetStaticPropsType } from 'next';
import { motion } from 'framer-motion';
import clientPromise from '@/lib/mongodb';


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
    async function getExperience() {
        try {
            const isConnected = await clientPromise;
            const db = isConnected.db(process.env.MONGODB_DB);
            
            let experiences = await db
                .collection("currentExperience")
                .find({})
                .toArray();
            experiences = JSON.parse(JSON.stringify(experiences));
            return experiences || null
        } catch {
            console.log('Unable to fetch currentExperience at the moment :(')
        }
    }
    async function getPastExperience() {
        try {
            const isConnected = await clientPromise;
            const db = isConnected.db(process.env.MONGODB_DB);
            
            let experiences = await db
                .collection("pastExperience")
                .find({})
                .toArray();
            experiences = JSON.parse(JSON.stringify(experiences));
            return experiences || null
        } catch {
            console.log('Unable to fetch pastExperience at the moment :(')
        }
    }
    // const res = await getExperience()
    // const data = await res.json()
    const data = await getExperience()
    // const res1 = await getPastExperience()
    // const data1 = await res1.json()
    const data1 = await getPastExperience()

    return {
        props: {
            currentExperiences: data || null,
            pastExperiences: data1 || null,
        }
    }
}
