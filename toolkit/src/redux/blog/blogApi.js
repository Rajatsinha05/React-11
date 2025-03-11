// export const fetchBlogs=()=>async(dispatch)=>{
//     // api
//     // dispatch()
// }

import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config/api";

export const fetchBlogs = createAsyncThunk(
  "blogs/getBlogs",
  async (_, { rejectWithValue }) => {
    try {
      let res = await API.get("/blogs");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "Error fetching");
    }
  }
);
export const fetchById = createAsyncThunk(
  "blogs/getById",
  async (Id, { rejectWithValue }) => {
    try {
      let res = await API.get(`/blogs/${Id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "Error fetching");
    }
  }
);
