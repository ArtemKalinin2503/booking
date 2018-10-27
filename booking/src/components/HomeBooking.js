import React, { Component } from 'react';
import {Link} from 'react-router-dom'; //Для роутинга
import { connect } from 'react-redux'; //connect нужен для связи компонента со store
import store from '../store';
import { actionIdState, actionPrice, actionPassangers, actionBookingDate, actionTrackDate } from '../reducers'; //импортируем actions (описаные в reducers/index.js) 

//Компонент HomeBooking с таблицей бронирования
class HomeBooking extends Component {

    render() {
        return (
            <div className="booking">
                <p className="booking__title">Requests</p>
                {/*Передаем в Link имя компонента для роутинга*/}
                <button className="booking__btn-add btn btn-success"><Link to="/CreateBooking">Add new</Link></button>
                <table className="booking__table">
                    <tbody>
                        <tr className="booking__header-table">
                        <td>
                            <p>Price</p>
                        </td>
                        <td>
                            <p>id</p>
                        </td>
                        <td>
                            <p>From/Utils</p>
                        </td>
                        <td>
                            <p>Passangers</p>
                        </td>
                        </tr>
                        <tr className="booking__new-record">

                        </tr>
                    </tbody>
                </table>
          </div>
        )
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

//Обвернем данный компонент в connect для свзяи с хранилищем
const ComponentHomeBooking = connect (
    mapStateToProps
)(HomeBooking);

export default ComponentHomeBooking;