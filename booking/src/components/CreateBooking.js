import React, { Component } from 'react';

//Компонент CreateBooking с формой создания брони
class CreateBooking extends Component {

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
                    <input type="submit" value="Create" className="form-request__btn-create"/>
                </form>
            </div>
        )
    }

};

export default CreateBooking;