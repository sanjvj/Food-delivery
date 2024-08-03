import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/food del assets/frontend_assets/assets'
const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>Choose from our diverse menu featuring delicious dishes</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return (
                <div key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image}></img>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr></hr>
    </div>
  )
}

export default ExploreMenu
