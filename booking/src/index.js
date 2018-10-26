import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'; //Подключаем React-Redux
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'; //Для роутинга
import createStore from './store'; //Подключаем хранилище
//Подключаем компоненты
import HomeBooking from './components/HomeBooking';
import CreateBooking from './components/CreateBooking';

//Вызовим store
const store = createStore;

//Основной компонент 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header></header>
          <div className="main">
            <div>
              {/*Настраиваем роутинг на компоненты*/}
              <Route path="/" exact component={HomeBooking}></Route>
              <Route path="/CreateBooking" component={CreateBooking}></Route>
            </div>
          </div>
        <footer></footer>
      </div>
    );
  }
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

