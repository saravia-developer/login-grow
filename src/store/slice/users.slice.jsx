import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import { useSelector } from "react-redux";
import { fetching } from "../../utils/fetching.js";

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: []
  },
  reducers: {
    findAllUsers: (state, action) => { state.value = action.payload }
  }
});

export const findAllUsersForPagination = (pagination, elementsPerPage) => async (dispatch) => {
  dispatch(setIsLoading(true));
  
  const response = await fetching(
    `http://localhost:3000/v1/users?limit=${elementsPerPage}&offset=${ (pagination - 1) * elementsPerPage }`
  );

  dispatch(findAllUsers(response));
  dispatch(setIsLoading(false));
}

export const findUsersByNameThunk = (search) => async (dispatch) => {
  dispatch(setIsLoading(true));

  const formatName = search.split(" ").join("-");
  const response = await fetching(
    `http://localhost:3000/v1/users/name/${formatName}`
  );

  dispatch(findAllUsers(response));
  dispatch(setIsLoading(false));
}

export const { findAllUsers } = usersSlice.actions;

export default usersSlice.reducer