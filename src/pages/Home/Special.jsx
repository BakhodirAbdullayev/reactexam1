import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  /* width: 100%; */
  max-width: 1240px;
  margin: 80px auto;
  padding: 20px;
  display: grid;
  justify-content: space-between;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(200px, 360px));
  h1 {
    font-weight: 600;
    font-size: 46px;
  }
  div {
    line-height: 1.5;

    a {
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 2px;
      margin-top: 15px;
      border-bottom: 2px solid #59c1bd;
      display: block;
      width: max-content;
      transition: 0.3s;
      &:hover {
        color: #59c1bd;
      }
    }
  }
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 80px;
  margin: 50px auto 0;
  background-color: #111;
  color: #fff;
  a {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
    margin-top: 15px;
    border-bottom: 2px solid #59c1bd;
    display: block;
    width: max-content;
    transition: 0.3s;
    &:hover {
      color: #59c1bd;
    }
  }
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  text-transform: capitalize;
`;
const Text = styled.p`
  font-size: 20px;
  margin: 30px 0 45px;
  line-height: 1.5;
`;
const End = styled.div`
  width: 100%;
  padding: 80px 20px;
  background-color: #0d4b921b;
`;
const Head = styled.div`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
`;
const Cards = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  display: grid;
  justify-content: space-between;
  gap: 15px;
  grid-template-columns: repeat(3, minmax(220px, 380px));
`;
const Card = styled.div`
  background-color: #f9f9f9;
  img {
    width: 100%;
    object-fit: cover;
  }
  p {
    font-weight: 400;
    font-style: italic;
    font-size: 16px;
    padding: 15px 25px;
  }
`;

const Special = () => {
  return (
    <>
      <Container>
        <h1>This place is special...</h1>
        <div>
          Due to its commanding position, in the Second World War the Fort House
          was used by the military as an observation post and even had the roof
          reinforced to protect it from an aerial attack, with two feet of
          concrete, making it bomb proof from enemy aircraft. With its historic
          harbour, rockpools and sandy beaches St Mawes provides the idyllic
          Cornish escape and The Fort House the perfect property in which to
          stay
        </div>
        <div>
          This spacious and airy single storey holiday cottage sits in a private
          garden whose terrace provides uninterrupted views of the spectacular
          Cornish coastline. A short walk leads you in to the centre of the
          picturesque fishing village of St Mawes with its whitewashed cottages,
          galleries character pubs and restaurants.
          <Link>Learn more</Link>
        </div>
      </Container>
      <Wrapper>
        <Title>our mission</Title>
        <Text>
          Forest Therapy is a research-based framework for supporting healing
          and wellness through immersion in forests and other natural
          environments. Forest Therapy is inspired by the Japanese practice of
          Shinrin-Yoku, which translates to "forest bathing." Studies have
          demonstrated a wide array of health benefits, especially in the
          cardiovascular and immune systems, and for stabilizing and improving
          mood and cognition
        </Text>
        <Link to="#">Learn more</Link>
      </Wrapper>

      <End>
        <Head>You Might Also Like</Head>
        <Cards>
          {cards.map((c, i) => (
            <Card key={i}>
              <img src={c.img} alt="c.text" />
              <p>{c.text}</p>
            </Card>
          ))}
        </Cards>
      </End>
    </>
  );
};

export default Special;

const cards = [
  {
    img: "https://images01.nicepage.com/c3/24/c32438b58444b511f6eedfee2795f7b4.jpeg",
    text: "Snapping Shrimp 'Dinner Bell' May Tell Gray Whales When to Eat",
  },
  {
    img: "https://images01.nicepage.com/cd/53/cd53f9dd09091d2ad91e2c4d2a7092be.jpeg",
    text: "Get Up Close With Wildlife in Mexico's Magdalena Bay",
  },
  {
    img: "https://images01.nicepage.com/25/0a/250ab14c9bea31df467ae4d07e3dc9e0.jpeg",
    text: "Where It's Okay to Pet the Whales",
  },
];
