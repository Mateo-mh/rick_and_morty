import style from './Card.module.css';
import { NavLink } from "react-router-dom"
const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {

   return (
      <div className = {style.container}>
         <button id={style.boton} onClick={() => onClose(id)}>Cerrar</button>
         <NavLink id={style.linkName} to={`/detail/${id}`}>
         <img className = {style.img} src={image} alt="" />
         </NavLink>
         <h2 className = {style.textCard}>{name}</h2>
         <h2 className = {style.textCard}>Status: {status}</h2>
         <h2 className = {style.textCard}>Species: {species}</h2>
         <h2 className = {style.textCard}>Gender: {gender}</h2>
         <h2 className = {style.textCard}>Origin: {origin}</h2>
      </div>
   );
};

export default Card