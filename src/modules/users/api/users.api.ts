import { AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosInstance";
import { FetchPosts } from "../store/types";

const USER_URLS = "/users";
const POSTS_URL = "/posts";

export const getUsersList = (): Promise<AxiosResponse<any>> =>
  axiosInstance.get(`${USER_URLS}`);

  export const getPosts = (
    id: FetchPosts["payload"]
  ): Promise<AxiosResponse<any>> =>
    axiosInstance.get(`${POSTS_URL}${id ? `?userId=${id}` : ""}`);
