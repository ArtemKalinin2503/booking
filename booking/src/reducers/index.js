import { combineReducers } from 'redux';
//Actions для сетевого запроса данных
const FETCH_TRANSLATE_REQUEST = 'FETCH_TRANSLATE_REQUEST';
const FETCH_TRANSLATE_SUCCESS = 'FETCH_TRANSLATE_SUCCESS';
const FETCH_TRANSLATE_FAILURE = 'FETCH_TRANSLATE_FAILURE';
//Создаем actions с помощью расширения createAction
export const inputActionCreator = (inputValue) => {return {type: "INPUT_ACTION", payload: inputValue}}; //Данный action берет value из input
export const translatedAction = (translate) => {return {type: 'WORD_TRANSLATE_ACTION', payload: translate}}; //Данный action будет получать данные из (data/data-en.json)
export const fetchTranslateRequestCreator = () => ({type: FETCH_TRANSLATE_REQUEST}); //Данный action создает запрос к БД
export const fetchSuccessCreator = (data) => ({type: FETCH_TRANSLATE_SUCCESS, payload: data}); //Данный action получает данные из БД
export const fetchErrorCreator = (err) => ({type: FETCH_TRANSLATE_FAILURE, payload: err}); //Данный action срабатывает если данные не пришли

//Создадим состояния с помощью метода initState (очень важно присваивать сразу необходимый вид данных состоянию исходя какие данные мы ожидаем получить в него)
export const initState = {
    id: 0,
    inputValue: 'test',
    translatedWord: [ //В данное состояние прейдет dataJson.json 
        {
            test: [""] 
        }
    ],
    word: [],
    isFetching: false,
    isFetched: false,
    error: null
  };
  
//Создадим reducer в котором опишем что будет обрабатывать action INPUT 
const reducer = (state = initState, action) => {
    switch(action.type) {
        case "INPUT_ACTION": //Созданый action будет изменять состояние inputValue (поэтому пишем action.payload на основание соглашения)
            return {
                ...state, 
                inputValue: action.payload
            }; 
        case "WORD_TRANSLATE_ACTION": //Данный action будет получать ответ из (data/data-en.json) и передавать его в состояние translatedWord
            return {
                ...state,
                translatedWord: action.payload
            };
        case FETCH_TRANSLATE_REQUEST:
            return {
                ...state,
                isFetching: true,
                isFetched: false
            };
        case FETCH_TRANSLATE_SUCCESS:
            return {
                ...state,
                isFetched: true,
                isFetching: false,
                word: action.payload
            };
        case FETCH_TRANSLATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                isFetched: true,
                error: action.error
            };
        default:
            return state;                 
    }
};

//Передаим созданный reducer в расширение combineReducers
const todoApp = combineReducers ({
    reducer
});
  
export default todoApp;  