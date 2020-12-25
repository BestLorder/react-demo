import React, { useState } from 'react'

export default function Counter() {
  let [count] = useState(10)

  return <h1>{count}</h1>
}
