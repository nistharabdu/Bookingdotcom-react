import React from 'react'

export const Main = (props) => {
  return (
    <div className="main-content my-10">
        <div className="container mx-auto"> 
            <div className="breadcums"></div>
            <div className="flex">
                {props.children}
            </div>
        </div>
    </div>
  )
}
