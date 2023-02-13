import { GET_JOBS_LIST, GET_JOBS_SEARCH } from "../actions";

const initialState = {
  jobList: [],
};

const jobsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_LIST:
      return {
        ...state,
        jobList: action.payload,
      };
    case GET_JOBS_SEARCH:
      return {
        ...state,
        jobList: action.payload,
      };
    default:
      return state;
  }
};

export default jobsListReducer;
