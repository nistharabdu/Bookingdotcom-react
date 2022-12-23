import { createContext, useReducer } from "react";
import HotelReducer from "./HotelReducer";
import { hotels } from '../hotels';

const INITIAL_STATE = {
    hotelData: hotels
};

export const HotelContext = createContext(INITIAL_STATE);

export const HotelContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(HotelReducer, INITIAL_STATE);

  return (
    <HotelContext.Provider value={{ hotelData: state.hotelData, dispatch }}>
      {children}
    </HotelContext.Provider>
  );
};
