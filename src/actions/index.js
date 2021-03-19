import axios from 'axios';

export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_LOADING";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const SERVER_FAIL = "SERVER_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = () => dispatch => {
  dispatch(fetchSmurfsLoading());

  axios.get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch(fetchSmurfsSuccess(res.data));
    })
    .catch(err => {
      dispatch(serverFail(err.message));
    })
}

export const addSmurf = smurf => dispatch => {
  axios.post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch(addSmurfSuccess(smurf));
    })
    .catch(err => {
      console.log(err.message)
      dispatch(serverFail(err.message));
    })
}

const fetchSmurfsLoading = () => {
  return ({ type: FETCH_SMURFS_LOADING });
};

const fetchSmurfsSuccess = smurfs => {
  return ({
    type: FETCH_SMURFS_SUCCESS,
    payload: smurfs
  });
};

const addSmurfSuccess = smurf => {
  return({
    type: ADD_SMURF,
    payload: smurf
  });
};

const serverFail = error => {
  return ({
    type: SERVER_FAIL,
    payload: error
  });
};

export const setError = error => {
  return({
    type: SET_ERROR,
    payload: error
  });
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.