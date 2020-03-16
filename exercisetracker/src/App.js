import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import ExerciseList from './component/ExerciseList/ExerciseList'
import EditExercise from './component/EditExercise/EditExercise'
import CreateExercise from './component/CreateExercise/CreateExercise'
import CreateUser from './component/CreateUser/CreateUser'
function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <br/>
     <Route path='/' exact component={ExerciseList}/>
     <Route path='/edit/:id' exact component={EditExercise}/>
     <Route path='/create' exact component={CreateExercise}/>
     <Route path='/user' exact component={CreateUser}/>
    </div>
    </Router>
    
  );
}

export default App;
