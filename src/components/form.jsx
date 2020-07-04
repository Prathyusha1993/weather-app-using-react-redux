import React from 'react';
import { fetchApiData } from '../actions/weatherActions';
import {connect} from 'react-redux';

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.fetchApiData}>
                <input type="text" name="city" placeholder="City..." />
                <input type="text" name="country" placeholder="Country..." />
                <button>Get Weather</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        city:state.city,
        country:state.country
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchApiData : (e) => dispatch(fetchApiData(e))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Form);