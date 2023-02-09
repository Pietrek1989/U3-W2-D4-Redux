const initialState = {
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };

    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (el, i) => el !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};
export default mainReducer;
