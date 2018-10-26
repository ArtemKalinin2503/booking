import React, { Component } from 'react';
import {Link} from 'react-router-dom'; //Для роутинга

//Компонент HomeBooking с таблицей бронирования
class HomeBooking extends Component {

    render() {
        return (
            <div className="booking">
                <p className="booking__title">Requests</p>
                {/*Передаем в Link имя компонента для роутинга*/}
                <button className="booking__btn-add btn btn-success"><Link to="/CreateBooking">Add new</Link></button>
                <table className="booking__table">
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
                </table>
          </div>
        )
    }

};

export default HomeBooking;