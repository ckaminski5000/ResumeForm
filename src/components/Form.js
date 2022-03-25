import React, {useState} from 'react';
import { BegForm } from './begForm';
import {Education} from './educationForm';
import { Jobs } from './jobForm';
import {Confirmation} from './confirmation';
import '../index.css';



export const Form = props => {
    const [basicInfo, setBasic] = useState({firstName: '',
                                            lastName: '',
                                            phone: '',
                                            email: ''});
    const[education, setEducation] = useState([{
                                                school: '',
                                                degree: '',
                                                start: '',
                                                end: ''
                                                }]);
    const[jobs, setJobs] = useState([{company: '',
                                      jobTitle: '',
                                      responsibilities: '',
                                      start: '',
                                      end: ''
                                        }])
    const[confirmation, setConfirmation] = useState(true);

    const handleChangeBasic = (e) => {
        setBasic({...basicInfo, [e.target.name]: e.target.value});
    }
    const handleChangeEducation = (index, e) => {
        let educationArray = [...education];
        let updatedValue = e.target.name;
        educationArray[index][updatedValue] = e.target.value;
        setEducation(educationArray);
    }
    const handleChangeJobs = (index, e) => {
        let jobsArray = [...jobs];
        let updatedValue = e.target.name;
        jobsArray[index][updatedValue] = e.target.value;
        setJobs(jobsArray);
    }
    const addEducationForm = (e) => {
        const newEducation = [...education];
        newEducation.push({
                            school: '',
                            degree: '',
                            start: '',
                            end: ''
                            })
        setEducation(newEducation);
    }
    const addMoreJobs = (e) => {
        const jobsArray = [...jobs];
        jobsArray.push({company: '',
                        jobTitle: '',
                        responsibilities: '',
                        start: '',
                        end: ''
                        });
        setJobs(jobsArray);
    }

    const showConfirmation = (e) => {
        setConfirmation(true);
    }

    const showForm = (e) => {
        setConfirmation(false);
    }

    const submitChange = (e) => {
        e.preventDefault();
        console.log(basicInfo);
    }


    const mainForm = (
        <form onSubmit={submitChange}>
                <h1>Enter your Resume information below:</h1>

            <BegForm 
                basicInfo={basicInfo}
                handleChange={handleChangeBasic}           
                />
            <Education
            education={education}
            addMoreEd={addEducationForm}
            onChange={handleChangeEducation}
            />
            <Jobs 
            jobs={jobs}
            onChange={handleChangeJobs}
            addMoreJobs={addMoreJobs}
            /><br />
           <button type='submit'onClick={showConfirmation}>Save and Continue</button> 
        </form>

    );

    const confirmationPage = <Confirmation 
                          education={education}
                          basicInfo={basicInfo}
                          jobs={jobs}
                          showForm={showForm}
                          />
    
   

    return (
        <div>
            {confirmation ? confirmationPage :mainForm}
        </div>

        );
}