import React from 'react';
import './app.scss';
import About from './components/about/About';
import Contact from './components/contacts/Contact';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <>
		<Sidebar/>
    <main className='main'>
			<Home/>
			<About/>
			<Services/>
			<Resume/>
			<Contact/>
    </main>
		</>
  )
}

export default App;
