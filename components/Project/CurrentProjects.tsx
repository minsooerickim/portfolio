import { getStaticProps } from "@/pages/Projects";
import { InferGetStaticPropsType } from "next";
import { Key } from "react";
import ProjectBlurb from "./ProjectBlurb";

function CurrentProjects({ currentProjects }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            {currentProjects.map((project: { id: Key; link: string; title: string; date: string; description: string; stack: string[] }) => {
                return (
                    <ProjectBlurb
                        key={project.id}
                        link={project.link}
                        title={project.title}
                        date={project.date}
                        description={project.description}
                        stack={project.stack}
                    />
                )
            })}
        </>
    )
}

export default CurrentProjects