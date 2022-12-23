import React, { useContext } from 'react'
import './filter.css'
import { hotels } from '../../hotels'
import { HotelContext } from "../../context/HotelContext";

export const Filter = () => {
    const { dispatch } = useContext(HotelContext);
    function setFilter(e){
        const checkboxValue = e.target.value;
        if(e.target.checked){
            if(e.target.name == "reviewScore"){
                var filteredHotels = hotels.filter( function(ele){
                    return ele.reviewRating >= checkboxValue;
                })
            }else{
                var filteredHotels = hotels.filter( function(ele){
                    return ele.rating == checkboxValue;
                })
            }
            dispatch({type:"SETHOTEL",payload:filteredHotels})
        }
        else{
            dispatch({type:"SETHOTEL",payload:hotels})
        }
    }

  return (
    <div className="w-1/5">
        <div className="hotels-maps">
            <img src="//cf.bstatic.com/static/img/map/map-entry-point/7813a559b03ef30ba107ca5224172615a210e416.png" alt="" className='w-full'/>
        </div>
        <div className="filter-by my-5 p-3">
            <div className="font-bold my-5">
                Filterby:
            </div>
            <div className="divider"></div>
            <div className="filter-by__each">
                <div className="filter-by__each__title font-bold my-5">
                    Star Rating
                </div>
                <div className="filter-by__each__content">
                    <div className="flex mb-3">
                        <div className="filter-by__each__checkbox mr-3">
                            <input type="checkbox" name="rating" id="" value="5" onClick={setFilter}/>
                        </div>
                        <div className="filter-by__each__text">
                            5 Star
                        </div>
                    </div>
                    <div className="flex mb-3">
                        <div className="filter-by__each__checkbox mr-3">
                            <input type="checkbox" name="rating" id="" value="4" onClick={setFilter}/>
                        </div>
                        <div className="filter-by__each__text">
                            4 Star
                        </div>
                    </div>
                    <div className="flex mb-3">
                        <div className="filter-by__each__checkbox mr-3">
                            <input type="checkbox" name="rating" id="" value="3" onClick={setFilter}/>
                        </div>
                        <div className="filter-by__each__text">
                            3 Star
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-by__each">
                <div className="filter-by__each__title font-bold my-5">
                    Review Score
                </div>
                <div className="filter-by__each__content">
                    <div className="flex mb-3">
                        <div className="filter-by__each__checkbox mr-3">
                            <input type="checkbox" name="reviewScore" id="" value="9" onClick={setFilter}/>
                        </div>
                        <div className="filter-by__each__text">
                            Wonderful: 9+
                        </div>
                    </div>
                    <div className="flex mb-3">
                        <div className="filter-by__each__checkbox mr-3">
                            <input type="checkbox" name="reviewScore" id="" value="8" onClick={setFilter}/>
                        </div>
                        <div className="filter-by__each__text">
                            Very Good: 8+
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
