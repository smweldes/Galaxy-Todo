import { getDefaultNormalizer } from "@testing-library/dom"

const initialState =[
    {
        id:0,
        note: "God is great",
        
    },
    {
        id:1,
        note: "Welcome to the Bay Area",
        
    },
    {
        id:2,
        note: "David Norman",
        
    }
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
        state = [...state, action.payload];
     return state;
     case "UPDATE_TODO":
         const updateState = state.map(todo=> todo.id === action.payload.id ? action.payload : todo);
         state = updateState;
         return state;
    case "DELETE_TODO":
        const filterContact = state.filter(
            (todo) => todo.id !== action.payload && todo
        );
        state = filterContact;
        default:
            return state;
    }
};

export default contactReducer;