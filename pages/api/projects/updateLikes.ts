import clientPromise from '@/lib/mongodb'
import { getSession } from 'next-auth/react'

export default async function updateLikes(req, res) {
  const session = await getSession({ req })
  // console.log(session)
  const reqData: { title: any } = req.body
  const userData: { id: any } = session.user
  // console.log(userData)
  const isConnected = await clientPromise
  const db = isConnected.db(process.env.MONGODB_DB)

  await db.collection('currentProjects').updateOne(
    { title: reqData.title },
    {
      $inc: { likes: 1 },
      $push: { likedUsers: userData.id },
    }
  )
  res.status(200).json({ message: 'Successfully updated like count!' })
}
