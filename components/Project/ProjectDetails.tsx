import { motion } from 'framer-motion'

interface ProjectDetailProps {
  details: string
  imgs: string[]
}
export default function ProjectDetails({ details, imgs }: ProjectDetailProps) {
  return (
    <div className="p-4  box-border">
      <motion.p className="p-4">{details}</motion.p>
      {imgs && (
        <div className="flex-1 p-4 space-y-4 max-w-xl">
          {imgs.map((img) => (
            <img key={img} src={img} className="rounded-lg" />
          ))}
        </div>
      )}
    </div>
  )
}
