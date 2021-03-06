import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'; //Подключаем React-Redux
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'; //Для роутинга
import createStore from './store'; //Подключаем хранилище
//Подключаем компоненты
import HomeBooking from './components/HomeBooking';
import CreateBooking from './components/CreateBooking';


//Создадим store (хранилище)
const store = createStore;

//Основной компонент 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header></header>
          <div className="main">
         
          </div>
        <footer></footer>
      </div>
    );
  }
};

//Для связи со store
const mapStateToProps = (state,ownProps={}) => ({
  id: state.mainReducer.id,
  price: state.mainReducer.price,
  bookingDate: state.mainReducer.bookingDate,
  passangers: state.mainReducer.passangers,
  trackDate: state.mainReducer.trackDate
});

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

