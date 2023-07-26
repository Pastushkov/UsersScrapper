import { AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosInstance";

const USER_URLS = "/users";
const POSTS_URL = "/posts";

export const getUsersList = (): Promise<AxiosResponse<any>> =>
  axiosInstance.get(`${USER_URLS}`);

export const getPosts = (): Promise<AxiosResponse<any>> =>
  axiosInstance.get(`${POSTS_URL}`);

export const getPostsByUser = (id: any): Promise<AxiosResponse<any>> =>
  axiosInstance.get(`${POSTS_URL}?userId=${id}`);
