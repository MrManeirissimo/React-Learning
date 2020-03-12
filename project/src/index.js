import React from 'react';
import ReactDOM from 'react-dom';

// Importation example
import Header from '../src/components/header'

// Turning function component into component class
// Remember the class must be evaluated as an element
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    //The componentDidMount() method runs after the component output has been rendered
    // to the DOM. This is a good place to set up a timer:
    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return(
            <div>
                <Header/>
                <h1>What time is it?</h1>
                <h2>It is: {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }
}

// Render step. Direct render-to-component link
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);