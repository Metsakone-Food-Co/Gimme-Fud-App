import React from 'react'
import ListRestaurantComponent from './ListRestaurantComponent'


export default function RestaurantProfileComponent({onProfileClick}) {
    console.log({onProfileClick});
  return (
    <div>{onProfileClick}</div>


    
  )
}