import React, { FC } from "react";
import { Post } from "./style";
import { IPost } from "../../modules/users/store/types";
import { useHistory } from "react-router-dom";

interface IProps {
  posts: IPost[];
}

const PostPart: FC<IProps> = ({ posts }) => {
  const history = useHistory();

  return (
    <>
      {posts?.map(({ body, title, id }) => (
        <Post
          onClick={() => {
            history.push(`/comments/${id}`);
          }}
          key={id}
        >
          <div className="title">{title}</div>
          <div className="body">{body}</div>
        </Post>
      ))}
    </>
  );
};
export default PostPart;
