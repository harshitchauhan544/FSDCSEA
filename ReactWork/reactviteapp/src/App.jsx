import React from "react";
import Student from "./Student";

function App(){
  let a = 12
  const mystyle = {
    backgroundColor:'pink',
    color:'cyan',
    height:'500px'
  }
  return (
    <div style = {mystyle}> ABES Engineering College
      <Student name="SO"></Student>
    </div>

    // <div> ABES Engineering College </div>
    // <div style = mystyle></div>
  )
}


export default App