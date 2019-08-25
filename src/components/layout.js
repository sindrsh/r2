import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaBars } from 'react-icons/fa';


import Menu from './menu'
import MenuM from './menum'
import Header from "./header"
import HeaderM from "./headerm"
import "./layout.css"
import styles from "./menu.module.css"
import stylesm from './mmenu.module.css'

// Funksjon for navigasjonen
var cnt = 0;  
function openNav() {
    if (cnt ===0){
        document.getElementById("mySidenav").style.height = "200px";
        document.getElementById("main").style.marginTop = "200px";
        cnt = 1;
    }
    else{
        document.getElementById("mySidenav").style.height = "50px";
        document.getElementById("main").style.marginTop = "50px";
        cnt = 0;
    }
}


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
if(typeof window !== 'undefined'){
  
if (window.innerWidth > 550){
  return (
    <>
    <body className={styles.bdy}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu/>
      <div className={styles.cont}>{children}</div>
     </body>
    </>
  )
}
else{
return(
<body style={{
overflow: 'hidden',
}}>
<HeaderM siteTitle={data.site.siteMetadata.title} />
<div id="mySidenav" className={stylesm.topnav}>
 <p><span onClick={ () => openNav()}><FaBars style={{verticalAlign: '-4px'}}/>&nbsp;&nbsp; Meny</span></p>
 <MenuM/>
</div>

 <div id="main" className={stylesm.main} >
      {children}
  </div>
 
  </body>

)
}
}
else{
return (
    <>
    <body className={styles.bdy}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu/>
      <div className={styles.cont}>{children}</div>
     </body>
    </>
  )
}
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
