import Lottie from 'react-lottie'

export const LottieWrapperClick = ({ animationData, height, width, isPaused }) => {
  const defaultOptions  = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return <Lottie options={defaultOptions} height={height} width={width} isPaused={isPaused}/>
}
