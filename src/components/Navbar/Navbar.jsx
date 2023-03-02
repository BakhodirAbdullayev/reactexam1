import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { AuthContext } from "../../utils/context";
import {
  UserOutlined,
  LogoutOutlined,
  ExclamationCircleFilled,
  EditOutlined,
} from "@ant-design/icons";
import { Dropdown, Modal, Space } from "antd";

const { confirm } = Modal;

const Container = styled.div`
  width: 100%;
  max-width: 1340px;
  padding: 20px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e6e6e6;

  position: fixed;
  top: 0;
  left: 50%;
  z-index: 999;
  transform: translateX(-50%);
`;
const Bottom = styled.div`
  width: 100%;
  height: 80px;
`;
const NavLogo = styled(Link)`
  font-size: 32px;
  font-weight: 600;
  color: #0d4c92;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const NavbarLinksWrapper = styled(Right)`
  gap: 15px;
  @media screen and (max-width: 700px) {
    position: fixed;
    top: 80px;
    left: ${(p) => (p.bool ? "0px" : "-100%")};
    width: 50%;
    background-color: #f2f4f8;
    height: calc(100vh - 80px);
    flex-direction: column;
    padding-top: 40px;
  }
`;
const NavbarLink = styled(NavLink)`
  padding: 5px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    opacity: 0.7;
    color: #59c1bd;
  }
  &.active {
    color: #0d4c92;
    opacity: 1;
  }
`;
const Sign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  border-radius: 3px;
  background-color: rgba(160, 228, 203, 0.4);
  font-size: 15px;
  font-weight: 600;
  a:first-child {
    border-right: 2px solid #5837d0;
  }
`;
const SignLink = styled(Link)`
  padding: 0 10px;
  display: block;
  line-height: 1.2;
  color: #0d4c92;
  &:hover {
    opacity: 0.5;
  }
`;
const Account = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  &:hover {
    color: #59c1bd;
  }
`;

const Navbar = () => {
  const { inUser, setInUser } = useContext(AuthContext);
  const [bool, setBool] = useState(false);

  const showConfirm = () => {
    confirm({
      title: "Do you Want to log out?",
      icon: <ExclamationCircleFilled />,
      content: "You can log in again after logging out",
      onOk() {
        setInUser(null);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const items = [
    {
      label: "Manage account",
      key: "1",
      icon: (
        <EditOutlined
          style={{
            fontSize: 16,
          }}
        />
      ),
    },
    {
      label: "Sign out",
      key: "2",
      icon: (
        <LogoutOutlined
          style={{
            fontSize: 16,
          }}
        />
      ),
      onClick: () => {
        showConfirm();
      },
    },
  ];

  return (
    <>
      <Container>
        <NavLogo>Logo</NavLogo>
        <Right>
          <NavbarLinksWrapper bool={bool}>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/users">Users</NavbarLink>
            <NavbarLink to="/posts">Posts</NavbarLink>
          </NavbarLinksWrapper>
          <NavBtns>
            <LinksBtn onClick={() => setBool((e) => !e)}>
              <HiBars3 />
            </LinksBtn>
            {inUser ? (
              <Account>
                <Dropdown
                  menu={{
                    items: [
                      {
                        label: inUser?.username,
                        key: 0,
                      },
                      {
                        type: "divider",
                      },
                      ...items,
                    ],
                  }}
                  trigger={["click"]}
                >
                  <a onClick={(e) => e.preventDefault()} className="accIcon">
                    <Space
                      style={{
                        fontSize: 22,
                        cursor: "pointer",
                      }}
                    >
                      <UserOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Account>
            ) : (
              <Sign>
                <SignLink to="/signin">Sign In</SignLink>
                <SignLink to="/signup">Sign Up</SignLink>
              </Sign>
            )}
          </NavBtns>
        </Right>
      </Container>
      <Bottom />
    </>
  );
};

export default Navbar;

const NavBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const LinksBtn = styled.button`
  font-size: 20px;
  border: none;
  outline: none;
  background: none;
  display: none;
  place-items: center;
  cursor: pointer;
  @media screen and (max-widht: 700px) {
    display: grid;
  }
`;
