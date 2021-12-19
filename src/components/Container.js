import React from 'react'
import estilo from './Container.module.css'

const Container = (props) => {
  const 
  return (
    <div className={estilo.container}>
      {props.children}
    </div>
  )
}

export default Container
