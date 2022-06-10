import { getStaticProps } from "@/pages/Projects";
import { InferGetStaticPropsType } from "next";
import { Key } from "react";
import ProjectBlurb from "./ProjectBlurb";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { INSPECT_MAX_BYTES } from "buffer";

export default function CurrentProjects({ currentProjects }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <AnimateSharedLayout>
            <motion.ul className="flex-1 bg-white p-4 space-y-4" layout initial={{ borderRadius: 25}}>
                <h2>Current</h2>
                {currentProjects.map((item: Key) => (
                  <>
                    <Item key={item} id={item.id} link={item.link} title={item.title} date={item.date} description={item.description} stack={item.stack} />
                  </>
                ))}
            </motion.ul>
        </AnimateSharedLayout>
    )
}

export function Item({ id, link, title, date, description, stack }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <motion.li className="bg-slate-200" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
                    <ProjectBlurb
                        key={id}
                        link={link}
                        title={title}
                        date={date}
                        description={description}
                        stack={stack}
                    />
        <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </motion.li>
    );
}

export function Content() {
    return (
      <motion.div
        // layout
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
      >
        <p>content1</p>
        <p>content2</p>
        <p>content3</p>
      </motion.div>
    );
  }

// export default function CurrentProjects({ currentProjects }: InferGetStaticPropsType<typeof getStaticProps>) {
//     return (
//         <>
//             {currentProjects.map((project: { id: Key; link: string; title: string; date: string; description: string; stack: string[] }) => {
//                 return (
//                     <ProjectBlurb
//                         key={project.id}
//                         link={project.link}
//                         title={project.title}
//                         date={project.date}
//                         description={project.description}
//                         stack={project.stack}
//                     />
//                 )
//             })}
//         </>
//     )
// }
