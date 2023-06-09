import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import style from './Detail.module.css'
const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});


    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id])


    return (
        <div>
            <img src={character.image && character.image} alt="img" />
            <h1>{character.name && character.name}</h1>
            <p>Status: {character.status && character.status}</p>
            <p>Specie: {character.species && character.species}</p>
            <p>Gender: {character.gender && character.gender}</p>
            <p>Origin: {character.origin?.name && character.origin?.name}</p>
            
            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    );
};

export default Detail; 