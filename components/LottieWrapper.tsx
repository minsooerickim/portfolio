import Lottie from 'react-lottie'

export const LottieWrapper = ({ animationData }) => {
  const heroOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return <Lottie options={heroOptions} height="60%" width="60%" />
}
