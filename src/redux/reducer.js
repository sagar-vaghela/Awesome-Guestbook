import { ADD_GUEST_DETAILS } from "./actionTypes";

const initialState = {
  formData: []
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GUEST_DETAILS:
      return {
        ...state,
        formData: action.payload
      };
    default:
      return state;
  }
};

export default formReducer;
