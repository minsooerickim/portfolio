import { getStaticProps } from "@/pages/Experience";
import { InferGetStaticPropsType } from "next";
import { Key } from "react";

function PastExperience({ pastExperiences }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <h2>Past</h2>
            {pastExperiences.map((experience: { id: Key; company: string }) => {
                return (
                    <div key={experience.id}>
                        <p>{experience.company}</p>
                    </div>
                )
            })}
        </>
    )
}

export default PastExperience