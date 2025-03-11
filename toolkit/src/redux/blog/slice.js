import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogs, fetchById } from "./blogApi";

const initialState = {
  blogs: [],
  blog: {},
  isLoading: false,
  err: {},
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.err = action.payload;
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.blog = action.payload;
      });
  },
});

export const blogReducer = blogSlice.reducer;
