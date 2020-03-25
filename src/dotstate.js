import React, { Component } from 'react';

class  Message extends Component{
    constructor(){
        super();
        this.state = {
              Message: 'Welcome Visitors',
            Button: 'Click Me!'
        }
        this.changeState = this.changeState.bind(this)
    }
    changeState(){
        let message = this.state.Message;
        let stat = this.state.Button;
     if(message === 'Welcome Visitors'){
         message = this.props.message;
         stat = 'Unclick Me!'
     }
    else{
        message = 'Welcome Visitors';
        stat = 'click Me!'
    } 
    this.setState({
            Message: this.props.message,
            Button: stat
        })
    }

    render(){
        return(
            <div>
 <h2>{this.state.Message}</h2>
 <button onClick = {this.changeState}>{this.state.Button}!</button>
            </div>
           
        )
    }
}
export default Message 