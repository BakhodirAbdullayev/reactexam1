import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import styled from "styled-components";

const counter = [
  { num: 16, name: "specialist" },
  { num: 700, name: "clients" },
  { num: 37, name: "cases" },
  { num: 40, name: "awards" },
];

const Container = styled.div`
  width: 100%;
  padding: 80px 20px;
  background-color: rgba(13, 75, 146, 0.7);
  text-align: center;
  color: #fff;
`;
const Title = styled.div`
  font-size: 46px;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
`;
const Text = styled.p`
  max-width: 700px;
  margin: 30px auto;
`;
const CounterWrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  grid-template-columns: repeat(4, minmax(130px, 200px));
`;
const Counter = styled.div`
  margin-top: 80px;
  h1 {
    font-size: 62px;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
    text-transform: uppercase;
  }
`;

const About = () => {
  const [bool, setBool] = useState(false);
  return (
    <Container>
      <Title>About Us & Our Work</Title>
      <Text>
        We provide expert Business Coaching to both individuals and businesses.
        With over 30 years of experience we’ll ensure that you’re always getting
        the best guidance from the top people in the entire industry.
      </Text>
      <ScrollTrigger
        onEnter={() => setBool(true)}
        onExit={() => setBool(false)}
      >
        <CounterWrapper>
          {counter.map((c, i) => (
            <Counter ke={i}>
              <h1>
                {bool && (
                  <CountUp start={0} end={c.num} delay={0.2} duration={2} />
                )}
              </h1>
              <p>{c.name}</p>
            </Counter>
          ))}
        </CounterWrapper>
      </ScrollTrigger>
    </Container>
  );
};

export default About;
