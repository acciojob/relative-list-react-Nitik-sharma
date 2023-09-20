import React from 'react'

const App = () => {
  const relative=["Arya",
  "Sahana",
  "Rohan",
  "Kavya",
  "Arjun",
  "Asha",
  "Vikram",
  "Sarika",
  "Pranav",
  "Meera"];
  console.log(relative)
  return (
    <div id="main">
      <h1>Hello</h1>
           <ol>
           {
            relative.map((per,index)=>(
              <li key={index}>{per}</li>
            ))
           }
            </ol>   
    </div>
  )
}

export default App
