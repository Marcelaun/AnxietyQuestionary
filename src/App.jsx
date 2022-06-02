import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import { QuestionForm } from './components/QuestionForm/QuestionForm';
import { RespondingThanks } from './components/RespondingThanks/RespondingThanks';



function App() {

  return (
   <>
   <Routes>
     <Route path='/' element={<QuestionForm/>} />
     <Route path='/Thanks' element={<RespondingThanks/>} />
   </Routes>
   </>
  )
}

export default App
