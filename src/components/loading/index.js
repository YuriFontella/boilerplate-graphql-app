const Loading = () => {

  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden bg-gray-200 flex items-center justify-center">
      <div className="animate-ping rounded-full border-2 border-indigo-600 h-6 w-6"></div>
    </div>
  )
}

export default Loading