import { API } from "../../config/api";
import { DELETE_BLOG, GET_BLOGS, LOADING, POST_BLOGS } from "./ActionType";

export const fetchBlogs = () => async (dispatch) => {
  dispatch({type:LOADING})
  let res = await API.get("/blogs");
  // console.log(res);
  // dispatch(getBlogs(res.data));
  dispatch({ type: GET_BLOGS, payload: res.data });
};

export const createBlogs = (payload) => async (dispatch) => {
  let res = await API.post("/blogs", payload);
  dispatch({ type: POST_BLOGS, payload: res.data });
};
// const getBlogs = (payload) => ({ type: GET_BLOGS, payload: payload });

export const deleteBlogs = (id) => async (dispatch) => {
  let res = await API.delete(`/blogs/${id}`);
  dispatch({ type: DELETE_BLOG, payload: id });
};
