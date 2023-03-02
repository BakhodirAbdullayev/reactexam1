import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
// import { instance } from "../../utils/axios";
import { SiGooglemessages } from "react-icons/si";
import { MdOutlinePhotoLibrary, MdFormatListBulleted } from "react-icons/md";
import { Tabs, Card } from "antd";
import { getData } from "../../utils/getDataFunction";
import { useQuery } from "@tanstack/react-query";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 40px;
`;
const Name = styled.div`
  font-size: 36px;
  text-align: center;
  font-weight: 600;
  color: #0d4c92;
  line-height: 1;
`;
const Username = styled.div`
  line-height: 1;
  width: 100%;
  text-align: center;
  font-size: 26px;
  color: #59c1bd;
`;
const TabWrapper = styled.div`
  max-width: 900px;
  margin: 30px auto;
`;

const SingleUser = () => {
  // const [user, setUser] = useState(null);
  // const [tagData, setTagData] = useState([]);
  const [activeTag, setActiveTag] = useState("posts");

  const { id } = useParams();

  // useEffect(() => {
  //   instance.get(`/users/${id}`).then((r) => setUser(r.data));
  // }, [id]);

  const user = useQuery({
    queryKey: ["user"],
    queryFN: () => getData(`/users/${id}`),
    enabled: !!id,
  });

  // useEffect(() => {
  //   instance.get(`/users/${id + "/" + activeTag}`).then((r) => {
  //     setTagData(r.data);
  //   });
  // }, [activeTag]);

  const tagData = useQuery({
    queryKey: ["tagData"],
    queryFn: () => getData(`/users/${id + "/" + activeTag}`),
    enabled: !!activeTag,
    cacheTime: 0,
  });
  console.log(tagData);

  return (
    user?.data && (
      <Container>
        <Name>{user?.data?.data?.name}</Name>
        <Username>{user?.data?.data?.username}</Username>
        <TabWrapper>
          <Tabs
            onChange={(e) => setActiveTag(tabNav[e - 1].name)}
            defaultActiveKey="1"
            items={tabNav.map((t, i) => {
              const idx = i + 1;
              return {
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 5,
                      fontSize: 18,
                      lineHeight: 1,
                      textTransform: "capitalize",
                    }}
                  >
                    <span>{t.icon}</span>
                    <span>{t.name}</span>
                  </div>
                ),
                key: idx,
                children: tagData?.isLoading ? (
                  "Loading"
                ) : t.name == "posts" ? (
                  <Posts posts={tagData?.data?.data} id={id} />
                ) : t.name == "albums" ? (
                  <Albums albums={tagData?.data?.data} id={id} />
                ) : t.name == "todos" ? (
                  <Todos todos={tagData?.data?.data} />
                ) : null,
              };
            })}
          />
        </TabWrapper>
      </Container>
    )
  );
};

export default SingleUser;

const tabNav = [
  { name: "posts", icon: <SiGooglemessages /> },
  { name: "albums", icon: <MdOutlinePhotoLibrary /> },
  { name: "todos", icon: <MdFormatListBulleted /> },
];

const PostsContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 400px));
  justify-content: space-evenly;
  gap: 30px;
  a {
    color: #1677ff;
    &:hover {
      opacity: 0.5;
    }
  }
`;
const Posts = ({ posts, id }) => {
  return (
    <PostsContainer>
      {posts.map((p) => (
        <Card
          key={p?.id}
          size="small"
          title={p?.title}
          extra={
            <Link
              to={`/users/${id}/singlepost/${p.id}`}
              style={{
                display: "block",
                marginLeft: 10,
              }}
            >
              More
            </Link>
          }
          style={{
            width: "100%",
          }}
        >
          <p>{p?.body}</p>
        </Card>
      ))}
    </PostsContainer>
  );
};

const AlbumsWrapper = styled(PostsContainer)``;
const Albums = ({ albums, id }) => {
  return (
    <AlbumsWrapper>
      {albums.map((a, i) => (
        <Card
          key={a.id}
          title={
            <Link to={`/users/${id}/singlealbum/${a.id}`}>
              Show album №{i + 1}
            </Link>
          }
        >
          {a?.title}
        </Card>
      ))}
    </AlbumsWrapper>
  );
};

const TodosWrap = styled(Card)`
  width: 100%;
`;
const gridStyle = {
  width: "25%",
  textAlign: "center",
};
const Todos = ({ todos }) => {
  return (
    <TodosWrap bordered={false}>
      {todos &&
        todos.map((t, i) => (
          <Card.Grid style={gridStyle} key={i}>
            {t.title}
          </Card.Grid>
        ))}
    </TodosWrap>
  );
};
