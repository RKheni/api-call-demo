import React from 'react'

function ChildParentProps({ setCount }) {
  return (
    <div>
      <p> Child to Parent Props</p>
      <button onClick={() => setCount(1)}>1</button>
      <button onClick={() => setCount(2)}>2</button>
      <button onClick={() => setCount(3)}>3</button>
    </div>
  )
}

export default ChildParentProps
