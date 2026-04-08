import React, { useState } from 'react'

const Count = () => {

    const [count,setcount]=useState(0)
    const handleClick = () => {
        setcount(count+1<=10 ? count+1 : count)
    }
    const handleClick2 = () => {
        setcount(count-1>=0 ? count-1 : count)
    }
  return (
    <div className='flex'>
         <button onClick={handleClick}>
        +
      </button>
      <p>You clicked {count} times</p>
      <button onClick={handleClick2}>
        -
      </button>
    </div>
  )
}

export default Count