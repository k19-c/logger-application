import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "../actions/types";

// Get logs from the server
export const getLogs = () => async (dispatch) => {
  try {
    //setLoading() is also action written below
    setLoading();
    //we already added proxy in package.json
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Add new logs to the server
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Update log from the server, we are taking whole log instead of id
export const updateLog = (log) => async (dispatch) => {
  try {
    //setLoading() is also action written below
    setLoading();
    //we already added proxy in package.json
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT", // Method itself
      body: JSON.stringify(log),
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Search logs from the server
export const searchLogs = (text) => async (dispatch) => {
  try {
    //setLoading() is also action written below
    setLoading();
    //we already added proxy in package.json
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Delete log from the server
export const deleteLog = (id) => async (dispatch) => {
  try {
    //setLoading() is also action written below
    setLoading();
    //we already added proxy in package.json
    await fetch(`/logs/${id}`, {
      method: "DELETE", // Method itself
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
      
    });
  }
};

//Set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//Clear current log

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//setLoading() function is Setting loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
