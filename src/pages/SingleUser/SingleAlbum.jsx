import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../utils/axios";
import { Pagination, Card } from "antd";
const { Meta } = Card;

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;
const Photos = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(5, minmax(150px, 200px));
  row-gap: 40px;
  column-gap: 20px;
`;
const Pag = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 40px;
`;

const SingleAlbum = () => {
  const [photos, setPhotos] = useState(null);
  const [current, setCurrent] = useState(1);
  const { albumId } = useParams();

  useEffect(() => {
    instance
      .get(`photos?albumId=${albumId}&_page=${current}&_limit=10`)
      .then((r) => {
        setPhotos(r?.data);
      });
  }, [current, albumId]);

  const onChange = (current) => {
    setCurrent(current);
  };

  return (
    <Container>
      <Photos>
        {photos &&
          photos.map((p) => (
            <Card
              key={p?.id}
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src={p?.thumbnailUrl} />}
            >
              <Meta description={p?.title} />
            </Card>
          ))}
      </Photos>
      <Pag>
        <Pagination current={current} onChange={onChange} total={50} />
      </Pag>
    </Container>
  );
};

export default SingleAlbum;
