import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/ChildrenProps/Heading';
import { Oscar } from './components/ChildrenProps/Oscar'

function App() {
  const personName = {
    firstName: 'Janaki',
    lastName: 'Vundavalli'
  }
  const nameList = [
    {
      firstName: 'Virat',
      lastName: 'Kohli'
    },
    {
      firstName: 'Shubman',
      lastName: 'Gill'
    },
    {
      firstName: 'Rohit',
      lastName: 'Sharma'
    },
    {
      firstName: 'Sachin',
      lastName: 'Tendulkar'
    }
  ]
  return (
    <div className="App">
      <Greet name='Ram Vundavalli' messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status message='success' />
      <Oscar>
        <Heading>Oscar goes to Robert Downey Jr.</Heading>
      </Oscar>
    </div>
  );
}

export default App;
