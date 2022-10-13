
import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

let BASE_BACKEND_URL = 'http://localhost:3000';

if( process.env.NODE_ENV === 'development'){
    BASE_BACKEND_URL = 'http://localhost:3000';
} else {
    BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com';
}


function PostTask( props ) {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState(0.00);
    const [location, setLocation] = useState('');
    const [area, setArea] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');

    const navigatePush = useNavigate(); 


    const handleSubmit = (ev) => {

        ev.preventDefault();
        console.log('Post task:', name, date);

        axios.post(`${BASE_BACKEND_URL}/postTask`,
        { 
            "name": name, 
            "startDate": date,
            "fullDescription": description,
            "price": price,
            "location": location,
            "area": area,
            "address": address,
            // "postedBy": props.currentUser._id
        })
        .then(res => {

            localStorage.setItem("jwt", res.data.token);
            // props.fetchUser();
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

            case 'price':
                // setState({email: ev.target.value})
                setPrice(ev.target.value)
                break;

            case 'location':
                // setState({email: ev.target.value})
                setLocation(ev.target.value)
                break;

            case 'area':
                // setState({email: ev.target.value})
                setArea(ev.target.value)
                break;

            case 'fullDescription':
                // setState({email: ev.target.value})
                setDescription(ev.target.value)
                break; 
                
            case 'address':
                setAddress(ev.target.value)
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
                required
                placeholder='e.g. Help me move my fridge'
                />
                </div>
                <DatePicker
                className="datePicker"
                dateFormat="yyyy-MM-dd"
                selected={date}
                placeholderText="Select date"
                // onSelect={setDate} //when day is clicked
                onChange={(date => setDate(date))} //only when value has changed
                />
                <div>
                <input className="posttaskinput" onChange={handleInput}
                name="address"
                type="text"
                required
                placeholder='Address'
                />
                </div>
                <div>
                <input className="posttaskinput" onChange={handleInput}
                name="location"
                type="name"
                required
                placeholder='Location'
                />
                </div>
                <div>
                <input className="posttaskinput" onChange={handleInput}
                name="area"
                type="text"
                placeholder='Area'
                />
                </div>
                <div>
                <input className="posttaskinput" onChange={handleInput}
                name="price"
                type="number"
                placeholder='Price'
                />
                </div>
                <div>
                <textarea rows="4" cols="23" className="posttaskinput" onChange={handleInput}
                name="fullDescription"
                type="textarea"
                placeholder='Task description'
                />
                </div>
                
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