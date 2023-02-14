import { GET_JOBS_ERROR, GET_JOBS_LIST, GET_JOBS_LOADING } from "../actions";

const initialState = {
  jobList: [],
  isLoading: true,
  isError: false,
};

const jobsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_LIST:
      return {
        ...state,
        jobList: action.payload,
      };
    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload, // which is false when the jobs are fetched
      };

    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default jobsListReducer;
