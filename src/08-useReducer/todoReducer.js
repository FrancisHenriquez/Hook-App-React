export const todoReducer = ( initialState = [] , action) => {

    switch ( action.type ){
        case (action.type): 
            case '[TODO] Add Todo':
                return [ ...initialState, action.payload ]

            default:
                return initialState;
    }
}