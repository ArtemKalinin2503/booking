import { combineReducers } from 'redux';

//Создаем actions с помощью расширения createAction (каждый action будет получать состояние и изменять его)
export const actionIdState = (bookingId) => {return {type: "Action_Id_Booking", payload: bookingId}};
export const actionPrice = (bookingPrice) => {return {type: "Action_Price_Booking", payload: bookingPrice}};
export const actionBookingDate = (bookingDate) => {return {type: "Action_Date_Booking", payload: bookingDate}};
export const actionPassangers = (bookingPassangers) => {return {type: "Action_Passangers_Booking", payload: bookingPassangers}};
export const actionTrackDate = (bookingTrackDate) => {return {type: "Action_TrackDate_Booking", payload: bookingTrackDate}};

//Создадим состояния с помощью метода initState (в каждое состояние передан тип данных которое мы ожидаем записать в каждое состояние)
export const initState = {
    id: 0,
    price: 0,
    bookingDate: 0,
    passangers: 0,
    trackDate: 0    
};

//Создадим редьюсер в котором опишем, что должен делать каждый action
const mainReducer = (state = initState, action) => {
    //С помощью конструкции switch case опишем каждый action
    switch(action.type) {
        case "Action_Id_Booking":
            return {
                ...state,
                id: action.payload
        };
        case "Action_Price_Booking":
            return {
                ...state,
                price: action.payload
        };  
        case "Action_Date_Booking":
            return {
                ...state,
                bookingDate: action.payload
        };
        case "Action_Passangers_Booking":
            return {
                ...state,
                passangers: action.payload
        };  
        case "Action_TrackDate_Booking":
            return {
                ...state,
                trackDate: action.payload
        };
        default:
            return state;    
    }
};


//Передаим созданный редьюсер mainReducer в расширение combineReducers
const todoApp = combineReducers ({
    mainReducer
});
  
export default todoApp;  