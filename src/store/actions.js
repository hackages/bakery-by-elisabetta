export const FILTER_ACTION = "FILTER";
export const ADD_ACTION = "ADD";

export function filterAction(payload) {
  return {
    type: FILTER_ACTION,
    payload,
  };
}

export function addAction(payload) {
  return {
    type: ADD_ACTION,
    payload,
  };
}
