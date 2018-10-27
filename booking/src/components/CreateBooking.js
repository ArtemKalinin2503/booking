import React, { Component } from 'react';
import { connect } from 'react-redux'; //connect нужен для связи компонента со store
import store from '../store';
import { actionIdState, actionPrice, actionPassangers, actionBookingDate, actionTrackDate } from '../reducers'; //импортируем actions (описаные в reducers/index.js) 

//Компонент CreateBooking с формой создания брони
class CreateBooking extends Component {

    //Событие клика на кнопке Create (будем получать все значения input в форме и записывать их в таблицу (компонент HomeBooking))
    addBooking(e) {
        e.preventDefault();
        let allState = store.getState(); //Получим з
        console.log(allState);
    }

    render() {
        return (
            <div className="form-request__wrapper">
                <p className="form-request__title">Create request</p>
                <form className="form-request">
                    <label className="form-request__label">
                        Price
                        <input type="number" className="form-request__input form-request__input_price"/>
                    </label>
                    <label className="form-request__label">
                        Passengers
                        <input type="number" className="form-request__input"/>
                    </label>
                    <label className="form-request__label">
                        From/untill
                        <input type="date" className="form-request__input form-request__input_date"/>
                    </label>
                    <input type="submit" value="Create" className="form-request__btn-create" onClick={this.addBooking}/>
                </form>
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
const ComponentCreateBooking = connect (
    mapStateToProps
)(CreateBooking);

export default ComponentCreateBooking;