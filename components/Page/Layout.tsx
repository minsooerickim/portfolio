import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

interface Props {
  children: React.ReactNode | React.ReactNode[]
  title: string
  description: string
}

/** Container for a page. */
export function Layout({ children, title, description }: Props) {
  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <motion.main
        className="flex flex-col justify-center items-center w-full"
        initial="hidden"
        animate="enter"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        {children}
      </motion.main>
    </div>
  )
}
