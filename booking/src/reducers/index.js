import { combineReducers } from 'redux';
import axios from 'axios'; //Axios вместо fetch для сетевого запроса
//Создаем actions с помощью расширения createAction (каждый action будет получать состояние и изменять его)
export const actionIdState = (bookingId) => {return {type: "Action_Id_Booking", payload: bookingId}};
export const actionPrice = (bookingPrice) => {return {type: "Action_Price_Booking", payload: bookingPrice}};
export const actionBookingDate = (bookingDate) => {return {type: "Action_Date_Booking", payload: bookingDate}};
export const actionPassangers = (bookingPassangers) => {return {type: "Action_Passangers_Booking", payload: bookingPassangers}};
export const actionTrackDate = (bookingTrackDate) => {return {type: "Action_TrackDate_Booking", payload: bookingTrackDate}};
//Actions для post запроса
export const actionStartPost = (isRequestSent)=>{return {type: "Request_Sending", payload: isRequestSent}};
export const actionEndPost = (postResult)=>{return {type:"Request_Result", payload: postResult}};
//Actions для get запроса
export const fetchStarted = (isFetched)=>{return {type: "Is_Fetched", payload: isFetched}};
export const fetchResult = (result)=>{return {type: "Get_Result", payload: result}};
export const fetchError = (error)=>{return {type: "Get_Error", payload: error}};

//Создадим состояния с помощью метода initState (в каждое состояние передан тип данных которое мы ожидаем записать в каждое состояние)
export const initState = {
    id: 0,
    price: 0,
    bookingDate: 0,
    passangers: 0,
    trackDate: 0,
    //Состояние для сетевого запроса
    requestSending:false,
    requestSuccess: null,
    isFetching: false,
    fetchResult: [],
    fetchError: null    
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
        case "Request_Sending":
            return {
                ...state,
                requestSending: action.payload
            };
        case "Request_Result":
            return {
                ...state,
                requestSucceed: action.payload
            }
        case "Is_Fetched":
            return {
                ...state,
                isFetching: action.payload
            };
        case "Get_Result":
            return {
                ...state,
                fetchResult: action.payload
            };
        case "Get_Error": 
            return {
                ...state,
                fetchError: action.payload
            }            
        default:
            return state;    
    }
};

//Thunk компонент postData для Post запроса 
export const postData = (post) => {
    return (dispatch) => {
        debugger;
        dispatch(actionStartPost(true));
        axios.post("http://localhost:3000/posts", post)
        .then(result => {
            if (result.status === 200) {
                dispatch(actionEndPost(true));
            } else {
                dispatch(actionEndPost(false));
            }
        })
    }
}

//Thunk компонент getData для Get запроса 
export const getData = () => {
    return (dispatch) => {
        dispatch(fetchStarted(true));
        var api = axios.create({
            baseURL: 'http://localhost:3000/'
        })
        api.get("posts")
        .then(result => {
            dispatch(fetchResult(result.data));
        },
        err => {
            dispatch(fetchError(err.status));
        });
    }
}

//Передаим созданный редьюсер mainReducer в расширение combineReducers
const reducer = combineReducers ({
    mainReducer
});
  
export default reducer;  
