import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Casenote from './Casenote'
import CasenoteForm from './CasenoteForm'
import Home from './Home'
import Journal from './Journal'
import Header from './Header'
import Footer from './Footer'
import JournalForm from './JournalForm'
import Loginsignup from './SignUpLogin'
import { useDispatch, useSelector } from 'react-redux';
import CasenoteChild from './CasenoteChild';


function App() {
  const { status, error } = useSelector((state) => state.auth);
  
  return (
    // main app styling
    <main>
      <BrowserRouter>
      {
        status === 'succeeded' ? <Header /> : ""
      }
        <Routes>
          <Route path="/" element={<Loginsignup/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/journal" element={<Journal />}/>
          <Route path="/casenotechild/:id"  element={<CasenoteChild/>}/>
          <Route path="/casenote" element={<Casenote />}/>
          <Route path="/journalform" element={<JournalForm />}/>
          <Route path="/casenoteform/:id/:user" element={<CasenoteForm />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
  )
}

export default App