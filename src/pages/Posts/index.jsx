import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { instance } from "../../utils/axios";
import { Link } from "react-router-dom";
import { Card, Pagination } from "antd";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  padding-top: 40px;
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
  color: #0d4c92;
`;
const AllPosts = styled.div`
  margin-top: 40px;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-evenly;
  row-gap: 40px;
  column-gap: 20px;
  a {
    color: #1677ff;
  }
`;
const Pag = styled.div`
  width: 100%;
  padding: 20px 0;
  display: grid;
  place-items: center;
`;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [current, setCurrent] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    instance
      .get(`/posts?_page=${current}&_limit=${limit}`)
      .then((r) => setPosts(r?.data));
  }, [current, limit]);

  return (
    <Container>
      <Title>All Posts</Title>
      <AllPosts>
        {posts.map((p) => (
          <Card
            key={p?.id}
            hoverable={true}
            type="inner"
            title={p?.title}
            extra={<Link to={`/posts/${p?.id}`}>More</Link>}
          >
            {p?.body}
          </Card>
        ))}
      </AllPosts>
      <Pag>
        <Pagination
          current={current}
          onChange={(e, l) => {
            setCurrent(e);
            setLimit(l);
          }}
          total={100}
          responsive={true}
        />
      </Pag>
    </Container>
  );
};

export default Posts;
