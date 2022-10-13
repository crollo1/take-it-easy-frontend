
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

let BASE_BACKEND_URL = 'http://localhost:3000';

if( process.env.NODE_ENV === 'development'){
    BASE_BACKEND_URL = 'http://localhost:3000';
} else {
    BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com/';
}


function EditTask(){

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState(0.00);
    const [location, setLocation] = useState('');
    const [area, setArea] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');

    const [task, setTask] = useState();
    const navigatePush = useNavigate(); 


    const params = useParams();

    useEffect( () => {

        async function fetchTasks(){
            try {

                const res = await axios.get( `${BASE_BACKEND_URL}/tasks/${params.id}` )
                setTask(res.data);

            } catch( err ){

                console.error('error fetching task', err);
                // setError(err)

            }
        }
        fetchTasks();

    }, [params.id] ); 


    const handleSubmit = (ev) => {

        ev.preventDefault();
        console.log('Edit task:', name, date);

        axios.post(`${BASE_BACKEND_URL}/tasks/:id`,
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

    }

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
        <div>
            <h2>Edit your task</h2>

            {task !== undefined ? 
                <form className='postTask' onSubmit={handleSubmit} >

                <div>
                <input className="posttaskinput" onChange={handleInput}
                name="name"
                type="name"
                required
                value={task.name}
                />
                </div>
                <DatePicker
                className="datePicker"
                dateFormat="yyyy-MM-dd"
                selected={date}
                // placeholderText="Select date"
                value={task.startDate}
                // onSelect={setDate} //when day is clicked
                onChange={(date => setDate(date))} //only when value has changed
                />
                <div>
                <input className="posttaskinput" onChange={handleInput}
                name="address"
                type="text"
                required
                value={task.address}
                />
                </div>
                <div>
                <input className="posttaskinput" onChange={handleInput}
                name="location"
                type="name"
                required
                value={task.location}
                />
                </div>
                <div>
                <input className="posttaskinput" onChange={handleInput}
                name="area"
                type="text"
                value={task.area}
                />
                </div>
                <div>
                <input className="posttaskinput" onChange={handleInput}
                name="price"
                type="number"
                value={task.price}
                />
                </div>
                <div>
                <textarea rows="4" cols="23" className="posttaskinput" onChange={handleInput}
                name="fullDescription"
                type="textarea"
                value={task.fullDescription}
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
            : <h2>Error loading form</h2>
            }

        </div>
    )// return
} // EditTask

export default EditTask;