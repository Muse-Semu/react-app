import { fetchFood, totPrice } from "../data/localStorages";
import { actionType } from "./actionType";

const basketInfo = fetchFood();
// const totalInfo = totPrice();
export const initialState = {
  basket: basketInfo,
  // total:totalInfo,
  showBasket: false,
  foodItems: null,
};

const reducer = (state, action) => {

  switch (action.type) {
    case actionType.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
        
      };
    case actionType.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };

    
    case actionType.SHOW_BASKET:
      return {
        ...state,
        showBasket: !state.showBasket,
      };
    case actionType.CLEAR_BASKET:
      return {
        ...state,
        basket: [],
        total: 0,
      };
        
    default:
      return state;
  }
};

export default reducer;
