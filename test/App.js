import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    input: 'Hello'
  }

  updateinput = (event) => {
    this.setState({
      input: event.target.value.trim()
    })
  }

  submit = () => {
    console.log(this.text.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to React Using Pops" />
        </header>
        <p className="App-intro" ref= { (input) => this.email = input }>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{this.state.input}</h1>
        <input type="text" onChange={this.updateinput} value= {this.state.input}/>    
        <input type="text" ref= { (input) => this.text = input }/>    
        <button onClick={this.submit}>Show Values</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;
    return(
      <h1 className="App-title">{ text }</h1>
    );
  }
}

export default App;
