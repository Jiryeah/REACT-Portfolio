import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ProjectList from './components/ProjectList';
import logo from './logo.svg';
import './App.css';

function App() {
  const [pageSelected, setPageSelected] = useState(pages[0]);
  const [pages] = useState([
    {
      name: 'Resume',
      description: 'Some milestones and information regarding my ability and competence.',
    },
    {
      name: 'Portfolio',
      description: 'My projects'
    }
  ])

  const [currentPage]

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
