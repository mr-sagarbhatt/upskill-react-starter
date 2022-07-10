const Loader = () => {
  let circleCommonClasses = 'h-3 w-3 lg:h-4 lg:w-4 bg-sky-300 rounded-full'

  return (
    <div className="flex fixed inset-0 z-[99999] h-screen w-screen justify-center items-center bg-black bg-opacity-70">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  )
}

export default Loader
