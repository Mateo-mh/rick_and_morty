import './App.css';
import Cards from './components/Cards/Cards.jsx'
import style from "./App.css";
import Nav from './components/Nav/navBar.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/Routing/About.jsx'
import Detail from './components/Routing/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx'

function App() {
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();


   const navigate = useNavigate();
   const [access, setAccess] = useState(false);


   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios.get(`${URL}?email=${email}&password=${password}`);

         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         console.error(error);
      }
   };


   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);


   const onSearch = async (id) => {
      try {
         const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert("There are no characters with this ID!");
         }
      } catch (error) {
         console.error(error);
      }
   };


   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
   };

   return (

      <div className={style.App}>
         {pathname !== '/' && <Nav onSearch={onSearch} />}

         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
         </Routes>

      </div>
   );
}



export default App;
