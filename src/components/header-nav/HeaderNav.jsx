import React from 'react'

export const HeaderNav = ({icon,name}) => {
  return (
    <div className="flex category__each active p-3 mx-2 ml-0">
        <div className="category__each__icon mr-3">{icon}</div>
        <div className="category__each__label">{name}</div>
    </div>
  )
}
