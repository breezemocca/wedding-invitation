import styled from '@emotion/styled';
//import data from 'data.json';
import Button from '@/components/Button';
import React from "react";

const Container = styled.div`
  background-image: url('/assets/GroovePaper.png');
  padding: 16px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
`;

const Paragraph = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  text-align: center;
`;

type MapButtonsProps = {
    data?: Data;
};
const MapButtons = ({ data }: MapButtonsProps) => {
  //const { naverMap, kakaoMap } = data.mapInfo;
    const { naverMap = '' , kakaoMap = '' } = data?.mapInfo || {};

    const tmap="https://tmap.life/711242f7";

  return (
    <Container>
      <Paragraph>원하시는 앱을 선택하시면 길안내가 시작됩니다.</Paragraph>
        <MapButtonWrapper>
            <Button onClick={() => window.open(naverMap)}>네이버 지도</Button>
            <Button onClick={() => window.open(kakaoMap)}>카카오맵</Button>
            <Button onClick={() => window.open(tmap)}>티맵</Button>
        </MapButtonWrapper>
    </Container>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 8px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;
