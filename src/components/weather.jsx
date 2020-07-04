import React from 'react';
import {connect} from 'react-redux';
import { fetchDataFailure,fetchCity,
fetchCountry, fetchTemp, fetchConditions, fetchHumidity } from '../actions/weatherActions';

const Weather = (props) => {
    return (
        <div className="weather__info">
               {
               props.city && props.country && <p className="weather__key">Location : 
                <span className="weather__value"> {props.city}, {props.country}
                </span></p>
                }
               {
               props.temperature && <p className="weather__key">Temperature :  
                   <span className="weather__value"> {props.temperature}</span></p>
               }
               {
               props.humidity && <p className="weather__key">Humidity : 
                   <span className="weather__value"> {props.humidity}</span></p>
               }
               {
               props.speed && <p className="weather__key">speeed : 
                   <span className="weather__value"> {props.speed}</span></p>
               }
               {
               props.conditions && <p className="weather__key">Conditions : 
                   <span className="weather__value"> {props.conditions}</span></p>
               }
               {props.error && <p className="weather__error"> {props.error}</p>}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        city:state.city,
        country:state.country,
        temperature:state.temperature,
        humidity:state.humidity,
        conditions:state.conditions,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return  {
        fetchCity: () => dispatch(fetchCity()),
        fetchCountry: () => dispatch(fetchCountry()),
        fetchTemp: () => dispatch(fetchTemp()),
        fetchHumidity: () => dispatch(fetchHumidity()),
        fetchConditions: () => dispatch(fetchConditions()),
        fetchDataFailure: () => dispatch(fetchDataFailure())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Weather);