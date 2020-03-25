import React, {Component, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionClick from './FunctionClick'
import Greet from './Greet';
import Message from './dotstate'
import Welcome from './Welcome';
import UserGreeting from './UserGreeting'
import ClassClick from './classClick';
import NameList from './NameList';
import Stylesheet from './stylesheet'
import Inlinestyle from './Inlinestyle';
import Form from './Form'
import User from './User'
import LifeCycle from './LifeCycle'
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import HoverCounterTwo from './HoverCounterTwo'
import ClickCounterTwo from './ClickCounterTwo';
import Counter from './Counter';
import { UserProvider } from './ContextDemo';
import PostList from './PostList'
import PostForm1 from './PostForm'

//import { render } from '@testing-library/react';

class App extends Component{
  alarm(){
    alert("this is an alert");
}
    render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <PostList/> */}
          <PostForm1/>
         {/* <ClickCounterTwo/>
         
         <HoverCounterTwo/> */}
         {/* <Counter render ={(count, incrementCount)=> (
         <ClickCounterTwo count={count} incrementCount={incrementCount}/>)}
         />
          <Counter render ={(count, incrementCount)=> (
         <HoverCounterTwo count={count} incrementCount={incrementCount}/>)}
         />
         <UserProvider value = 'JOEL'>
             <User  />
         </UserProvider> */}
         {/* <ClickCounter name = 'Joel'/> /> */}
          {/* <HoverCounter name = 'Joel'/>  */}
          {/* <Greet name = "Peter" sex="MALE"/>
          <Greet name = "MARY" sex="FEMALE"/>
            <Welcome name="JOSEPH" >MY FRIENDS</Welcome>
          <Welcome onclick = {this.alarm}>MY BEST FRIEND</Welcome>
          <Message />
          <p>HELLO WORLD!</p>
          <Message message = "This is a message" /> */}
          {/* <FunctionClick/> */}
          {/* <ClassClick /> */}
          {/* <UserGreeting /> */}
          {/* <NameList/> */}
          {/* <Stylesheet primary = {true}/> */}
          {/* <Inlinestyle/> */}
          {/* <LifeCycle/> */}
          {/* <Form/> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           {/* Learn React */}
          </a>
        </header>
        <greet/>
      </div>
    );
  }

}

export default App;
