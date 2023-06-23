import ironhackersImg from "./assets/ironhackers.avif"
import {Route, Routes, NavLink} from 'react-router-dom';
import ApartmentDetails from './components/ApartmentDetails';
import ApartmentList from './components/ApartmentList';
import CreateApartment from './components/CreateApartment';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import {useEffect, useState} from 'react';
import axios from 'axios';

import './App.css';

function App() {

  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    getApartmentsFromApi();
  },[]);

const getApartmentsFromApi = () => {
  console.log("sending request to get list of apartments")
  axios.get(`${process.env.REACT_APP_BASE_URL}/apartments`)
  .then(response => {
    console.log(response.data)
    setApartments(response.data);
  })
  .catch(e => console.log(e))
  };


  return (
    <div className="App">
    
    <h1>Welcome</h1>

      <NavBar>
        <NavLink to="/">Home</NavLink><br/>
        <NavLink to="/apartments">ApartmentList</NavLink><br/>
        <NavLink to="/apartments/create">CreateApartment</NavLink><br/>
        <NavLink to="/apartments/:apartmentId">ApartmentDetails</NavLink><br/>
      </NavBar>
       
      <img src={ironhackersImg} alt="ironhackers" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentList apartments={apartments} />} />
        <Route path="/apartments/create" element={<CreateApartment />} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails />} />
      </Routes>
    </div>
  );
};

export default App;
