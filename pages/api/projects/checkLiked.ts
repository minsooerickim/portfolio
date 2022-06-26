import clientPromise from '@/lib/mongodb'

export default async function updateLikes(req, res) {
  const reqData = JSON.parse(req.body)

  const isConnected = await clientPromise
  const db = isConnected.db(process.env.MONGODB_DB)

  const result = await db
    .collection('currentProjects')
    .find({
      $and: [{ likedUsers: reqData.id }, { title: reqData.title }],
    })
    .toArray()
  result.length > 0
    ? res.status(200).json({ found: true })
    : res.status(200).json({ found: false })
}
