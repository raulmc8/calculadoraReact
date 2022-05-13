import React from 'react'
import '../styles/Clear.css'

export default function Clear(props) {
  return (
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
  )
}
