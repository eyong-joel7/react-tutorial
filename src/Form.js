import React, { Component } from 'react'


class Form extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            comment: '',
            topic: ''
        }
    }
    handleUsernameChange = event=>{
        this.setState({
            username: event.target.value
        
        })
    }
    handleCommentChange = (event)=>{
        this.setState({
            comment: event.target.value
        })
    }
    handleTopicChange = event=>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event)=>{
        alert(`${this.state.username} ${this.state.topic} ${this.state.comment} `)
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                 <div>
                      <label>Username: </label>
                      <input type="text" value={this.state.username} onChange = {this.handleUsernameChange}/>
                </div>
                <br/>
                <div>
                    <label>Comment</label>
                    <textarea value={this.state.comment} onChange = {this.handleCommentChange}/>>
                </div>

                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>
                        Submit
                    </button>
                </div>
            </form>

            
        )
    }
}
export default Form