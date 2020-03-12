import React from 'react'
import Header from '../header'

// Turning function component into component class
// Remember the class must be evaluated as an element
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    //The componentDidMount() method runs after the component output has been rendered
    // to the DOM (first time being displayed). This is a good place to set up a timer:
    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    // Mandatory component method
    render(){
        return(
            <div>
                <Header/>
                <h1>What time is it?</h1>
                <h2>It is: {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    // Loop auxiliar method
    tick(){
        this.setState({
            date: new Date()
        })
    }
}

export default Clock
