import ReactLoading from 'react-loading'

const Loading = () => {

  return (
    <div className="flex justify-center py-4">
      <ReactLoading type="spin" width={25} height={25} color="rgba(79, 70, 229)" />
    </div>
  )

}

export default Loading