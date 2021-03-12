import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Contacts from './components/Contacts';
import PostForm from './components/Postform';
import ContactView from "./components/view-contact";

import store from './store';

 
class App extends Component {
  a(){
    alert('login');
  }
  render() {
    return (
      <Provider store={store}>
        
        <div className="App">
          <div className="App-inner">
           
            <Contacts />
            
            <PostForm className='postForm'/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
