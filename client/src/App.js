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


   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);



   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert("¡No hay personajes con este ID!");
            }
         }
      );
   }

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
