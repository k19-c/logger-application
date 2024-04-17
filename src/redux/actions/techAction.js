import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from "../actions/types";

// Get techs from the server
export const getTechs = () => async (dispatch) => {
  try {
    //setLoading() is also action written below
    setLoading();
    //we already added proxy in package.json
    const res = await fetch("/techs");
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Add new techs to the server
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Delete tech from the server
export const deleteTech = (id) => async (dispatch) => {
  try {
    //setLoading() is also action written below
    setLoading();
    //we already added proxy in package.json
    await fetch(`/techs/${id}`, {
      method: "DELETE", // Method itself
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//setLoading() function is Setting loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
