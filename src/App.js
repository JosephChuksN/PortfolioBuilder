import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Appbar from './components/Appbar'
import Profile from './components/Profile'
import About from './components/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Settings from './components/Settings/Settings'
import { ThemeProvider } from './Context/ThemeContext'
import { AppProvider } from './Context/Context';
import Background from './components/Background'
import { AboutTxt, EducationData } from './TestData'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';



function App() {

  const [aboutText, setAboutText] = useState(AboutTxt)
  const [educationData, setEducationData] = useState(EducationData)



  return (
    <ThemeProvider>
    <AppProvider>
      <Background>
      
    <Router>
    <div className='lg:flex  '>
      
    <Sidebar />
    
    <div className='lg:w-[80%] lg:ml-[307px]'>
     <Appbar />
     
    <main className=' z-10'>
    <Routes>

    <Route 
     exact path='/'  
     element={
     <Profile 
     aboutText={aboutText} 
     educationData={educationData}
     
    />} />

    <Route 
     exact path='/About' 
     element={
     <About 
     aboutText={aboutText} 
     setAboutText={setAboutText} 

    />} />

    <Route 
     exact path='/Education' 
     element={
     <Education 
     educationData={educationData}
     setEducationData={setEducationData}

     />} />

    <Route exact path='/experience' element={<Experience />} />
    <Route exact path='/settings' element={<Settings />} />
    </Routes>
    </main>
   
    </div>
    
  </div>
  </Router>
  </Background>
  </AppProvider>
  </ThemeProvider>
  
  );
}

export default App;
