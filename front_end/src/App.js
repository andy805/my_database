import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";

import {ButtonAppBar} from './components/Navigation';

function App() {
  return (
    <div>
      <h1> HELLO WORLD!</h1>
      <ButtonAppBar></ButtonAppBar>


      <Routes>
        <Route path="interviewQuestions" element={<h1>InterviewQuestions</h1>}>
        </Route>

        <Route path="/" element={<h1>HOME</h1>}> 
        </Route>
    </Routes>
  </div>

  );
}

export default App;
