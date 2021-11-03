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
        case "ADD_CONTACT":
        state = [...state, action.payload];
     return state;
     case "UPDATE_CONTACT":
         const updateState = state.map(contact=> contact.id === action.payload.id ? action.payload : contact);
         state = updateState;
         return state;
    case "DELETE_CONTACT":
        const filterContact = state.filter(
            (contact) => contact.id !== action.payload && contact
        );
        state = filterContact;
        default:
            return state;
    }
};

export default contactReducer;