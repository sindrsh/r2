import React from 'react'
import Link from "gatsby-link"
import styles from "./menu.module.css"

// For menyen:
const MenuMlink = props =>
    <Link 
    to={props.to}
    >
    {props.children}
    </Link>

const MenuM = () => (
    <div  >
<Link
      exact to="/"
    >
    <i className="fa fa-home"></i> &nbsp;&nbsp;Startside
    </Link>
<MenuMlink
   	 className={styles.btn}
      to="/files/"
    >
    <i className="fa fa-paperclip"></i> &nbsp;&nbsp;Filer
    </MenuMlink> 
<MenuMlink
   	 className={styles.btn}
      to="/om/"
    >
    <i className="fa fa-lightbulb-o"></i>  &nbsp;&nbsp;&nbsp;Om prosjektet
    </MenuMlink> 
<MenuMlink
   	 className={styles.btn}
      to="/eks/"
    >
    <i className="fa fa-pencil"></i> &nbsp;&nbsp;Hmm
    </MenuMlink>     
    </div>
)

export default MenuM

