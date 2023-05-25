import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions-types';
import axios from 'axios';

export const addFav = (character) => {
    const URL = 'http://localhost:3001/rickandmorty/favorites';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(URL, character);
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};


export const removeFav = (id) => {
    const URL = `http://localhost:3001/rickandmorty/favorites/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(URL);
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};


export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
};

export const orderCards = (order) => {
    return { type: ORDER, payload: order }
};