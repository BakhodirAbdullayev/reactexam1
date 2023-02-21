import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

const items = [
  {
    link: "https://i.pinimg.com/originals/e1/57/ae/e157aeb3affdb54f483049ca3c1d5706.jpg",
  },
  {
    link: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg",
  },
  {
    link: "https://wallpaperaccess.com/full/1566614.jpg",
  },
  {
    link: "https://wallpaperaccess.com/full/1566603.jpg",
  },
];

const Container = styled.div`
  width: 100%;
`;
const IntroItem = styled.div`
  width: 100%;
  padding: 180px 20px;
  color: #fff;
  background-position: center center;
  background-size: cover;
  background-image: url(${(p) => p.bg});
  position: relative;

  &::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Content = styled.div`
  max-width: 550px;
  margin-left: auto;
  margin-right: 40px;
  text-align: right;
  position: relative;
  z-index: 10;
`;
const Heading = styled.h1`
  font-weight: 600;
  font-size: 38px;
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  width: 80%;
  margin: 20px 0 40px;
  margin-left: auto;
`;
const More = styled(Link)`
  border-bottom: 2px solid #fff;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: bold;
  &:hover {
    color: #59c1bd;
    border-color: #59c1bd;
  }
`;
const Cards = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 380px));
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  /* position: relative;
  top: -100px;
  z-index: 100; */
`;

const Card = styled.div`
  padding: 10px;
  background-color: #cff5e7;
  border-radius: 3px;
  transition: 0.3s;
  a {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    padding: 5px;
    text-align: center;
    display: block;
  }
  &:hover {
    box-shadow: 0px 10px 13px -7px #000000;
    transform: scale(1.01);
    filter: brightness(0.7);
  }
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 2px;
`;

const Intro = () => {
  return (
    <>
      <Container>
        <Carousel autoplay={true}>
          {items.map((c, i) => (
            <IntroItem key={i} bg={c.link}>
              <Content>
                <Heading>Look Deep Into The Nature</Heading>
                <Text>
                  NATURE WILL BEAR THE CLOSEST INSPECTION. SHE INVITES US TO LAY
                  OUR EYE LEVEL WITH HER SMALLEST LEAF, AND TAKE AN INSECT VIEW
                  OF ITS PLAIN.
                </Text>
                <More to="#">learn more</More>
              </Content>
            </IntroItem>
          ))}
        </Carousel>
      </Container>
      <Cards>
        {cards.map((c, i) => (
          <Card key={i}>
            <Image src={c.img} />
            <Link to="#">{c.title}</Link>
          </Card>
        ))}
      </Cards>
    </>
  );
};

export default Intro;

const cards = [
  {
    title: "FOREST THERAPY",
    img: "https://images02.nicepage.com/c461c07a441a5d220e8feb1a/4c7d8810ccb457c6a71d8f7b/rf.jpg",
  },
  {
    title: "30 best beaches",
    img: "https://images02.nicepage.com/c461c07a441a5d220e8feb1a/a2c4d8642899536c99b439b3/fds.jpg",
  },
  {
    title: "wild nature",
    img: "https://images02.nicepage.com/c461c07a441a5d220e8feb1a/48f7c7f6a53c5b019012f6fa/s.jpg",
  },
];
