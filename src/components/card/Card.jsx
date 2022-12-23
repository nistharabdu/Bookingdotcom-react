import React from 'react'
import starSvg from '../../assets/star.svg'
import { Star } from '../star/Star';


export const Card = ({hotel}) => {
    function loadRating(ratingNumber){
        let rows = [];
        for (let i = 0; i < ratingNumber; i++) {
            rows.push(<Star key={i}/>);
        }
        return rows;
    }

    return (
        <div className="flex hotel-lists__each my-3 p-4">
            <div className="hotel-lists__each__image">
                <img src={hotel.image} alt="" />
            </div>
            <div className="hotel-lists__each__content flex-1 pl-3 pr-0">
                <div className="flex justify-between">
                    <div className="hotel-lists__each__content__descp pr-3">
                        <div className="flex hotel-lists__each__title items-center mb-0">
                            <div className="font-bold">
                                <h3>{hotel.name}</h3>
                            </div>
                            <div className="flex align-center hotel-lists__each__rating pl-3">
                                {/* {Array(hotel.rating).fill(1).map((el, i) => <Star key={i} />)} */}
                                {loadRating(hotel.rating)}
                            </div>
                        </div>
                        <div className="flex items-center hotel-lists__each__location mb-3">
                            <div className="hotel-lists__each__location__icon">
                                <svg className="bk-icon -iconset-geo_pin" height="20" role="presentation" width="20" viewBox="0 0 128 128" aria-hidden="true" focusable="false"><path d="M98.5 42.5a34.5 34.5 0 1 0-64.3 17.2L64 120l29.8-60.3a34.2 34.2 0 0 0 4.7-17.2zM64 59.7a17.2 17.2 0 1 1 17-17 17.2 17.2 0 0 1-17 17z"></path></svg>
                            </div>
                            <div className="hotel-lists__each__location__name">
                                {hotel.location}
                            </div>
                        </div>
                        <div className="hotel-lists__each__address mb-3">
                            ${hotel.descp}
                        </div>
                        <div className="hotel-lists__each__more-link">Show more</div>
                    </div>
                    <div className="hotel-lists__each__content__price flex-none flex justify-between flex-col">
                        <div className="flex hotel-lists__each__review  items-center">
                            <div className="hotel-lists__each__review__content">
                                <div className="hotel-lists__each__review__text font-bold">{hotel.reviewTitle}</div>
                                <div className="hotel-lists__each__review__number">{hotel.reviewNumbers.toLocaleString('en-US')} reviews</div>
                            </div>
                            <div className="hotel-lists__each__review__badge ml-2">
                                <div className="flex items-center justify-center hotel-lists__each__review__number__content font-bold">
                                    {hotel.reviewRating}
                                </div>
                            </div>
                        </div>
                        <div className="hotel-lists__each__price mb-3">
                            <div>Price from</div>
                            <div><span className="font-bold">AED {hotel.price}</span></div>
                            <div>per night</div>
                        </div>
                    </div>
                </div>
                <div className="hotel-lists__each__button flex justify-end">
                    <button className="btn btn--blue">Check availability</button>
                </div>
            </div>
        </div>
    )
}
