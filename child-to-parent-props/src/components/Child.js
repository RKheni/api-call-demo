import React from 'react'

function Child(props) {
  return (
    <div>
        <p> Parent to child props: {props.name} </p>
    </div>
  )
}

export default Child
