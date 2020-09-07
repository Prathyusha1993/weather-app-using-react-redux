import {
  FETCH_DATA_REQUEST,
  FETCH_CITY,
  FETCH_DATA_SUCCESS,
  FETCH_COUNTRY,
  FETCH_TEMP,
  FETCH_HUMIDITY,
  FETCH_CONDITIONS,
  FETCH_DATA_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  loading: true,
  city: "",
  country: "",
  temperature: "",
  humidity: "",
  conditions: "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case FETCH_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case FETCH_TEMP:
      return {
        ...state,
        temperature: action.payload,
      };
    case FETCH_HUMIDITY:
      return {
        ...state,
        humidity: action.payload,
      };
    case FETCH_CONDITIONS:
      return {
        ...state,
        conditions: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
