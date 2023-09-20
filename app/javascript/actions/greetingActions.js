// app/javascript/actions/greetingActions.js

export const fetchGreeting = () => {
    return dispatch => {
        fetch("/messages/random")
            .then(response => response.json())
            .then(data => dispatch({ type: "FETCH_GREETING", payload: data.greeting }))
            .catch(error => console.log(error));
    };
};
