import React from 'react'
import Counter from './counter'

const Clickcounter = (props) => {
  const {count,increment} = props
  return(
    <>
    <h5>Count : {count}</h5>
    <button onClick={increment} >Increment</button>
    </>
  )
}

export default Counter(Clickcounter)