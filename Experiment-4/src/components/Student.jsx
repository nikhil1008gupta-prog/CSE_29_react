

import React from 'react';


function Student(props) {
  return (
    <div className="student-card">
      <h3>Student Details</h3>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>Marks:</strong> {props.marks}</p>
    </div>
  );
}

export default Student;