const Loader = ({ className }) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="text-sm opacity-70">Loading latest news...</p>
    </div>
  )
}

export default Loader
