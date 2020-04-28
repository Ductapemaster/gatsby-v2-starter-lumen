import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import './style.scss'

class Menu extends React.Component {
  render() {
    const menu = this.props.data.menu
    const categories = this.props.data.categories

    const menuBlock = (
      <ul className="menu__list">
        {menu.map(item => (
          <li className="menu__list-item" key={item.path}>
            <Link
              to={item.path}
              className="menu__list-item-link"
              activeClassName="menu__list-item-link menu__list-item-link--active"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    )
    const categoryMenuBlock = (
      <ul className="menu__list">
        {categories.map(category => (
          <li
            key={category.fieldValue}
            className="menu__list-item"
          >
            <Link
              to={`/categories/${kebabCase(
                category.fieldValue
              )}/`}
              className="menu__list-item-link"
              activeClassName="menu__list-item-link menu__list-item-link--active"
            >
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    )

    return (
      <div>
        {/*<nav className="menu">{menuBlock}</nav>*/}
        <h6 className="menu__list-title">Post Categories</h6>
        <nav className="menu">{categoryMenuBlock}</nav>
      </div>
    )
  }
}

export default Menu
