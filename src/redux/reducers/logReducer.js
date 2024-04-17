import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  CLEAR_CURRENT,
  SET_CURRENT,
  SEARCH_LOGS,
} from "../actions/types";

//this entire state can be passed as a prop, ex: log is the named prop, and state.log is the one given inside combineReducers, log: state.log
const initialState = {
  logs: null,
  loading: false,
  error: null,
  current: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };

    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };

    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload ? action.payload : log
        ),
        loading: false,
      };

    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
      };

    default:
      return state;
  }
};
