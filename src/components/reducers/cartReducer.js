import {
    ADD_TO_CART,
    REMOVE_ITEM,
    ADD_QUANTITY,
    INPUT_QUANTITY,
    SUBTRACT_QUANTITY } from '../actions/actions-types/cart-actions';

const initState = {
    products: [
        { id:1, title:'Product Name', price:50, img: null },
        { id:2, title:'Product Name', price:30, img: null },
        { id:3, title:'Product Name', price:20, img: null },
    ],
    addedItems:[],
    total: 0
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const addedItem = state.products.find(item => item.id === action.id);
            const isAlreadyAdded = state.addedItems.find(item => item.id === addedItem.id);
            if( isAlreadyAdded ) {
                addedItem.quantity += 1;
                addedItem.totalPrice += addedItem.price;
                const newTotalPrice = state.total + addedItem.price;
                return {
                    ...state,
                    total: newTotalPrice
                }
            } else {
                addedItem.quantity = 1;
                addedItem.totalPrice = addedItem.price;
                const newTotalPrice = state.total + addedItem.price;
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotalPrice
                }
            }
        }

        case REMOVE_ITEM: {
            const itemToRemove = state.addedItems.find(item => item.id === action.id);
            const newAddedItems = state.addedItems.filter(item => item.id !== action.id);
            const newTotal = state.total - ( itemToRemove.price * itemToRemove.quantity );
            return {
                ...state,
                 addedItems: newAddedItems,
                 total: newTotal
            }
        }

        case ADD_QUANTITY: {
            const itemToUpdate = state.addedItems.find(item => item.id === action.id);
            itemToUpdate.quantity += 1;
            itemToUpdate.totalPrice += itemToUpdate.price;
            const newTotal = state.total + itemToUpdate.price
            return {
                ...state,
                total: newTotal
            }
        }

        case INPUT_QUANTITY: {
            const itemToUpdate = state.addedItems.find(item => item.id === action.id);
            if (action.quantity <= 0) {
                const newAddedItems = state.addedItems.filter(item => item.id !== action.id);
                const newTotal = state.total - itemToUpdate.totalPrice
                return {
                    ...state,
                    addedItems: newAddedItems,
                    total: newTotal
                }
            } else {
                let newTotal = state.total - itemToUpdate.totalPrice;
                itemToUpdate.quantity = action.quantity;
                itemToUpdate.totalPrice = itemToUpdate.quantity * itemToUpdate.price;
                newTotal += itemToUpdate.totalPrice;
                return {
                    ...state,
                    total: newTotal
                }
            }
        }

        case SUBTRACT_QUANTITY: {
            const itemToUpdate = state.addedItems.find(item => item.id === action.id);
            itemToUpdate.quantity -= 1;
            itemToUpdate.totalPrice -= itemToUpdate.price;
            const newTotal = state.total - itemToUpdate.price
            if (itemToUpdate.quantity === 0) {
                const newAddedItems = state.addedItems.filter(item => item.id !== action.id);
                return {
                    ...state,
                    addedItems: newAddedItems,
                    total: newTotal
                }
            } else {
                return {
                    ...state,
                    total: newTotal
                }
            }
        }

        default:
            return state
    }
}

export default cartReducer;