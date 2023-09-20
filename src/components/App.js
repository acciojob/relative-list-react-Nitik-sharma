import React, { useState } from 'react'

const App = () => {
  const relative=[ { id: 1, name: "Arya" },
  { id: 2, name: "Sahana" },
  { id: 3, name: "Rohan" },
  { id: 4, name: "Kavya" },
  { id: 5, name: "Arjun" },
  { id: 6, name: "Asha" },
  { id: 7, name: "Vikram" },
  { id: 8, name: "Sarika" },
  { id: 9, name: "Pranav" },
  { id: 10, name: "Meera" }];
  
  console.log(relative)
  return (
    <div id="main">
      <h1>Hello</h1>
           <ol>
           {
            relative.map((per)=>(
              <li key={per.id}>{per.name}</li>
            ))
           }
            </ol>   
    </div>
  )
}

export default App
