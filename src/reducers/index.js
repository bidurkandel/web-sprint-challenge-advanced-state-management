import { FETCH_SMURFS_LOADING, FETCH_SMURFS_SUCCESS, ADD_SMURF, SET_ERROR, SERVER_FAIL } from "../actions";

export const initialState = {
  smurfs: [],
  isLoading: false,
  serverError: "",
  formError: ""
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(FETCH_SMURFS_LOADING):
      return ({
        ...state,
        isLoading: true
      });
    case(FETCH_SMURFS_SUCCESS):
      return ({
        ...state,
        isLoading: false,
        smurfs: action.payload
      });
    case(ADD_SMURF):
      return ({
        ...state,
        isLoading: false,
        formError: "",
        serverError: "",
        smurfs: [...state.smurfs, action.payload]
      });
    case(SET_ERROR):
      return ({
        ...state,
        isLoading: false,
        serverError: "",
        formError: action.payload
      });
    case(SERVER_FAIL):
      return ({
        ...state,
        isLoading: false,
        formError: "",
        serverError: action.payload
      });
    default:
      return state;
  }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
//  
//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer case to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.