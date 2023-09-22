import { ADD_GUEST_DETAILS } from "./actionTypes";

export const saveFormData = (formData) => ({
  type: ADD_GUEST_DETAILS,
  payload: formData,
});
