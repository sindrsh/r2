import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      height: 80,
      background: '#751aff',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        marginLeft: '300',
        maxWidth: 960,
      }}
    >
      <h1    style={{
      	padding: 10,
        maxWidth: 960,
      }}>
		
          <span style={{  fontSize:50,
      				marginLeft: -0,
				padding: 10,
      				color: 'rgb(251, 251, 233)',
            		textDecoration: 'none', 
        }}>{siteTitle}</span> <span style={{fontSize:20,color:'white'}}>- et gratis læreverk i R2</span>
      </h1>
    </div>
  </div>
)

export default Header
