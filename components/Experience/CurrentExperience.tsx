import { getStaticProps } from "@/pages/Experience";
import { InferGetStaticPropsType } from "next";
import { Key } from "react";

function CurrentExperience({ currentExperiences }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <h2>Current</h2>
            {currentExperiences.map((experience: { id: Key; company: string }) => {
                return (
                    <div key={experience.id}>
                        <p>{experience.company}</p>
                    </div>
                )
            })}
        </>
    )
}

export default CurrentExperience