import {ADD_PLACE, DESELECT_PLACE, SELECT_PLACE, DELETE_PLACE} from '../actions/actionTypes';

const initialState = {
    places: [],
    selectedPlace: null
};

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    place: action.placeName,
                    image: {
                        uri: 'https://i.pinimg.com/originals/5c/9e/21/5c9e21be38e0452281510988947f9b39.jpg'
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => place.key !== state.selectedPlace.key),
                selectedPlace: null
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => place.key === action.placeKey)
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };
        default:
            return state;
    }
}