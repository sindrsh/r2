import React from 'react'
import Link from "gatsby-link"
import styles from "./menu.module.css"
import { FaHome } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';
import { FaPaperclip } from 'react-icons/fa';


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
    <i></i> <FaHome style={{verticalAlign: '-2px'}}/> &nbsp;Startside
    </Link>
<MenuLink
   	 className={styles.btn}
      to="/files/"
    >
    <i></i> <FaPaperclip style={{verticalAlign: '-3px'}}/> &nbsp;Filer
    </MenuLink> 
<MenuLink
   	 className={styles.btn}
      to="/om/"
    >
    <i></i> <FaLightbulb style={{verticalAlign: '-3px'}}/> &nbsp;Om prosjektet
    </MenuLink>     
      </ul>
    <div className={styles.btm}></div>  
    </div>
    
)

export default Menu

