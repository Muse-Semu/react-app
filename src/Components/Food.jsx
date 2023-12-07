import React, { useEffect } from "react";
import { useState } from "react";
import { categories, data } from "../data/data";
import { actionType } from "../redux/actionType";
import { useStateValue } from "../redux/StateProvider";
function Food() {
  const [food, setFood] = useState(data);
  const [foodCategory, setFoodCategory] = useState("All");
  const [foodCount, setFoodCount] = useState(food.length);
  const [numberOfFood, setNumberOfFoods] = useState(4);
  const cat = categories;
  const [{ basket, foodItems }, dispatch] = useStateValue();
  const [clicked, setClicked] = useState(false);
  const [items, setItems] = useState([]);
  const [msg, setMsg] = useState("");
  const [found, setFound] = useState(false);
  function handleLoadMore() {
    setNumberOfFoods(numberOfFood + 4);
  }

  const handeleAddToBasket = (food) => {
    const isFound = basket.some((basket) => {
      if (basket.id === food.id) {
        setFound(true);
        setTimeout(()=>{
          setFound(false);
        },1500)
        setMsg("This item is already fond in your basket");
        return true;
      }
    });
    if (isFound === false) {
      dispatch({
        type: actionType.ADD_TO_BASKET,
        payload: {
          id: food.id,
          name: food.name,
          image: food.image,
          price: food.price,
          category: food.category,
          qty: 1,
        },
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(basket));
  }, [basket]);

  const filterByType = (category) => {
    if (category === "All") {
      setFood(data);
    } else {
      const temp = data.filter((item) => item.category === category);
      setFood(temp);
    }
    setFoodCount(food.length);
    foodCount === 0
      ? setNumberOfFoods(4)
      : foodCount > 4
      ? setNumberOfFoods(4)
      : setNumberOfFoods(foodCount);
    setFoodCategory(category);
  };

  return (
    <div className="mx-2 mt-6 mb-9">
      <h1 className="text-orange-600 font-bold text-4xl text-center my-4">
        Food Menu
      </h1>
      <div className="w-full  flex flex-wrap justify-center gap-2">
        {cat.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => {
                filterByType(item.name);
                setClicked(true);
              }}
              className={` text-white font-bold py-2 px-4 rounded border `}
            >
              {" "}
              <div className="flex flex-col items-center justify-center">
                <img src={item.image} alt="" className="w-10 h-10" />
                <p className="text-black">{item.name}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div>
        {food.length > 0 ? (
          <>
            {" "}
            <h3 className="ml-6 font-bold text-2xl text-black">
              {foodCategory}
            </h3>
          {found && (<div className="sticky top-20 z-50 w-full md:w-[80%] p-3 m-auto border rounded bg-red-400">
              <p className="font-bold text-white text-xl text-center">{msg}</p>
          </div>)}
            <div className="grid grid-cols-1 m-3 md:grid-cols-3 items-center justify-center sm:grid-cols-1 lg:grid-cols-4 pt-4 gap-6">
              {food.slice(0, numberOfFood).map((item, index) => (
                <div
                  key={index}
                  className=" bg-gray-50 rounded-lg relative hover:text-white shadow-lg
                hover:scale-105 duration-500"
                >
                  <img
                    className="w-full h-[200px] rounded-t-lg object-cover"
                    src={item.image}
                    alt=""
                  />
                  <button
                    onClick={() => handeleAddToBasket(item)}
                    className="border-right text-black mx-2 absolute top-9 right-4  bg-orange-500 rounded p-2 
              font-bold duration-500 hover:bg-orange-600 "
                  >
                    Order Now
                  </button>
                  <div className="flex justify-between p-3">
                    <p className=" top-3 left-3 text-1xl text-black font-bold">
                      {item.name}
                    </p>
                    <p className="text-white px-3 bottom-3 right-3 rounded-lg bg-orange-600 text-1xl">
                      {item.price} ETB
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {food.length > numberOfFood && (
              <div>
                <button
                  onClick={handleLoadMore}
                  className="ml-4 border px-4 py-2 flex justify-center items-center"
                >
                  Load More ....
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col  my-7 justify-center items-center ">
            <img
              className="w-[150px] h-[150px] "
              src="https://cdn.pixabay.com/photo/2019/02/19/07/23/graphic-4006221_960_720.png"
              alt=""
            />
            <h3 className="flex font-bold text-4xl my-2">
              Not found {foodCategory}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Food;
