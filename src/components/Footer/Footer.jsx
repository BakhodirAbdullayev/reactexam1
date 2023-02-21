import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineCopyright } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaReact,
} from "react-icons/fa";

const social = [
  {
    icon: <FaFacebookF />,
    link: "https://facebook.com",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com",
  },
  {
    icon: <FaTelegramPlane />,
    link: "https://telegram.org",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://linkedin.com",
  },
];

const Container = styled.div`
  width: 100%;
  background-color: ${(p) => (p.dark ? "#1B262C" : "#bbe1fa")};
  padding: 60px 20px;
  border-top: 1px solid ${(p) => (p.dark ? "#bbe1fa" : "transparent")};
`;
const Title = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1;
`;
const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin: 30px auto;
`;
const SocialItem = styled.a`
  width: 40px;
  height: 40px;
  font-size: 20px;
  display: grid;
  place-items: center;
  background-color: #3282b8;
  border-radius: 50%;
  color: #fff;
`;
const Bottom = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Footer = () => {
  return (
    <Container>
      <Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        fugiat?
      </Title>
      <Social>
        {social.map((s, idx) => (
          <SocialItem href={s.link} key={idx} target="_blank">
            {s.icon}
          </SocialItem>
        ))}
      </Social>
      <Bottom>
        <AiOutlineCopyright /> {new Date().getFullYear()}
      </Bottom>
    </Container>
  );
};

export default Footer;
