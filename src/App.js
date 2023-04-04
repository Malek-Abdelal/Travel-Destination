import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import TourDetails from './components/tourDetails/TourDetails';
const data = require('./data/data.json');


function App() {

  return (
    <div>
    <Routes>
      <Route path = '/' element = {<Home data = {data}/>}/>
      <Route path = '/city/:id' element = {<TourDetails/>}/>
    </Routes>
    </div>
  );
}

export default App;
