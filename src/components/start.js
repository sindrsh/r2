import React from 'react'
import styles from "./menu.module.css"
import logoNRG from "../images/treev.png" // Tell Webpack this JS file uses this image
console.log(logoNRG)

const Start = () => (
<div>
<p><b>Komplett læreverk i R2 </b> <br/> <i>Før kalkulus</i> er et komplett læreverk i matematikk R2 som består av de to delene <i> Før kalkulus; Teoridel</i> og <i> Før kalkulus; GeoGebra 5 i R2</i>. I teoridelen vektlegges den matematiske
forståelsen, mens GeoGebra-delen tar for seg de viktigste verktøyene programvaren tilbyr for å kunne løse problemer knyttet 
til faget digitalt. Begge delene kan du laste ned fra <i> Filer</i> i menyvalget.</p>

<div className={styles.qt}>
<q>Jeg tok R2 mens jeg jobbet i Forsvaret, og ved hjelp av Før Kalkulus ble karakteren for å kvalifisere til SIVING studier på NTNU spikret. Læreverket fremstår som meget oversiktlig og er skrevet på en slik måte at det er lett å forstå emnene. </q>
<p className={styles.qtt}><i>- Påtroppende student</i></p>

<p>
<img src={logoNRG} alt="logoNRG" style={{width: '70px', verticalAlign: 'middle'}}/></p>
<p className={styles.nrgt}>
<a style={{textDecoration: 'none'}} href="https://nrg.no"> Norges Realfagsgymnas</a> bruker Før Kalkulus i sin undervisning</p>
</div>


</div>


/**
<p>
<img src={logoNRG} alt="logoNRG" style={{width: '70px', verticalAlign: 'middle'}}/>&nbsp; Norges Realfagsgymnas bruker Før Kalkulus i sin undervisning</p>
</div>
&nbsp;&nbsp;&nbsp;&nbsp;
<img src={test2} alt="Logo2" style={{width: '150px'}}/>
 */

)

export default Start

