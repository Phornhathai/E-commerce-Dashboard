import React from 'react'
import { Link } from 'react-router-dom'
import "./menu.scss"
import { menu } from "../../data"

const Menu = () => {
  return (
    <div className="menu">

      {menu.map((Item) => (
        <div className="item" key={Item.id}>
          <span className="title">
            {Item.title}
          </span>
          { Item.listItems.map((listItem) => (
            <Link to="/" className='listItem'>
            <img src={listItem.icon} alt="" />
            <span className="listItemTitle">
              {listItem.title}
            </span>
          </Link>
          ))}
        </div>
      ))}
    </div>

  )
}

export default Menu
