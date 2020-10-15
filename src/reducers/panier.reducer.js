export default function cartData (data=[],action){/*pure function*/
    if(action.type === "ADD_DATA") {
        let  cartData = [...data,action.payload]
        return cartData;
    } else if (action.type === "DELETE_DATA"){

        return data
    }
     else {
        return data
    }
};