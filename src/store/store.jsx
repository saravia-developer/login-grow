import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from './slice/pagination.slice';
import loadingSlice from './slice/isLoading.slice';
import usersSlice from './slice/users.slice';

export default configureStore({
  reducer: {
    pagination: paginationSlice,
    loading: loadingSlice,
    users: usersSlice
  },
})