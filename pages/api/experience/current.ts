import clientPromise from '@/lib/mongodb';

export default async function getProjects(req, res) {
    try {
        const isConnected = await clientPromise;
        const db = isConnected.db(process.env.MONGODB_DB);
        
        let experiences = await db
            .collection("currentExperience")
            .find({})
            .toArray();
        experiences = JSON.parse(JSON.stringify(experiences));
        return res.status(200).json(experiences)
    } catch {
        res.json(500);
        res.json({
            error: 'Unable to fetch currentExperience at the moment :('
        })
    }
}
