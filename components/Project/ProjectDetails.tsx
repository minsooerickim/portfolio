import { motion } from "framer-motion";

interface ProjectDetailProps {
  details: string
  imgs: string[]
}
export default function ProjectDetails({ details, imgs }: ProjectDetailProps) {
  console.log(imgs)
  return (
    <div className="p-4">
      <motion.p className="p-4">{details}</motion.p>
      {imgs && <div className="flex-1 p-4 space-y-4 max-w-xl">
        { imgs.map((img) => 
          <img src={img} className="rounded-lg"/>
        )}
      </div>}
    </div>
  );
}