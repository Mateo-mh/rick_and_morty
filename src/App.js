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
const EMAIL = 'byronmh8@gmail.com';
const PASSWORD = 'byronmh1';

function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate("/home");
      } else {
         alert("Credenciales incorrectas");
      }
   };

   useEffect(() => {
      !access && navigate("/");
   }, [access,navigate]); 

      const onSearch = (id) => {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert('¡No hay personajes con este ID!');
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
               <Route path="/favorites" element={<Favorites/>}/>
            </Routes>
         </div>

      );
   }



   export default App;
