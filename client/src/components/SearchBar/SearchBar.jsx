import style from './SearchBar.module.css'
import { useState } from 'react';
const SearchBar = ({ onSearch }) => {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.containerSearch}>
         <input
            type="search"
            className={style.input}
            id={style.Email}
            autocomplete="off"
            name="Email"
            onChange={handleChange}
         />
         <button className={style.buttonSubmit} onClick={() => onSearch(id)}  >
         Agregar
         </button>
      </div>
   );
}

export default SearchBar;
