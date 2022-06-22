import Landing from '@/pages/sections/landing'
import Welcome from '@/components/Welcome'

export default function Home() {
  return (
    <div>
      <div className="justify-center flex align-center p-4 md:p-20">
        <Welcome />
      </div>
      <div className="flex flex-col w-full items-center">
        <Landing />
      </div>
    </div>
  )
}
