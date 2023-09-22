import { ADD_GUEST_DETAILS, DELETE_GUEST_DETAILS } from "./actionTypes";

export const saveFormData = (formData) => ({
  type: ADD_GUEST_DETAILS,
  payload: formData,
});

export const removeSelectedRows = (idsToRemove) => ({
  type: DELETE_GUEST_DETAILS,
  payload: idsToRemove,
});
