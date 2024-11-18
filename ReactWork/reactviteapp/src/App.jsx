import React from "react";
import Student from "./Student";
import logo from "./p1.jpg"
import StudentState from "./StudentState";

function App(){
  let a = 12
  const mystyle = {
    backgroundColor:'pink',
    color:'blue',
    height:'500px',
    display:'flex'
  }

  const studentdata = [
    {
    college:"ABES Engineering College",
    pic: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
    name:"Jaadu",
    branch:"Arts",
    roll:"21"
    },
    {
      college:"ABES Engineering College",
      pic: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
      name:"Jaadu",
      branch:"Arts",
      roll:"21"
      },
      {
        college:"ABES Engineering College",
        pic: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
        name:"kullu",
        branch:"Arts",
        roll:"21"
        },
        {
          college:"ABES Engineering College",
          pic: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
          name:"Jaadu",
          branch:"Arts",
          roll:"21"
          },
  ]
  return (
    // <div style = {mystyle}> ABES Engineering College
    //   {/* <Student name="SO" roll = "66" branch = "CSE" pic = {<img src ={logo} height ={100} widht ={120}/>}></Student> */}
    //   {/* <Student name="NO" roll = "68" branch = "CS" pic = {<img src ={logo} height ={100} widht ={120}/>}></Student> */}
    //   {/* <Student  roll = "69" branch = "CS" pic = {<img src ={logo} height ={100} widht ={120}/>}></Student> */}
    //   <Student data={studentdata[0]}/>
    //   <Student data={studentdata[1]}/>
    //   <Student data={studentdata[2]}/>
    //   <Student data={studentdata[3]}/>
    // </div>
    <StudentState/>

    // <div> ABES Engineering College </div>
    // <div style = mystyle></div>
  )
}


export default App