import { ADD_GUEST_DETAILS, DELETE_GUEST_DETAILS } from "./actionTypes";

const initialState = {
  formData: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GUEST_DETAILS:
      return {
        ...state,
        formData: action.payload,
      };
      case DELETE_GUEST_DETAILS:
        const updatedData = state.formData.filter(
          (row) => !action.payload.includes(row.id)
        );
        return {
          ...state,
          formData: updatedData,
        };
    default:
      return state;
  }
};

export default formReducer;
