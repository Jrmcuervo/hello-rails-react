// app/javascript/components/Greeting.js

import React from 'react';

function Greeting(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>
        </div>
    );
}

export default Greeting;
