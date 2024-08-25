import { styled } from "@stitches/react";
import { Divider } from "antd";
import {grey} from "@ant-design/colors";

const Wrapper = styled("div", {
  //background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: 20,
  fontWeight: "bold",
  opacity: 0.85,
});

const Content = styled("div", {
  fontSize: 20,
  lineHeight: 1.75,
  opacity: 0.75,
  width: "100%",
  textAlign: "center",
});

const GroomBride = styled("p", {
  fontSize: 20,
  lineHeight: 1.75,
  opacity: 0.85,
  width: "100%",
  textAlign: "center",
});

type GrettingProps = {
  data?: Data;
};

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper>
      <Divider style={{ paddingTop: 100, marginTop: 0, marginBottom: 32 }} plain>
          <Title style={{ fontSize:50 }}>‍👰🏻‍ ‍🤵🏽</Title>
      </Divider>
      <GroomBride style={{ marginTop:30, marginBottom:30 }}>
        {data?.groom?.parents?.father?.name} ·{" "}
          {data?.groom?.parents?.mother?.name}<small> 의 장남</small> {data?.groom?.name}
        <br />
        {data?.bride?.parents?.father?.name} ·{" "}
          {data?.bride?.parents?.mother?.name}<small> 의 장녀</small> {data?.bride?.name}
      </GroomBride>
      <Content style={{ marginTop:50 }}>
        둘이 하나가 되어 더<br /> 행복해져 보려 합니다.
      </Content>
      <Content style={{ marginTop:50, marginBottom:50 }}> 🍀</Content>
      <Content>
          {data?.gretting?.split("\n")?.map((value, index) => {
              return (
                  <div key={index}>
                      {value}
                      <br />
                  </div>
              );
          })}
      </Content>
    </Wrapper>
  );
}
