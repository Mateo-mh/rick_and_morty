import Card from "../Card/Card.jsx";
import { connect, useDispatch } from "react-redux";
import {filterCards, orderCards, removeFav}   from "../../redux/actions.js";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux);
    }
    
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    const handleClose = (id) => {
        dispatch(removeFav(id));
    };

return (
    <div>
    <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
    </select>

    <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
    </select>

    {myFavorites?.map(
        ({ id, name, status, species, gender, origin, image }) => {
        return (
            <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
            onClose={handleClose}
            />
            );
        })
    }
    </div>
    );
};


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, null)(Favorites);