interface Drink {
    id: string;
    image: string;
    name: string;
    price: number;
    description: string;
}

interface State {
    drinks: Drink[]
    error: string
    loading: boolean
}

export const enum actionTypes {
    FETCH = 'fetch',
    SUCCESS = 'success',
    FAIL = 'fail'
}

type Action = 
    | { type: actionTypes.FETCH } 
    | { type: actionTypes.SUCCESS, payload: Drink[] } 
    | { type: actionTypes.FAIL }

export const initialState: State = {
    drinks: [],
    error: '',
    loading: false
}

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case actionTypes.FETCH:
            return {
                ...state,
                loading: true,
                error: ''
            }
        
        case actionTypes.SUCCESS:
            console.log("In SUCCESS action with payload:", action.payload)
            return {
                ...state,
                loading: false,
                drinks: action.payload
            }
        
        case actionTypes.FAIL:
            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            }

        default:
            return state
    }
}