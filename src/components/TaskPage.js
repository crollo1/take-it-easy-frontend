
// Use similar set up to create/post (and then work on delete!)

// 'placeholder' in form will probably be 'value'

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom';

let BASE_BACKEND_URL = 'http://localhost:3000';

if( process.env.NODE_ENV === 'development'){
    BASE_BACKEND_URL = 'http://localhost:3000';
} else {
    BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com';
}

function TaskPage( props ) {

    const params = useParams();

    const [task, setTask] = useState();
    // const [error, setError] = useState( null );


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


    return (

        <div>
            {task !== undefined ? 
            <div className='userTaskDetails'>
                <h4><strong>Name:</strong> {task.name}</h4>
                <p><strong>Date: </strong>{task.startDate}</p>
                <p><strong>Location: </strong>{task.location}</p>
                <p><strong>Area:</strong> {task.area}</p>
                <p><strong>Description:</strong> {task.fullDescription}</p>
                <p><strong>Price:</strong> ${task.price}</p>
                <button>Make an offer</button>
                <button><Link to={`/tasks/${params.id}/edit`}>Edit Task</Link></button>
            </div> 
            : <h2>loading task...</h2>
            } 
        </div>

    ); // return

}; 

export default TaskPage;