// import ReactPlayer from "react-player";


function Video() {
  return (
    <div className=" FlexCenterCol items-center p-4">
      <h1 className="p-2 text-xl mb-2 place-self-start md:place-self-center NameShadow "></h1>
      <div className='Round w-96  hover:border-sky-500'>
       <video controls lo
       op className='Round Shadow focus:shadow-Redd focus:shadow-2xl Smoother' src={require('../../public/BassSlap.mov')} />
      </div>
    </div>
  );
}

export default Video