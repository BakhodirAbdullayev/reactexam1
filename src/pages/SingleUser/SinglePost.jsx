import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../utils/axios";
import { Card } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../../utils/getDataFunction";

const Post = styled.div`
  max-width: 1000px;
  margin: 70px auto;
  text-align: center;
  font-weight: 600;
  color: #0d4c92;
`;
const Title = styled.div`
  font-size: 32px;
  max-width: 900px;
  margin: 0 auto;
  line-height: 0.7;
  font-family: "Courier New", Courier, monospace;
`;
const Body = styled.p`
  opacity: 0.8;
  line-height: 1;
  margin-top: 10px;
`;
const CommentsWrap = styled(Card)`
  width: 100%;
  max-width: 800px;
  margin: 50px auto;
  text-align: left !important;
  i {
    color: #0d4c92;
    display: block;
    margin-left: 10px;
  }
`;

const SinglePost = () => {
  // const [post, setPost] = useState(null);
  // const [comments, setComments] = useState([]);
  const { postId } = useParams();

  const post = useQuery({
    queryKey: ["singlePost"],
    queryFn: () => getData(`/posts/${postId}`),
    enabled: !!postId,
  });

  const comments = useQuery({
    queryKey: ["comments"],
    queryFn: () => getData(`/comments?postId=${postId}`),
    enabled: !!postId,
  });

  // useEffect(() => {
  //   instance.get(`/posts/${postId}`).then((r) => setPost(r?.data));
  //   instance
  //     .get(`/comments?postId=${postId}`)
  //     .then((r) => setComments(r?.data));
  // }, [postId]);

  return (
    <div>
      <Post>
        <Title>{post?.data?.data?.title}</Title>
        <Body>{post?.data?.data?.body}</Body>
        <Comments comments={comments?.data?.data} />
      </Post>
    </div>
  );
};

export default SinglePost;

export const Comments = ({ comments }) => {
  return (
    <CommentsWrap title="Comments">
      {comments.map((c) => (
        <Card
          key={c.id}
          type="inner"
          title={c?.title}
          style={{ marginBottom: 15 }}
        >
          <i>{c?.email}</i>
          <p>{c?.body}</p>
        </Card>
      ))}
    </CommentsWrap>
  );
};
