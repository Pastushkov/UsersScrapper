import React, { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Wrapper, Container } from "./style";
import { Loader } from "../../components/loader/Loader";
import { RootState } from "../../redux/reducers";
import { fetchPosts, fetchUserList } from "./store/actions";
import CustomSelect from "../../components/CustomSelect";
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

  const option = useMemo(() => {
    if (!list) return [];
    return [
      ...list.map(({ id, name }) => ({
        value: id,
        label: name,
      })),
      {
        label: "-",
        value: "",
      },
    ];
  }, [list]);

  const handleUserChange = (value: number | null) => {
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
          <div />
          <div>
            <CustomSelect
              options={option}
              onChange={(value :number | null) => handleUserChange(value)}
              label="Select User"
            />
            <div>
              <PostPart
                posts={posts.slice(0, 10)}
                selectedUser={selectedUser}
              />
            </div>
          </div>
        </Container>
      </Loader>
    </Wrapper>
  );
};
export default Users;