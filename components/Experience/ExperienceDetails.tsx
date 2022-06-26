interface ExperienceDetailProps {
  details: string[]
  imgs: string[]
}
export default function ExperienceDetails({
  details,
  imgs,
}: ExperienceDetailProps) {
  return (
    <div className="p-4">
      {details && (
        <div className="p-4">
          {details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </div>
      )}
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
