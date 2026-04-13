import React from 'react'  // rafce
import './Footer.css'

// const Footer = (props) => {
// const Footer = (props) => {
//     const {cantadorPadre, otraCosa} = props; // destructuración de props
const Footer = ({cantadorPadre, otraCosa}) => {    
  return (
    <footer>
        Copyright © 2026 - All rights reserved
        <p>{cantadorPadre}</p>
        <p>{otraCosa}</p>
    </footer>
  )
}

export default Footer