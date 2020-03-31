// import React, { Component } from "react";

// class My extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <h2> Myooooo </h2> <h2> Myooooo </h2>{" "}
//       </div>
//     );
//   }
// }

// export default My;
import React, { useState,useEffect } from 'react';
function My(){
    const [ count , setCount ] = useState(10);
    useEffect(()=>{
        
        console.log(`useEffect=>You clicked ${count} times`)

        return ()=>{
            console.log('====================')
        }
    },[count])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}
export default My;
