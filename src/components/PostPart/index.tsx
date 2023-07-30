import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { ForUser, Post } from "./style";
import { IPost } from "../../modules/users/store/types";

interface IProps {
  posts: IPost[];
  selectedUser?: number | null;
}

const PostPart: FC<IProps> = ({ posts, selectedUser }) => {
  const history = useHistory();

  return (
    <>
      {selectedUser && (
        <ForUser>
          Posts for user <b>#{selectedUser}</b>
        </ForUser>
      )}
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