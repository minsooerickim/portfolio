import clientPromise from '@/lib/mongodb';

export default async function getProjects(req, res) {
    try {
        const isConnected = await clientPromise;
        const db = isConnected.db(process.env.MONGODB_DB);
        
        let projects = await db
            .collection("pastExperience")
            .find({})
            .toArray();
        projects = JSON.parse(JSON.stringify(projects));
        return res.status(200).json(projects)
        // db.collection("Projects").rename("projects")
    } catch {
        res.json(500);
        res.json({
            error: 'Unable to fetch pastExperience at the moment :('
        })
    }
}
