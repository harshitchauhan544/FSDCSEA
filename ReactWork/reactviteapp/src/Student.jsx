import React from "react";
import "./Student.css"
function Student(props){
    // console.log(props.data.pic);
    
    return (
        <div className ='icard'>
            {/* {
                JSON.stringify(props.data)
            } */}
            <table>
                <tbody>

                    <tr>
                        <td colSpan='2'>{props.data.college}</td>
                    </tr>
                    <tr>
                        <td colSpan='2' ><img src={props.data.pic} height = "100" width="150" /></td>
                    </tr>
                    <tr>
                        <td>Name</td><td>{props.data.name}</td>
                    </tr>
                    <tr>
                        <td>Roll no</td><td>{props.data.roll}</td>
                    </tr>
                    <tr>
                        <td>Branch</td><td>{props.data.branch}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Student.defaultProps={
    name :"Jaadu",

}

export default Student