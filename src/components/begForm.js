import React, {useState} from 'react';


export const BegForm = props => {


    const form = (
       <div>
           <label htmlFor="firstName">First Name: </label>
            <input 
                value={props.basicInfo.firstName} 
                name='firstName' 
                id='firstName' 
                placeholder='First Name' 
                onChange={props.handleChange}
                />
            <br/>
            <label htmlFor="lastName">Last Name: </label>
            <input 
                value={props.basicInfo.lastName} 
                name='lastName' 
                id='lastName' 
                placeholder='Last Name' 
                onChange={props.handleChange}
                />
            <br/>
            <label htmlFor="phone">Phone Number: </label>
            <input 
                value={props.basicInfo.phone} 
                name='phone' 
                id='phone' 
                placeholder='Phone Number' 
                onChange={props.handleChange}

                />
            <br/>
            <label htmlFor="email">Email Address: </label>
            <input 
                value={props.basicInfo.email} 
                name='email' 
                id='email' 
                placeholder='Email' 
                onChange={props.handleChange}

                />
        </div>
    )

    return form;
}