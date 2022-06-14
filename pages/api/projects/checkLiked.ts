import clientPromise from '@/lib/mongodb'
import { getSession } from 'next-auth/react';

export default async function updateLikes(req, res) {
    const session = await getSession({ req })
    // console.log(session)
    const reqData: {title: any} = req.body
    const userData: {id: any} = session.user
    // console.log(userData)
    const isConnected = await clientPromise;
    const db = isConnected.db(process.env.MONGODB_DB);

    const result = await db.collection("currentProjects").find(
    { 
        $and: [ {likedUsers: userData.id}, {title: reqData.title}]
    }).toArray();
    result.length > 0 ? res.status(200).json({ found: true}) : res.status(200).json({ found: false})
}