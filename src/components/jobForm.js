import React, {useState} from 'react';
import '../index.css';


export function Jobs(props) {


    const form = props.jobs.map((form, index) => (
       
            <li key={index}>
            <h2>Work Experience {index + 1}</h2>
            <label htmlFor="company">University Name: </label>
            <input 
                value={props.jobs[index].company} 
                name='company' 
                id='company' 
                placeholder='University Name' 
                onChange={(e)=> props.onChange(index, e)}
                />
            <br/>
            <label htmlFor="jobTitle">Job Title: </label>
            <input 
                value={props.jobs[index].jobTitle} 
                name='jobTitle' 
                id='jobTitle' 
                placeholder='Job Title' 
                onChange={(e)=> props.onChange(index, e)}
                />
            <br/>
            <p>
            <label htmlFor="responsibilities">Responsibilities: </label>
            <textarea 
                value={props.jobs[index].responsibilities} 
                name='responsibilities' 
                id='responsibilities'
                rows="10" 
                cols="30" 
                onChange={(e)=> props.onChange(index, e)}
                />
            </p>
            <label htmlFor="start">Start Date: </label>
            <input 
                type='date'
                value={props.jobs[index].start} 
                name='start' 
                id='start' 
                onChange={(e)=> props.onChange(index, e)}
                />
            <br/>
            <label htmlFor="end">End Date: </label>
            <input 
                type='date'
                value={props.jobs[index].end} 
                name='end' 
                id='end' 
                onChange={(e)=> props.onChange(index, e)}
                /><br />
            <button onClick={props.addMoreJobs}>Add More Jobs</button>
            </li>

        ));

    let completedForm = (
                    <ul>
                        {form}
                    </ul>
    )

    return completedForm;
}