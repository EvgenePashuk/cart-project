const initState = {
    products: [
        {id:1,title:'Product Name', price:50, img: null},
        {id:2,title:'Product Name', price:30,img: null},
        {id:3,title:'Product Name', price:20,img: null},
    ],
    addedItems:[],
    total: 0
}

const cartReducer= (state = initState,action)=>{
    return state;
}

export default cartReducer;