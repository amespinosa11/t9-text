import React from 'react';
import './App.css';
const axios = require('axios');

var nums;

class App extends React.Component {

    

    constructor(props) {
        super(props);
        this.state = ({
            text: [],
        });
    }

    getText(event) {
        let data = [];
        console.log(event);
        if ( nums === undefined ){
            nums =event;
        } else {
            nums = nums + ',' + event;
        }
        // Make a request for a user with a given ID
        axios.get(`http://localhost:15000/api?nums=${nums}`)
            .then( (response) => {
                // handle success
                data = response.data;
                this.setState({ text: data });
            })
            .catch( (error) => {
                // handle error
                console.log(error);
            })
            .finally( () => {
                // always executed
            });
    }

    render() {
        return ( <div className = "container w-100 h-100" >
            <div className = "mt-5" >
            <div className = "row" >
            <div className = "col" > </div> 
            <div className = "col-6" >
            <div className = "row mt-5" >
            <textarea className = "form-control" value = {this.state.text} readOnly > </textarea>
            </div> 
            <div className = "row mt-3" >
            <div className = "btn-group btn-group-lg w-100" role = "group" >
            <button type = "button" className = "btn btn-info btn-block" disabled > 1 </button> 
            <button onClick ={() => this.getText(2)} type = "button" className = "btn btn-info btn-block" > 2 </button>
            <button onClick ={() => this.getText(3)} type = "button" className = "btn btn-info btn-block" >3 </button>
            </div> </div> <div className = "row my-1" >
            <div className = "btn-group btn-group-lg w-100" role = "group" >
            <button onClick = {() => this.getText(4)} type = "button" className = "btn btn-info" > 4 </button> 
            <button onClick = {() => this.getText(5)} type = "button" className = "btn btn-info" > 5 </button> 
            <button onClick = {() => this.getText(6)} type = "button" className = "btn btn-info" > 6 </button> 
            </div> 
            </div> 
            <div className = "row my-1" >
            <div className = "btn-group btn-group-lg w-100" role = "group" >
            <button onClick = {() => this.getText(7)} type = "button"className = "btn btn-info" > 7 </button> 
            <button onClick = {() => this.getText(8)} type = "button" className = "btn btn-info" > 8 </button>
            <button onClick = {() => this.getText(9)} type = "button"
            className = "btn btn-info" >9 </button> </div> 
            </div> 
            </div> 
            <div className = "col" > </div> 
            </div> 
            </div> 
            </div >
        );
    }
}

export default App;