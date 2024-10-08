import React from "react";
import styled from "styled-components";
import { Divider, Button } from "antd";
import { EnvironmentOutlined, CarOutlined } from '@ant-design/icons';
import dynamic from "next/dynamic";
import JsonData from "@/data.json";
const Map = dynamic(() => import("@/components/Map"), {
    ssr: false,
    loading: () => <p>Loading map...</p>,
});
const MapButtons = dynamic(() => import("@/components/MapButtons"), { ssr: false });

const Wrapper = styled.div`
    textAlign: "center";
`;

const Container = styled.div`
  background-image: url('/assets/GroovePaper.png');
  padding: 16px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  opacity: 0.85;
  text-align: center;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px 0;
`;

const Content = styled.div`
  font-size: 18px;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;

const Link = styled.a`
  color: #1890ff; /* 링크의 색상 */
  text-decoration: none;

  &:hover {
    text-decoration: underline; /* 마우스 오버 시 밑줄 */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;
`;

const ButtonStyled = styled(Button)`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const IconText = styled.span`
  margin-left: 8px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${({ color }) => color || "black"};
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`;

const ListItem = styled.div`
  margin-bottom: 4px;
`;

const Navigation = () => {
    return (
        <Container>
            <Wrapper>
                <Divider style={{ paddingTop: 0, marginTop: 0, marginBottom: 32 }} plain>
                    <Title style={{ fontSize:50 }}>‍🗺️</Title>
                </Divider>
            </Wrapper>
            <Title>
                서울웨딩타워
            </Title>
            <Content style={{paddingBottom:30}}>
                서울송파구 양재대로 932 가락몰 SAFF타워 2F
            </Content>
            <Map />
            <MapButtons data={JsonData} />
            <Divider />

            <Subtitle>지하철</Subtitle>
            <ListItem>
                <Dot color="orange" /> 3호선, <Dot color="magenta" />8호선 가락시장역 2번 출구
            </ListItem>

            <Divider />

            <Subtitle>버스</Subtitle>
            <ListItem>
                <Dot color="blue" />
                가락시장.가락시장역.가락몰 하차
            </ListItem>
            <ListItem>
                <Paragraph>
                    <Dot color="grey" /> 일반 : 16, 101, 30, 32, 119, 31, 87, 100, 331
                </Paragraph>
                <Paragraph>
                    <Dot color="blue" /> 간선 : 16, 101, 30, 32, 119, 31, 87, 100, 331
                </Paragraph>
                <Paragraph>
                    <Dot color="green" /> 지선 : 3413, 3416, 3319, 3317, 3422, 3011, 3217, 3420
                </Paragraph>
                <Paragraph>
                    <Dot color="red" /> 직행 : 1007, 500-1. 1009, 1112, 1117, 1650, 5600, 5700A, 5700B, G2100, G6009, 3302 
                </Paragraph>
                <Paragraph>
                    <Dot color="red" /> 시외 : 1801, 8141, 8147, 8153, 8143, 1312, 1309
                </Paragraph>
                <Paragraph>
                    <Dot color="red" /> 광역 : 9403, M5333
                </Paragraph>
                <Paragraph>
                    <Dot color="lightblue" /> 공항 : 6300
                </Paragraph>
            </ListItem>

            <Divider />

            <Subtitle>자가용</Subtitle>
            <ListItem>
                <Dot color="black" />
                네비게이션 : <b>서울웨딩타워</b> 검색
            </ListItem>
            <ListItem>
                <Paragraph>
                    주소검색 <b>서울특별시 송파구 가락동 600</b> 입력
                </Paragraph>
            </ListItem>
            <ListItem>
                <Dot color="black" />
                주차장 안내
            </ListItem>
            <ListItem>
                <Paragraph>
                    가락시장 지하주차장(2000대)
                </Paragraph>
                <Paragraph>
                    <Link href="https://blog.naver.com/swtower7/220832517674" target="_blank" rel="noopener noreferrer">
                       - 가락시장 동문주차장 입구 안내
                    </Link>
                </Paragraph>
                <Paragraph>
                    <Link href="https://blog.naver.com/swtower7/220832543932" target="_blank" rel="noopener noreferrer">
                       - 가락시장 남문1주차장 입구 안내
                    </Link>
                </Paragraph>
            </ListItem>
        </Container>
    );
};

export default Navigation;
