import React from 'react'

export default function FlexContainer(props) {
  return (
    <div style={{display: 'flex'}}>

        {props.children}
    </div>
  )
}
