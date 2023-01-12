import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Todo from './features/todos/Todo';
import Movie from './features/movies/Movie';
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import MovieDetail from './features/movies/MovieDetail';
import Navbar from './app/Navbar';

function App() {
  return (
    <div>
      {/* <Counter />
        <Todo /> */}
      <Router>
        <Navbar/>
        <Routes>
       <Route exact path='/' element={<Movie/>}/>
        
      
          {/* Can also use a named `children` prop */}
          {/* <Route path="/users/:id" children={<User />} /> */}
          <Route path="/movie/:imdbID" element={<MovieDetail/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
