import './AddProject.css';
import React from 'react'
// import './AddProject.css'

const AddProject = ({onClick}) => {
    return(
        <button className="add-project-btn" onClick = {onClick}>
         + Add project 
         </button>
    );
};
export default AddProject;