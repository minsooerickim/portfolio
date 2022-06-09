import clientPromise from '@/lib/mongodb';

export default async function getProjects(req, res) {
    try {
        const client = await clientPromise;

        const db = client.db("test");
    
        let projects = await db.collection("projects").find({}).toArray();
        projects = JSON.parse(JSON.stringify(projects));

        res.json(projects)
    } catch(err) {
        res.json(err);
        res.status(405).end();
    }
}

