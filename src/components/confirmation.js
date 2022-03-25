import React, {useState} from 'react';
import '../index.css'



export function Confirmation(props) {

    const confirmation = (
       <div> 
        <ul className='align'>
            <li key="1"><b>First Name:</b> {props.basicInfo.firstName}</li>
            <li key="2"><b>Last Name:</b> {props.basicInfo.lastName}</li>
            <li key="3"><b>Phone Number:</b> {props.basicInfo.phone}</li>
            <li key="4"><b>Email:</b> {props.basicInfo.email}</li>
            {props.education.map((item, index) => (
                <li key={index + 4}>
                <b>School:</b> {props.education[index].school}<br />
                <b>Degree:</b> {props.education[index].degree}<br />
                <b>Start Date:</b> {props.education[index].start}<br />
                <b>End Date:</b> {props.education[index].end}
                </li>
            ))}
            {props.jobs.map((item, index) => (
                <li key={index + 20}>
            <b>Company:</b> {props.jobs[index].company}<br />
                <b>Job Title:</b> {props.jobs[index].jobTitle}<br />
                <b>Responsibilities</b>: {props.jobs[index].responsibilities} <br />  
                <b>Start Date:</b> {props.jobs[index].start}<br />
                <b>End Date: </b>{props.jobs[index].end}
                </li>
            ))}

        </ul>
        <button onClick={props.showForm}>Go Back</button>
        </div>

    );

    return confirmation;
}