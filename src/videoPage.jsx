import Video from './components/Video';

export default ({ advanceStep, config: { video } }) => {
  return (
    <Video onFinished={advanceStep} {...video} />
  )
}
