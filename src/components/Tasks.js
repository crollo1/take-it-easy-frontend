
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

let BASE_BACKEND_URL = 'http://localhost:3000';

function Tasks() {

    // // render task results on page
    // const [allTasks, setAllTasks] = useState([]);
    // // const navigatePush = useNavigate();
    
    // useEffect(() => {

    //     const tasks = axios.get(`${BASE_BACKEND_URL}/tasks`,{ "name": name, "date": date, "summaryDescription": summaryDescription, "fullDescription": fullDescription, "location": location })
    //     .then(res => {

    //         tasks = res.data // save the array of results into state

    //     })
    //     .catch( err => {



    //     })

    // }, [] )

    return (

        <div className="tasks">
            <h2>Browse Tasks</h2>
            <div className="searchbar">
            <input type="text" />
            {' '}{' '}
            <button>Search</button>
        </div>
        </div>

    );

}; // Tasks

export default Tasks;