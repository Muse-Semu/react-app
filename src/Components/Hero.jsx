import React from 'react'


function Hero() {
  return (
    <div className="max-w-[1640px] m-auto p-4">
      <div className="max-h-[500px] relative">
        <div
          className="absolute  w-full h-full text-gray-200 max-h-[500px] 
              bg-black/30 flex flex-col justify-center "
        >
          <h1
            className="text-4xl px-4 sm:text-5xl md:text-6xl 
                  lg:text-7xl font-bold"
          >
            {" "}
            The
            <span className="text-orange-500"> Best</span>
          </h1>

          <h1
            className="text-4xl px-4 sm:text-5xl md:text-6xl 
                  lg:text-7xl font-bold"
          >
            <span className="text-orange-500"> Foods </span>
            Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px]  object-cover p-0"
          src="https://cdn.pixabay.com/photo/2016/04/23/22/58/red-meat-1348486_960_720.jpg"
          alt="/"
        />
       
      </div>
    </div>
  );
}

export default Hero