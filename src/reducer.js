export const initialState = {

    basket: [],
    user: null,
    product: null

};


export const getBasketTotal = (basket)=>
    basket?.reduce((amount, item) => item.price + amount, 0 );

const reducer = ( state , action )=>{

    console.log(action);

    switch (action.type){

        case 'ADD_TO_BASKET' :
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':

        const index = state.basket.findIndex(
            (basketItem)=> basketItem.id ===action.id
        );

            var array = [...state.basket];

            if(index>=0){
                array.splice(index, 1);
            }

            else{
                console.log('cantt delete');
            }
       
            return {
                ...state,
                basket: array
         
            }
           
        case 'SET_USER':
            return{
                ...state,
                user : action.user
            }

            case 'SET_PRODUCT':
                return{
                    ...state,
                    product : action.product
                }
        default:
            return state;

    }

};

export default reducer;
