import { ACTION, declaredStateRestaurant } from "../../model/index.d"

const initialState = {
    restaurant: {},
    restaurants: [],
    message: null,
    restaurantSuccess: false,
    restaurantError: false
}

export default (state: declaredStateRestaurant = initialState, action: ACTION) => {
    switch (action.type) {
        case "recommended_restaurants":
            return {
                ...state,
                restaurants: action.payload,
                restaurantSuccess: true
            }
        case "restaurant_by_name":
            return {
                ...state,
                restaurant: action.payload,
                restaurantSuccess: true
            }
        case "restaurant_by_id":
            return {
                ...state,
                restaurant: action.payload,
                restaurantSuccess: true
            }
        case "restaurant_by_id_and_authCustomer":
            return {
                ...state,
                restaurant: action.payload,
                restaurantSuccess: true
            }
        case "restaurant_error":
            return {
                ...state,
                message: action.payload,
                restaurantError: true
            }
        case "restaurant_reset":
            return {
                ...state,
                message: null,
                restaurantSuccess: false,
                restaurantError: false,
                restaurant: {},
                restaurants: [],
            }
        default: 
            return state
    }
}