export const ADD_ALERT = 'ADD_ALERT';

export const addAlert = (title) =>{
    return { type: ADD_ALERT, alertPlaceData : {title: title}};
};