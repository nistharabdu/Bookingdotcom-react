const HotelReducer = (state, action) => {
    switch (action.type) {
      case "SETHOTEL": {
        return {
            hotelData: action.payload,
        };
      }
      default:
        return state;
    }
  };
  
export default HotelReducer;
  