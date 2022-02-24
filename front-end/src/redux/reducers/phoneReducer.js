const initialState = {
    phones:[]
}

const phoneReducer = (state = initialState,action) =>{
    switch(action.type){
        case "PHONE":
            return{
                ...state,
                phones:action.payload
            }
            default:
                return state
    }
}

export default phoneReducer