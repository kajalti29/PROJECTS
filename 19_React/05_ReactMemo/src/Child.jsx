import React from 'react'

const Child = React.memo(() => {
    console.log("child Rendered");
    
  return (
    <div>
      <h2>Child component</h2>
    </div>
  )
});

export default Child
