import {
    ADD_TO_CART,
    REMOVE_ITEM,
    ADD_QUANTITY,
    INPUT_QUANTITY,
    SUBTRACT_QUANTITY } from './actions-types/cart-actions';

export const addToCart = ( id ) => {
    return {
        type: ADD_TO_CART,
        id
    }
};

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
};

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
};

export const subtractQuantity = (id) => {
    return {
        type: SUBTRACT_QUANTITY,
        id
    }
};

export const inputQuantity = (id, quantity) => {
    return {
        type: INPUT_QUANTITY,
        quantity,
        id
    }
};