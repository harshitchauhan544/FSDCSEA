import React from "react";
import './Student.css'
function Student(props){
    return (
        <div className = 'icard'>
            <table>
                <tbody>
                    <tr>
                        <th>Roll No.</th><th>Name</th><th>Branch</th>
                    </tr>
                    <tr>
                        <td>01</td><td>{props.name}</td><td>Cse</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Student