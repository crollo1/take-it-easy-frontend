
import Home from "./Home";
import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

let BASE_BACKEND_URL = 'http://localhost:3000';

function PostTask( props ) {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const navigatePush = useNavigate();  

    const handleSubmit = (ev) => {

        ev.preventDefault();
        console.log('Post task:', name, date);

        axios.post(`${BASE_BACKEND_URL}/postTask`,{ "name": name, "date": date })
        .then(res => {

            localStorage.setItem("jwt", res.data.token);
            props.fetchUser();
            navigatePush('/tasks');

        })
        .catch( err => {

            console.error('Error submitting data', err);

        })
    
    }; // handleSubmit

    const handleInput = (ev) => {

        console.log('input changing', ev.target.name);

        switch(ev.target.name){

            case 'name':
                // setState({name: ev.target.value})
                setName(ev.target.value)
                break;

            case 'date':
                // setState({email: ev.target.value})
                setDate(ev.target.value)
                break;
            
            default: console.log('please try again');
            // TODO: change default to error message
    
        }

    }; // handleInput

    return (

        <div className="postTask">
            <h2>Post Task</h2>
            <p className="posttasktext">In a few words, what do you need done?</p>
            <form className="posttaskform" onSubmit={handleSubmit} >

                <div>
                <input className="posttaskinput" onChange={handleInput}
                name="name"
                type="name"
                placeholder='e.g. Help me move my fridge'
                />
                </div>
                <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={date}
                // onSelect={setDate} //when day is clicked
                onChange={(date => setDate(date))} //only when value has changed
                />
                {/* <div> */}
                {/* <input className="posttaskinput"
                onChange={date => console.log(date)}
                type="date"
                />
                </div> */}
                <div className="posttaskbutton">
                {/* <button>On date</button> */}
                <button>Submit Task</button>
                {/* <button>I'm Flexible</button> */}
                </div>
            </form>
        </div>

    );


}; // PostTask

export default PostTask;