import React, { FC, useEffect, useMemo, useState } from "react";
import { Header, Wrapper, Container } from "./style";
import { Loader } from "../../components/loader/Loader";
import { RootState } from "../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchUserList } from "./store/actions";
import Select from "../../components/select";
import PostPart from "../../components/PostPart";

const Users: FC = () => {
  const dispatch = useDispatch();

  const [selectedUser, setSelectedUser] = useState<null | number>(null);

  const { list, isLoading, posts } = useSelector(({ users }: RootState) => ({
    list: users.list,
    isLoading: users.isLoading,
    posts: users.posts,
  }));

  useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchUserList());
    }
  }, [list]);

  const option = useMemo(
    () =>
      list?.map(({ id, name }) => ({
        value: id,
        label: name,
      })),

    [list]
  );

  const handleUserChange = (value: any) => {
    setSelectedUser(value);
  };

  useEffect(() => {
    dispatch(fetchPosts(selectedUser));
  }, [selectedUser]);

  return (
    <Wrapper>
      <Header>Users Scrapper</Header>
      <Loader isLoading={isLoading}>
        <Container>
          <div></div>
          <div>
            Select User:{" "}
            <Select
              options={[...option, { label: "-", value: "" }]}
              onChange={(value) => handleUserChange(value)}
            ></Select>
            <div>
              <PostPart posts={posts.slice(0, 10)} />
            </div>
          </div>
        </Container>
      </Loader>
    </Wrapper>
  );
};
export default Users;
