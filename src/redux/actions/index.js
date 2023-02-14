export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS_LIST = "GET_JOBS_LIST";

export const addToFavouriteAction = (favouriteItem) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: favouriteItem,
  };
};
export const removeFromFavouriteAction = (favouriteItem) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: favouriteItem,
  };
};

export const getJobsListActionAsync = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS_LIST,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
