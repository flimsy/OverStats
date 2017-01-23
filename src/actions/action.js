import {FETCH_DATA_START , FETCH_DATA_ERROR, RECEIVE_DATA} from '../constants/ActionTypes';
import axios from "axios";
import DummyData from '!json!../dummy/dummydata.json'
export function fetchData(username, tagnum) {
  return {
    type: FETCH_DATA_START,
    payload : {
      username,
      tagnum
    }
  };
}

export function throwError(error) {
  return {
    type: FETCH_DATA_ERROR,
    payload: error,
  };
}

export function recieveData(data, username, tagnum) {
  return {
    type: RECEIVE_DATA,
    payload : {
      data,
      username,
      tagnum
    }
  };
}


export function Fetch() {
  return dispatch => {

    dispatch(fetchData(username, tagnum));

    // axios.get("https://owapi.net/api/v3/u/" + username + "-" + tagnum + "/blob")
    //   .then((response) => {
    //     dispatch({type: RECEIVE_DATA, payload: response.data});
    //   })
    //   .catch((err) => {
    //     dispatch({type: FETCH_DATA_ERROR, payload: err});
    //   })

    dispatch({type:RECEIVE_DATA, payload: DummyData});
  };
}
