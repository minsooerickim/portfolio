import { useSession } from 'next-auth/react'
import { LottieWrapper } from './LottieWrapper'
import rocket from '../lotties/rocket.json'
import tools from '../lotties/tools.json'

export default function Landing() {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return (
    <div className="flex justify-center items-center">
      <div className="md:w-6/12 rounded-3xl overflow-hidden shadow-xl bg-card ">
        <img src="/assets/Colored-Shapes.svg" className="" />
        <div className="flex justify-center -mt-8">
          <img
            src="https://i.imgur.com/wIkQEfn.jpg?1"
            className="w-6/12 rounded-full border-solid  border-2 -mt-3"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <p className="mt-2 text-md font-bold text-normalText">
            CS @ UC Riverside
          </p>
          <p className="mt-2 font-light text-secondaryNormalText">
            Feel free to reach out to{' '}
            <a className="text-text" href="mailto:minsooerickim@gmail.com">
              me
            </a>
            !
          </p>
        </div>
        <div className="flex justify-center pb-3">
          <div className="text-center mr-3 md:border-r pr-3">
            <div className="inline-block">
              <LottieWrapper animationData={rocket} height={80} width={80} />
            </div>
            <div className=" inline-block">
              <h2 className="text-text">4</h2>
              <span className="text-normal">Projects</span>
            </div>
          </div>
          <div className="text-center">
            <div className=" inline-block">
              <h2 className="text-text">20</h2>
              <span className="text-normal">Tools</span>
            </div>
            <div className="inline-block">
              <LottieWrapper animationData={tools} height={70} width={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
