import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { instance } from "../../utils/axios";
import { Link } from "react-router-dom";
import {
  PhoneOutlined,
  EllipsisOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../../utils/getDataFunction";
import { Avatar, Card, Skeleton, Switch } from "antd";
const { Meta } = Card;

const Users = () => {
  // const [users, setUsers] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   instance.get("/users").then((r) => {
  //     setUsers(r?.data);
  //     setLoading(false);
  //   });
  // }, []);

  const users = useQuery({
    queryKey: ["user"],
    queryFn: () => getData("/users"),
  });

  return (
    <Container>
      <Title>Users</Title>
      <UsersCont>
        {users?.data &&
          users?.data?.data?.map((u) => (
            <Card
              key={u?.id}
              style={{
                width: "100%",
              }}
              actions={[
                <a href={`mailto:${u?.email}`}>
                  <MailOutlined key={"mail"} style={{ fontSize: 18 }} />
                </a>,
                <a href={`tel:${u?.phone}`}>
                  <PhoneOutlined key={"phone"} style={{ fontSize: 18 }} />
                </a>,
                <Link to={`/users/${u?.id}`}>
                  <EllipsisOutlined key="ellipsis" style={{ fontSize: 18 }} />
                </Link>,
              ]}
            >
              <Skeleton loading={users?.isLoading} avatar active>
                <Meta
                  avatar={
                    <Avatar
                      size="large"
                      src={`https://robohash.org/${u?.id}`}
                    />
                  }
                  title={u?.username}
                  description={u?.name}
                />
              </Skeleton>
            </Card>
          ))}
      </UsersCont>
    </Container>
  );
};

export default Users;

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 40px;
`;
const UsersCont = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 300px));
  justify-content: space-evenly;
  row-gap: 40px;
`;
