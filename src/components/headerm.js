import React from 'react'

const HeaderM = ({ siteTitle }) => (
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
		
          <span style={{  fontSize:40,
      				marginLeft: -0,
				padding: 10,
      				color: 'rgb(251, 251, 233)',
            		textDecoration: 'none', 
        }}>{siteTitle}</span> <p style={{fontSize:12,color:'white',marginLeft: '110px'}}>- et gratis læreverk i R2</p>
      </h1>
    </div>
  </div>
)

export default HeaderM
