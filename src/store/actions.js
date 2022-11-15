import { createAction } from "@reduxjs/toolkit";

// export const FILTER_ACTION = "FILTER";
// export const ADD_ACTION = "ADD";

export const addProductAction = createAction("ADD_ACTION");
export const filterProductAction = createAction("FILTER_ACTION");
