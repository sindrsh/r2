import React from 'react'
import Link from "gatsby-link"
import styles from "./menu.module.css"

// For menyen:
const MenuLink = props =>
    <Link 
    to={props.to}
    className={styles.btn}
    activeClassName={styles.btna}>
    {props.children}
    </Link>

const Menu = () => (
    <div className={styles.menu} >
	<ul className={styles.ulmenu}>
<Link
      className={styles.btn}
      exact to="/"
      activeClassName={styles.btna}
    >
    <i className="fa fa-home"></i> &nbsp;&nbsp;Startside
    </Link>
<MenuLink
   	 className={styles.btn}
      to="/files/"
    >
    <i className="fa fa-paperclip"></i> &nbsp;&nbsp;Filer
    </MenuLink> 
<MenuLink
   	 className={styles.btn}
      to="/om/"
    >
    <i className="fa fa-lightbulb-o"></i>  &nbsp;&nbsp;&nbsp;Om prosjektet
    </MenuLink> 
<MenuLink
   	 className={styles.btn}
      to="/eks/"
    >
    <i className="fa fa-pencil"></i> &nbsp;&nbsp;Hmm
    </MenuLink>     
      </ul>
    </div>
)

export default Menu

