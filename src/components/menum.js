import React from 'react'
import Link from "gatsby-link"
import styles from "./menu.module.css"
import { FaHome } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';
import { FaPaperclip } from 'react-icons/fa';

// For menyen:
const MenuMlink = props =>
    <Link 
    to={props.to}
    >
    {props.children}
    </Link>

const MenuM = () => (
    <div>
<Link
      exact to="/"
    >
    <i></i> <FaHome style={{verticalAlign: '-2px'}}/>&nbsp;Startside
    </Link>
<MenuMlink
   	 className={styles.btn}
      to="/files/"
    >
    <i></i> <FaPaperclip style={{verticalAlign: '-3px'}}/>&nbsp;Filer
    </MenuMlink> 
<MenuMlink
   	 className={styles.btn}
      to="/om/"
    >
    <i></i>  <FaLightbulb style={{verticalAlign: '-3px'}}/>&nbsp;Om prosjektet
    </MenuMlink>      
    </div>
)

export default MenuM

