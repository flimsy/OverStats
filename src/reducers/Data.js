import {FETCH_DATA_START , FETCH_DATA_ERROR, RECEIVE_DATA} from '../constants/ActionTypes';

const initialState = {
  fetching: false,
  fetched: false,
  data: [],
  error: null,
};

export default function Data(state = initialState, action) {
  switch (action.type) {
  case FETCH_DATA_START: {
    return {...state, fetching: true}
    break;
  }
  case FETCH_DATA_ERROR: {
    return {...state, fetching: false, error: action.payload}
    break;
  }
  case RECEIVE_DATA: {
    return {...state, fetching: false, fetched: true, data: action.payload}
    break;
  }
}
  return state;
}
