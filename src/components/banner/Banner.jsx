import React, { useState,useContext } from 'react'
import './banner.css'
import { hotels } from '../../hotels';
import { HotelContext } from "../../context/HotelContext";

export const Banner = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { dispatch } = useContext(HotelContext);

    function searchHotel(e){
        e.preventDefault();
        var filteredHotels = hotels.filter( function(ele){
            return ele.name.toLocaleLowerCase().indexOf(searchTerm) > -1;
        });
        dispatch({type:"SETHOTEL",payload:filteredHotels})
    }

  return (
    <div className="banner" style={{backgroundImage: "url('https://cf.bstatic.com/xdata/images/explorer_city/1680x560/2590.webp?k=dec5256b6014a04d763d3f2965a9cff0e974ac20245e42cb3df6b81602f285bf&o=')"}}>
        <div className="banner-hero__mask"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 mx-auto">
            <div className="banner__content white">
                <div className="banner__content__heading">
                    <h1 className="">Search hotels in Dubai</h1>
                </div>
                <div className="banner__content__descp">
                    <h2>Enter your dates to see the latest prices and deals for Dubai hotels</h2>
                </div>
                <div className="banner__content__search p-1 mt-5">
                    <form onSubmit={searchHotel}>
                        <div className="flex w-full justify-between">
                            <div className="banner__content__search__text flex-1 mr-1">
                                <input type="text" name="place" placeholder="Dubai" className="h-full w-full p-3" onChange={e =>  setSearchTerm(e.target.value)}/>
                            </div>
                            <div className="banner__content__search__date mr-1">
                                <div className="flex items-center justify-center h-full white-bg px-3">
                                    <div className="mr-3"><svg aria-hidden="true" className="bk-icon -experiments-calendar sb-date-picker_icon-svg" fill="#BDBDBD" focusable="false" height="20" role="presentation" width="20" viewBox="0 0 128 128"><path d="m112 16h-16v-8h-8v8h-48v-8h-8v8h-16c-4.4 0-8 3.9-8 8.7v86.6c0 4.8 3.6 8.7 8 8.7h96c4.4 0 8-3.9 8-8.7v-86.6c0-4.8-3.6-8.7-8-8.7zm0 95.3a1.1 1.1 0 0 1 -.2.7h-95.6a1.1 1.1 0 0 1 -.2-.7v-71.3h96zm-68-43.3h-12v-12h12zm0 28h-12v-12h12zm26-28h-12v-12h12zm0 28h-12v-12h12zm26 0h-12v-12h12zm0-28h-12v-12h12z" fillRule="evenodd"></path></svg></div>
                                    <div>Check-in</div>
                                    <div>-</div>
                                    <div>Check-out</div>
                                </div>
                            </div>
                            <div className="flex banner__content__search__date mr-1">
                                <div className="flex items-center justify-center h-full white-bg px-3">
                                    <div className="pr-3"><img src="https://cf.bstatic.com/static/img/cross_product_index/guest/b2e5f2aa32b71ca0fc66aa671e4e958bcd69b7d0.svg" alt="" /></div>
                                    <div>2 adults . 0 children . 1 room</div>
                                    <div className="pl-3"><img src="https://cf.bstatic.com/static/img/cross_product_index/toggle/fb6f63d62231f9fe552d79b5448620b2e63c726e.svg" alt="" /></div>
                                </div>
                                </div>
                                <div className="flex">
                                <button type="submit" className="text-lg btn btn--blue form-submit-btn">
                                    Search
                                </button>
                                </div>
                        </div>
                    </form>
                </div>
                <div className="flex mt-3">
                    <div className="mr-2"><input type="checkbox" width="35" /></div>
                    <div>I'm traveling for work</div>
                </div>
            </div>
        </div>
    </div>
  )
}
