import {
  FETCH_DATA_REQUEST,
  FETCH_CITY,
  FETCH_COUNTRY,
  FETCH_DATA_SUCCESS,
  FETCH_TEMP,
  FETCH_HUMIDITY,
  FETCH_CONDITIONS,
  FETCH_DATA_FAILURE,
} from "./actionTypes";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchCity = (city) => {
  return {
    type: FETCH_CITY,
    payload: city,
  };
};

export const fetchCountry = (country) => {
  return {
    type: FETCH_COUNTRY,
    payload: country,
  };
};

export const fetchTemp = (temperature) => {
  return {
    type: FETCH_TEMP,
    payload: temperature,
  };
};

export const fetchHumidity = (humidity) => {
  return {
    type: FETCH_HUMIDITY,
    payload: humidity,
  };
};

export const fetchConditions = (conditions) => {
  return {
    type: FETCH_CONDITIONS,
    payload: conditions,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchApiData = (e) => {
  e.preventDefault();
  return function (dispatch) {
    dispatch(fetchDataRequest());
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=ae3e143f448b41c36a0dbf43c2c31872&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (city && country) {
          dispatch(fetchCity(data.name));
          dispatch(fetchCountry(data.sys.country));
          dispatch(fetchTemp(data.main.temp));
          dispatch(fetchHumidity(data.main.humidity));
          dispatch(fetchConditions(data.weather[0].description));
        }
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
