"use client"


const MapCard = () => {
  return (
    <div className="relative flex lg:flex-col flex-row justify-end items-center ">
        <img 
            src='/card-bg-1.png'
            alt='title'            
        />

        <div className=" absolute flex flex-row   ">
            <div className="flex flex-row mb-[40px]   ">
                    <img src="ppl-01.png" />
                    <img src="ppl-02.png" />
                    <img src="ppl-03.png" />
            </div>
            <p className="lg:ml-[10px] mr-[10px] text-white text-sm font-normal"> +264 users </p>
        </div>
        <h4 className=" absolute text-white text-center font-semibold  lg:ml-[10px] mt-[25px] lg:mb-[5px] mr-[10px] "> The Upside Down </h4>
    </div>
  )
}

export default MapCard