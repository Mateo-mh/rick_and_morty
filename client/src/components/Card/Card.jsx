import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions.js";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => {
   const [isFav, setIsFav] = useState(false);
 
   const handleFavorite = () =>{
     isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose});
     setIsFav(!isFav)
   };
 
   useEffect(() => {
     myFavorites.forEach((fav) => {
        if (fav.id === id) {
           setIsFav(true);
        }
     });
  }, [myFavorites,id]);

return (
   <div className={style.container}>
      {
         <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      }
      <button id={style.boton} onClick={() => onClose(id)}>Cerrar </button>
      <NavLink id={style.linkName} to={`/detail/${id}`}>
         <img className={style.img} src={image} alt="" />
      </NavLink>
      <h2 className={style.textCard}>{name}</h2>
      <h2 className={style.textCard}>Status: {status}</h2>
      <h2 className={style.textCard}>Species: {species}</h2>
      <h2 className={style.textCard}>Gender: {gender}</h2>
   </div>
   );
};

const mapDispatchToProps = (dispatch)=>{
   return {
     addFav: (character) => dispatch(addFav(character)),
     removeFav: (id) => dispatch(removeFav(id)),
   }
 };
 
 const mapStateToProps =(state)=>{
   return{
     myFavorites: state.myFavorites
   }
 };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
