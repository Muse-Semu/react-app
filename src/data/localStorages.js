export const fetchFood = () => {
  const foodInfo =
    localStorage.getItem("foods") !== "undefined"
      ? JSON.parse(localStorage.getItem("foods"))
      : localStorage.clear();

      return foodInfo ? foodInfo :[]
};

export const totPrice = ()=>{
 const foodInfo =
    localStorage.getItem("foods")!== "undefined"
     ? JSON.parse(localStorage.getItem("foods"))
      : JSON.parse(localStorage.getItem("foods",[]));
      console.log(foodInfo)
      return foodInfo.reduce((acc,curr)=>{
        return acc + parseFloat(curr.price).toFixed(2) * curr.qty
      },0)
}