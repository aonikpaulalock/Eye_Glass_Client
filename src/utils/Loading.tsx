import spinner from "../assets/images/spinner.png"
const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="">
        <img src={spinner} alt="" className="w-25 h-25 mx-auto animate-spin" />
      </div>
    </div>
  )
};

export default Loading;