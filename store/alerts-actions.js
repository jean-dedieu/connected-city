import * as FileSystem from 'expo-file-system';
//importing insertAlert method to access the database
import { insertAlert,fetchAlerts } from '../helpers/db';

export const ADD_ALERT = 'ADD_ALERT';
export const SET_ALERTS = 'SET_ALERTS';

    //Make sure we load data in redux store
export const addAlert = (title, description) =>{
    //moving the file path
    return async dispatch => {
        //const fileName = description;
        //const newPath = FileSystem.documentDirectory + fileName;

       try {
        /*await FileSystem.moveAsync({
          //  from: description,
            //to: newPath
        });*/
          //try to insert alert data in our database
          const dbResult = await insertAlert(
              title,
              description,
              '1 Rue Marechal Foch',
              15.34,
              32.83       
        ); 
           
       console.log(dbResult);
        dispatch({ type: ADD_ALERT, alertData : {id:dbResult.insertId, title: title, description: description} });
    }  catch (error) {
        console.log(err);
        throw err;
    }

  };
 };
/**
 * 
 * @returns fetched alerts
 * we will retun a promise
 * we try catch catch this to handle the erors
 */
export const loadAlerts = () =>{
    return async dispatch => {
        try {
            const dbResult = await fetchAlerts();
            console.log(dbResult);
            dispatch({ type: SET_ALERTS, alerts: dbResult.rows._array});
            //former line here up:  dispatch({ type: SET_ALERTS, alerts: [] });
        } catch (error) {
            throw err;
        }
           
    };
};