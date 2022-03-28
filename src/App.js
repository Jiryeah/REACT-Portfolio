import React, { useState } from 'react';
import About from './components/About';
import ContactModal from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css';

function App() {
  const [pageSelected, setPageSelected] = useState(false);
  const [pages] = useState([
    {
      name: 'About Me',
      description: 'A little about me.',
    },
    {
      name: 'Resume',
      description: 'Some milestones and information regarding my ability and competence.',
    },
    {
      name: 'Portfolio',
      description: 'My projects',
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className='App'>
      <Nav>
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      </Nav>
      <main>
        {!pageSelected ? (
          <>
            <About></About>
            <Footer></Footer>
          </>
        ) : (
          <ContactModal></ContactModal>
        )}
      </main>
    </div>
  );
}

export default App;
