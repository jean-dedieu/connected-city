import { ADD_ALERT, ADD_DESCRIPTION, SET_ALERTS } from "./alerts-actions";
import Alert from '../models/alert';

const initialState = {
    alerts: []

};

export default(state = initialState, action) => {
    switch (action.type){
        case SET_ALERTS:
            return {
                alerts: action.alerts.map(al => new Alert(al.id.toString(), al.title, al.description)) //mapping our data in an array
            };
        case ADD_ALERT:
            const NewAlert = new Alert(
             action.alertData.id.toString(),
             action.alertData.title, 
             action.alertData.description
             );
            return{
                alerts: state.alerts.concat(NewAlert)
            };

        /*case ADD_DESCRIPTION:
                const NewAlertDescription = new Alert(new Date().toString(), action.alertPlaceData.description);
                return{
                    alertPlaces: state.alertPlaces.concat(NewAlertDescription)
                };*/

            default:
                return state;
    }
};