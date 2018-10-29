import React, { Component } from 'react';
import {Link} from 'react-router-dom'; //Для роутинга
import { connect } from 'react-redux'; //connect нужен для связи компонента со store
import {getData} from '../reducers'; //импортируем actions

//Компонент HomeBooking с таблицей бронирования
class HomeBooking extends Component {
    //Компонент componentDidMount сработает сразу после загрузки
    componentDidMount() {
        this.props.fetchData(); //Вызов thunk getData 
    }

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
                            <p>id</p>
                        </td>
                        <td>
                            <p>Price</p>
                        </td>
                        <td>
                            <p>From/Utils</p>
                        </td>
                        <td>
                            <p>Passangers</p>
                        </td>
                        </tr>
                        {/*С помощью цикла map переберем state и выведим необходимое*/}
                        {this.props.apiData.map(d=>{
                                    return <tr key={d.id} className="booking__new-record">
                                    <td>{d.id}</td>
                                    <td>{d.price}</td>
                                    <td>{d.passengers}</td>
                                    <td>{d.FromUntil}</td>
                                    </tr>
                                })}
                         
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
    trackDate: state.mainReducer.trackDate,
    apiData: state.mainReducer.fetchResult,
    apiFetching: state.mainReducer.isFetching
});

//Передаем thunk компонент
const mapDispatchToProps = {
    fetchData: getData
}

//Обвернем данный компонент в connect для свзяи с хранилищем
const ComponentHomeBooking = connect (
    mapStateToProps,
    mapDispatchToProps
)(HomeBooking);

export default ComponentHomeBooking;
