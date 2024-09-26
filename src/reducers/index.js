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

