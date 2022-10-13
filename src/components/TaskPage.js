
// Use similar set up to create/post (and then work on delete!)

// 'placeholder' in form will probably be 'value'

// import axios from 'axios';
// import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom';

let BASE_BACKEND_URL = 'http://localhost:3000';

if( process.env.NODE_ENV === 'development'){
    BASE_BACKEND_URL = 'http://localhost:3000';
} else {
    BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com/';
}
// let BASE_BACKEND_URL = 'https://take-it-easy-express.herokuapp.com/';

function TaskPage( props ) {





    return (

        <div>
            <button>Edit Task</button>
        </div>

    ); // return

}; 

export default TaskPage;