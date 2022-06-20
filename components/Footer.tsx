import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="p-0 max-w-screen flex justify-center items-center bg-background">
      <div>
        <div className="flex justify-center">
          <Link href="/">
            <a>Minsoo Kim</a>
          </Link>
          <div className="text-text">
            <h4>Discover</h4>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/Projects">
              <a>Projects</a>
            </Link>
            <Link href="/Experience">
              <a>Experience</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
