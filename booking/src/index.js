import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //Подключаем React-Redux
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //Для роутинга
import createStore from './store'; //Подключаем хранилище
//Подключаем компоненты
import HomeBooking from './components/HomeBooking';
import CreateBooking from './components/CreateBooking';


//Создадим store (хранилище)
const store = createStore;

//Обварачиваем основной компонет в расширение Provider для подключение хранилища 
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <Switch>
         <Route path="/" exact component={HomeBooking}></Route> {/*exact - значит при загрузке страницы сразу отрисуем данный компонент  */}
         <Route path="/CreateBooking" component={CreateBooking}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
