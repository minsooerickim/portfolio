import Lottie from 'react-lottie'

export const LottieWrapperClick = ({ animationData, height, width, isStopped, isPaused }) => {
  const defaultOptions  = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return <Lottie options={defaultOptions} height={height} width={width} isStopped={isStopped} isPaused={isPaused}/>
}
