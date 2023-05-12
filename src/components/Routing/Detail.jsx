import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import style from './Detail.module.css'
const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});


    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
            <p>{character.status && character.status}</p>
            <p>{character.species && character.species}</p>
            <p>{character.gender && character.gender}</p>
            <p>{character.origin?.name && character.origin?.name}</p>
            
            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    );
};

export default Detail; 