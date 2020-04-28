import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Menu from '../Menu'
import Links from '../Links'
import profilePic from '../../pages/photo.jpg'
import './style.scss'

class Sidebar extends React.Component {
  render() {
    const { location } = this.props
    const {
      author,
      subtitle,
      copyright,
      menu,
    } = this.props.data.site.siteMetadata
    const menuData = {
      menu: menu,
      categories: this.props.data.categories.group,
    }
    const isHomePage = get(location, 'pathname', '/') === '/'

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        {isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h1>
        ) : (
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h2>
        )}
        <h6 className="sidebar__author-degree">
            {author.degree}
        </h6>
        <h6 className="sidebar__author-occupation">
            {author.title}
            &nbsp;@&nbsp; 
            <a className="sidebar__author-occupation-link" href={`https://${author.business_link}`}>
              {author.business_name}
            </a>
        </h6>
        <p className="sidebar__author-subtitle">
          {subtitle}
        </p>
      </div>
    )
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <div>
            <Menu data={menuData} />
            <Links data={author} />
            <p className="sidebar__copyright">{copyright}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
