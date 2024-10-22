import React from 'react';
function Props(props){
  return (
    <div>
      <h1>Props in React Js</h1>
      <h1>{props.data.name}</h1>
      <h1>{props.data.address}</h1>
    </div>
  )
}

export default Props;
