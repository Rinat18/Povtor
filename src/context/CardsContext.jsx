import React, { createContext, useContext, useReducer } from 'react';
import { API, CARDS_ACTIONS } from '../consts/const';
import axios from 'axios';

const cardsContext = createContext()
export const useCards = () => useContext(cardsContext)
const INIT_STATE = {
    cards: [],
    oneCard: {},
    ranks:[],
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type){
        case CARDS_ACTIONS.GET_CARDS:
            return {...state, cards:action.payload};
        case CARDS_ACTIONS.GET_ONE_CARD:
            return {...state, oneCard:action.payload};
        case CARDS_ACTIONS.GET_RANK:
            return {...state, ranks:action.payload};
    }
}


const CardsContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    
    // ! GET CARDS
    const getAllCards = async() => {
        try{
            const {data} = await axios(`${API}/cards/${window.location.search}`)
            dispatch({
                type: CARDS_ACTIONS.GET_CARDS,
                payload: data,
            });
        }catch(error){
            console.log(error);
        }
    }
    // ! GET ONE CARD 
    const getOneCard = async(id) => {
        try{
            const {data} = await axios(`${API}/cards/${id}`)
            dispatch({
                type: CARDS_ACTIONS.GET_ONE_CARD,
                payload: data,
              });
        }catch(error){
            console.log(error);
        }
    }
    // ! GET CATEGORY
    const getCategoryCard = async() => {
        try{
            const {data} = await axios(`${API}/cards`)
            const filtered =  data.map((elem) => {
                if(elem.rank){
                    return elem.rank
                }
            })
            const uniqueArray = [...new Set(filtered)];
            dispatch({
                type: CARDS_ACTIONS.GET_RANK,
                payload: uniqueArray,
              });
        }catch(error){
            console.log(error);
        }
    }

    const values = {
        getAllCards,
        getOneCard,
        getCategoryCard,
        ranks: state.ranks,
        cards: state.cards,
        oneCard: state.oneCard,
    }
    return (
        <cardsContext.Provider value={values}>{children}</cardsContext.Provider>
    );
}

export default CardsContext;
