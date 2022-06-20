import { motion } from 'framer-motion'

interface ExperienceDetailProps {
  details: string
  imgs: string[]
}
export default function ExperienceDetails({
  details,
  imgs,
}: ExperienceDetailProps) {
  return (
    <div className="p-4">
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
