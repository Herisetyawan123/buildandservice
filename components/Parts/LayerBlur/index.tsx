const LayerBlur = ({ hidden, children } : { hidden: boolean, children:JSX.Element }) => {
  return (
    <div className={`${hidden ? '' : 'hidden'}  absolute bg-white/30 backdrop-blur-sm top-0 bottom-0 left-0 right-0 flex justify-center items-center`}>
      { children }
    </div>
  )
}

export default LayerBlur;