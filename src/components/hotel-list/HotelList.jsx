import React, { useContext } from 'react'
import './hotelList.css'
import { hotels } from '../../hotels';
import { Card } from '../card/Card';
import { HotelContext } from "../../context/HotelContext";

export const HotelList = () => {
    const { hotelData } = useContext(HotelContext);
    const { dispatch } = useContext(HotelContext);
    
    function setFilteredLowestPriceHotels(e){
        var hotelListsToSort = [...hotelData];
        if(e.target.classList.contains("active")){
            e.target.classList.remove("active");
            dispatch({type:"SETHOTEL",payload:hotels})
        }
        else{
            e.target.classList.add("active");
            var lowestPriceHotelsList = hotelListsToSort.sort( function(a,b){
                return a.price - b.price;
            })
            dispatch({type:"SETHOTEL",payload:lowestPriceHotelsList})
        }
    }

    return (
        <div className="flex-1 pl-5">
            <div className="results-count font-bold mb-3">
                Dubai – <span className="results-count-data">7,968</span> hotels and places to stay
            </div>
            <div className="flex top-filter mb-3">
                <div className="top-filter__each flex-1 p-3">
                    <button>Our Top Picks</button>
                </div>
                <div className="top-filter__each top-filter__each--lowest-price flex-1  p-3" onClick={setFilteredLowestPriceHotels}>
                    <button>Lowest Price First</button>
                </div>
                <div className="top-filter__each flex-1  p-3">
                    <button>Star rating and price</button>
                </div>
                <div className="top-filter__each flex-1  p-3">
                    <button>Top Reviewed</button>
                </div>
            </div>
            <div className="hotel-lists">
                {
                    hotelData.map( eachHotel => <Card hotel={eachHotel} key={eachHotel.id}/>)
                }
            </div>
        </div>
    )
}
