import React from "react";

function Student({name, age}) {
    return (
            <div>
                <h1> {name} </h1>
                <br />
                <h3>Age: {age}</h3>
            </div>
            )
        }

export default Student;