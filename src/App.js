import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'aaa', name: 'Max', age: 28 },
      {id: 'bbb', name: 'Manu', age: 29 },
      {id: 'ccc', name: 'Steph', age: 26 },    
    ],
    showPersons: false
  }

nameChangeHandler = (event , id) => {
  // findIndex gets index, find gets object
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id
  })
  // Guide - created a person, then altered it
  // const person = {
  //   ...this.state.persons[personIndex]
  // }
  // person.name = event.target.value

  // copy of persons - state data should be imutable
  const persons = [...this.state.persons]
  
  //persons[personIndex] = person

  persons[personIndex].name = event.target.value
  this.setState( {persions : persons })
}

deletePersonHandler = (personIndex) => {
  const persons = [...this.state.persons]
  persons.splice(personIndex,1)
  this.setState({persons : persons})
}

togglePersonHandler = () => {
  const doesShow = this.state.showPersons
  this.setState({showPersons : !doesShow})
}
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }; 

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person,index) => {
          return <Person 
            name={person.name} 
            age={person.age}
            click={() => this.deletePersonHandler(index)} 
            key={person.id}
            changed={(event) => this.nameChangeHandler(event,person.id)}/>
        })}
        </div>
      )
    }

    return (
       <div className="App">
         <h1>Hi, I am a React App</h1>
         <p>This is working</p> 
         <button 
         style={style}
         onClick={this.togglePersonHandler}>Toggle Persons</button>
         {persons}
      </div>
    )
  }
}

export default App;
