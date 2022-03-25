import React, {useState} from 'react';
import '../index.css';


export function Education(props) {


    const form = props.education.map((form, index) => (
       
            <li key={index}>
            <h2>Education {index + 1}</h2>
            <label htmlFor="school">University Name: </label>
            <input 
                value={props.education[index].school} 
                name='school' 
                id='school' 
                placeholder='University Name' 
                onChange={(e)=> props.onChange(index, e)}
                />
            <br/>
            <label htmlFor="degree">Degree: </label>
            <input 
                value={props.education[index].degree} 
                name='degree' 
                id='degree' 
                placeholder='Degree' 
                onChange={(e)=> props.onChange(index, e)}
                />
            <br/>
            <label htmlFor="start">Start Date: </label>
            <input 
                type='date'
                value={props.education[index].start} 
                name='start' 
                id='start' 
                onChange={(e)=> props.onChange(index, e)}
                />
            <br/>
            <label htmlFor="end">End Date: </label>
            <input 
                type='date'
                value={props.education[index].end} 
                name='end' 
                id='end' 
                onChange={(e)=> props.onChange(index, e)}
                /><br />
            <button onClick={props.addMoreEd}>Add More Education</button>
            </li>

        ));

    let completedForm = (
                    <ul>
                        {form}
                    </ul>
    )

    return completedForm;
}