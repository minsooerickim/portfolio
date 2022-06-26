import clientPromise from '@/lib/mongodb'

export default async function updateLikes(req, res) {
  const reqData = JSON.parse(req.body)

  const isConnected = await clientPromise
  const db = isConnected.db(process.env.MONGODB_DB)

  try {
    await db.collection('pastProjects').updateOne(
      { title: reqData.title },
      {
        $inc: { likes: 1 },
        $push: { likedUsers: reqData.id },
      }
    )
  } catch {
    res
      .status(500)
      .json({ message: 'Something went wrong updating like count!' })
  }
  res.status(200).json({ message: 'Successfully updated like count!' })
}
