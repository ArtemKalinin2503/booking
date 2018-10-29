import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'; //connect нужен для связи компонента со store
import store from '../store';
import {postData } from '../reducers'; //импортируем actions
import moment from 'moment'; //библиотека для работы с датами
import {DateRangePicker} from "react-dates"; //Подключаем календарь

//Компонент CreateBooking с формой создания брони
class CreateBooking extends Component {
    //Конструктор в котооом создадим state для работы с даннми state внутри данного компонента    
    constructor(props){
        super(props);
        this.state = {
            price: 0,
            passengers: 1,
            startDate: moment(), //Согласно документации из momento.js так получаем дату
            endDate: null,
            focusedInput: null,
            days: 1
        }
    }

    //Событие клика на кнопке Create (будем получать все значения input в форме и записывать их в таблицу (компонент HomeBooking))
    addBooking() {
        //В переменную data передадим объект в котором запишем в state данные
        let data = {
            price: this.state.price,
            passengers: this.state.passengers,
            "From\Until":this.state.startDate.format("DD-MM-YYYY") +"-"+this.state.endDate.format("DD-MM-YYYY")
        }
        this.props.post(data);
    }

    //Событие для работы с каледарем (Трекбаром)
    setCalendarEndDate(days){        
        let end = moment(this.state.startDate);
        end.add(parseInt(days, 10), "days");
        this.setState({
            endDate: end,
            days: days
        })
    }

    render() {
        return (
            <div className="form-request__wrapper">
                <p className="form-request__title">Create request</p>
                <form className="form-request">
                    <label className="form-request__label">
                        Price
                        {/*С помощью метода setState берем состояние price и записываем в него значение input*/}
                        <input type="number" className="form-request__input form-request__input_price" value={this.state.price} onChange={(e)=>{this.setState({price: e.currentTarget.value})}}/>
                    </label>
                    <label className="form-request__label">
                        Passengers
                        {/*С помощью метода setState берем состояние passengers и записываем в него значение input*/}
                        <input type="number" className="form-request__input" value={this.state.passengers} onChange={(e)=>{this.setState({passengers: e.currentTarget.value})}}/>
                    </label>
                        {/*Трекбар (бегунок)*/}
                        <input type="range" step="1" min="1" max="21" value={this.state.days} onChange={(e)=> this.setCalendarEndDate(e.currentTarget.value)}/>
                    <label className="form-request__label">
                        From/untill
                        {/*Компонент календарь все описанные options взять из документации*/}
                        <DateRangePicker  
                            startDateId="startDate"
                            endDateId="endDate"
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                            focusedInput={this.state.focusedInput}
                            onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                        />
                    </label>
                    <input type="button" value="Create" className="form-request__btn-create" onClick={()=>this.addBooking()}/>
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

const mapDispatchToProps = {
    post: postData
};

//Обвернем данный компонент в connect для свзяи с хранилищем
const ComponentCreateBooking = connect (
    mapStateToProps,
    mapDispatchToProps
)(CreateBooking);

export default ComponentCreateBooking;
