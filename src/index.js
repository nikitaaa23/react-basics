// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM  from 'react-dom';


// Create a react component

const App = () => {
    const buttonText = {text:  "Click me!"};
    return (
    <div>
        <label class = "label" for = "name"> Enter Name: </label>
        <input id ="name" type = "text" />
        <button style = {{backgroundColor: 'blue'}} > {buttonText.text} </button>
    </div> 
    ); 
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'));
 