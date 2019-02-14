import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contactlist from './Components/Contactlist'
import Expandedview from "./Components/Expandedview";
class App extends Component {

    constructor(){
        super();
        this.state = {name:"vcv",Contact:"vvv", email:"vvv", profile:"https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg"};
        this.debug = 1;
    };
    oncardclick = (propers) => {
        if(this.debug)
        console.log(propers);
        this.state.name = propers.name;
        this.state.Contact = propers.number;
        this.state.email = propers.email;
        if(this.debug) {
            console.log("------------------State Values-----------------");
            console.log(this.state.name);
            console.log(this.state.Contact);
            console.log(this.state.email);
            console.log(this.state.profile);
        }

    };
    render() {
      return (
        <div>
            <div className="header">
                <header>Contacts</header>
            </div>
            <div className="app">
                <Contactlist oncardclicked={this.oncardclick}/>
                <Expandedview name={this.state.name} contact={this.state.Contact} email={this.state.email} profile={this.state.profile}/>
            </div>
        </div>
      );
    };
}

export default App;
