import { ADD_ALERT } from "./alerts-places-actions";
import Alert from '../models/alert';

const initialState = {
    alertPlaces: []

};

export default(state = initialState, action) => {
    switch (action.type){
        case ADD_ALERT:
            const NewAlert = new Alert(new Date().toString(), action.alertPlaceData.title);
            return{
                alertPlaces: state.alertPlaces.concat(NewAlert)
            };

            default:
                return state;
    }
};