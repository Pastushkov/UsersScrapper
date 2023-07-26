import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { fetchComments } from "./store/actions";
import { RootState } from "../../redux/reducers";
import { Loader } from "../../components/loader/Loader";
import { Comment, Header } from "./style";
import { BackArrow } from "../../assets/svgs";

const Comments: FC = (props) => {
  const [id, setId] = useState<null | string>(null);
  const { list, isLoading } = useSelector(({ comments }: RootState) => ({
    list: comments.list,
    isLoading: comments.isLoading,
  }));

  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const id = location.pathname.split("/")[2];
    setId(id);
    if (id) {
      dispatch(fetchComments(id));
    }
  }, [location]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <Loader isLoading={isLoading}>
        <Header>
          <BackArrow className="arrow" onClick={goBack} /> Comments for post #
          {id}
        </Header>
        {list?.map(({ email, body }) => (
          <Comment>
            <div className="email">{email}</div>
            <div className="body">{body}</div>
          </Comment>
        ))}
      </Loader>
    </div>
  );
};
export default Comments;
