import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../utils/axios";
import { Card } from "antd";
import { Comments } from "../SingleUser/SinglePost";

const Container = styled(Card)`
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
`;
const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 8px;
  line-height: 1;
`;
const PostTitle = styled.div`
  max-width: 700px;
  font-size: 22px;
  font-weight: 600;
`;
const PostUserData = styled.div`
  text-align: right;
  line-height: 1;
`;
const Name = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
const UserName = styled.p`
  font-size: 18px;
  opacity: 0.85;
`;
const PostText = styled.div`
  width: 90%;
  margin: 20px auto;
  text-align: justify;
  font-size: 18px;
`;

const SinglePost = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [postUser, setPostUSer] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    instance.get(`/posts/${postId}`).then((r) => setPost(r?.data));
    instance.get(`/posts/${postId}/comments`).then((r) => setComments(r?.data));
  }, [postId]);

  useEffect(() => {
    instance.get(`/users/${postId}`).then((r) => setPostUSer(r?.data));
  }, [post]);

  return (
    <Container>
      <Head>
        <PostTitle>{post?.title}</PostTitle>
        <PostUserData>
          <Name>{postUser?.name}</Name>
          <UserName>{postUser?.username}</UserName>
        </PostUserData>
      </Head>
      <PostText>{post?.body}</PostText>
      <Comments comments={comments} />
    </Container>
  );
};

export default SinglePost;
