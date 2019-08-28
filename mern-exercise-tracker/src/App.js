import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercises} />
      <Route path="/create" component={CreateExercises} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
