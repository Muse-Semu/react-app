import React, { useEffect, useState } from "react";
import { actionType } from "../redux/actionType";
import { useStateValue } from "../redux/StateProvider";
import { round } from "lodash";
function ItemsInBasket() {
  const [{ basket, foodItems, total }, dispatch] = useStateValue();
  const [qty, setQty] = useState(1);
  const [tot, setTot] = useState(total);
  const updateQty = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
      basket.map((item) => {
        if (item.id === id) {
          item.qty = item.qty + 1;
        }
      });
    } else if (action === "remove") {
       setQty(qty - 1) ;
      basket.map((item) => {
        if (item.id === id) {
          if (item.qty > 1) {
            item.qty = item.qty - 1;
          } else if (item.qty <= 1) {
            dispatch({
              type: actionType.REMOVE_FROM_BASKET,
              payload: id,
            });
          }
        }
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(basket));
    const tt = basket.reduce((acc, item) => {
      return acc + (item.price * item.qty);
    }, 0);
    setTot(tt);
  }, [basket, qty]);
  return (
    <div>
      <div className=" ">
        <div className="mt-3 h-[330px] overflow-y-scroll ">
          {basket.length > 0 ? (
            basket.map((item) => (
              <div key={item.id} className=" ">
                <div className="ml-2 my-1 flex gap-2 p-2 items-center border rounded justify-between">
                  <div className="flex gap-2">
                    <img src={item.image} alt="" className="w-10 h-10" />
                    <div className="flex items-start flex-col justify-center ">
                      <p className="font-semibold ">{item.name}</p>
                      <div className="flex gap-2 items-center">
                        <p className="text-[10px]">pr : ${item.price}</p>
                        <p className="font-semibold text-[10px] font-mono text-orange-500">
                          subtotal : $
                          {parseFloat((item.price * item.qty).toFixed(2))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => updateQty("remove", item?.id)}
                      className="px-4  border"
                    >
                      -
                    </button>
                    <p className="font-bold text-orange-600">{item.qty}</p>
                    <button
                      onClick={() => updateQty("add", item?.id)}
                      className="px-4  border"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                className="h-[230px] "
                src="https://cdn.pixabay.com/photo/2017/01/31/21/59/cap-2027575_960_720.png"
                alt=""
              />
              <p className="font-bold  font-mono py-4 text-red-500">
                No foods in your basket
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col  items-center w-full  p-4">
          {basket.length > 0 && (
            <>
              <div className="w-full rounded p-1 bg-slate-50 font-semibold  ">
                <div className="flex w-full justify-between text-blue-500">
                  <p>Subtotal</p>
                  <p>{tot}</p>
                </div>

                <div className="flex w-full justify-between text-blue-500">
                  <p>Delivery</p>
                  <p>$ 2.5</p>
                </div>

                <div className="flex w-full justify-between text-blue-500">
                  <p>Tax</p>
                  <p>$ 0</p>
                </div>
                <div className="flex w-full justify-between text-orange-500 pt-2 border-t border-orange-500">
                  <p>Total</p>
                  <p>${parseFloat(tot + 2.5).toFixed(2)}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemsInBasket;
