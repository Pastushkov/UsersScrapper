import { AxiosResponse } from "axios";
import axiosInstance from "../../../services/axiosInstance";

const COMMENTS_URL = "/comments";

export const getCommentsByPost = (id: any): Promise<AxiosResponse<any>> =>
  axiosInstance.get(`${COMMENTS_URL}?postId=${id}`);
