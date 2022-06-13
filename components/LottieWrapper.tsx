import Lottie from 'react-lottie'

export const LottieWrapper = ({ animationData, height, width }) => {
  const defaultOptions  = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return <Lottie options={defaultOptions} height={height} width={width} />
}
