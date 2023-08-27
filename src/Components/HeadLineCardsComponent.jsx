import React from "react";
import { useState } from "react";
import { data } from "../data/data";
function HeadLineCardsComponent() {
   let tempData
  const sizeOfData = data.length;
  if (sizeOfData) {
    if (sizeOfData < 6) {
      tempData = 3
    }
    else if (sizeOfData > 6) {
      tempData = 6
    }
  }
  
  const [numberOfFood, setNumberOfFoods] = useState(tempData
  );
  function handleLoadMore() {
    setNumberOfFoods(numberOfFood + 3);
  }

  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* CARDS */}
      {data.slice(0, 6).map((foods,index) => (
        <div className="rounded-xl relative" key={index}> 
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white pt-0">
            <p className="font-bold text-2xl px-2 pt-2">{foods.name}</p>
            <p className="px-2">Something about this food </p>
            <button className="border-right text-black mx-2 absolute bottom-4 bg-white rounded p-2 font-bold">
              Order Now
            </button>
          </div>

          <img
            className="w-full max-h-[200px] md:max-h-[200px] h-full object-cover rounded-xl"
            src={foods.image}
            alt="/"
          />
        </div>
      ))}
      <div>
        {sizeOfData !== numberOfFood && (
          <button onClick={handleLoadMore} className="p-2 rounded">
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default HeadLineCardsComponent;
//   https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg
