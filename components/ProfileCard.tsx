import { useSession } from "next-auth/react"

export default function Landing() {
    const { data: session, status } = useSession()
    const loading = status === "loading"
  
    return(
        <div className="flex justify-center items-center">
            <div className="w-6/12 rounded-3xl overflow-hidden shadow-xl bg-card ">
                <img src="/assets/Colored-Shapes.svg" className=""/>
                <div className="flex justify-center -mt-8">
                    <img src="https://i.imgur.com/y72AJR2.png" className="w-6/12 rounded-full border-solid  border-2 -mt-3"/>
                </div>
                <div className="text-center px-3 pb-6 pt-2">
                    <p className="mt-2 text-md font-bold text-normalText">CS @ UC Riverside</p>
                    <p className="mt-2 font-light text-secondaryNormalText">Feel free to reach out to me at minsooerickim@gmail.com</p>
                </div>
                <div className="flex justify-center pb-3">
                <div className="text-center mr-3 border-r pr-3">
                    <h2 className="text-text">4</h2>
                    <span className="text-text">Projects</span>
                </div>
                <div className="text-center">
                    <h2 className="text-text">20</h2>
                    <span className="text-text">Tools</span>
                </div>
                </div>
            </div>
        </div>
    )
}