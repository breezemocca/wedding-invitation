import { styled } from "@stitches/react";
import { Divider } from "antd";
import {grey} from "@ant-design/colors";

const Wrapper = styled("div", {
  //background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
});

const Content = styled("div", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.75,
  width: "100%",
  textAlign: "center",
});

const GroomBride = styled("p", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.85,
  width: "100%",
  textAlign: "center",
});

const Small = styled("span", {
    fontSize: 16,
    fontColor : grey
})

type GrettingProps = {
  data?: Data;
};

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper>
      <Divider style={{ paddingTop: 100, marginTop: 0, marginBottom: 32 }} plain>
        <Title>결혼합니다</Title>
      </Divider>
      <GroomBride style={{ marginTop:30, marginBottom:50 }}>
        {data?.groom?.parents?.father?.name} ·{" "}
          {data?.groom?.parents?.mother?.name}<Small> 의 장남</Small> {data?.groom?.name}
        <br />
        {data?.bride?.parents?.father?.name} ·{" "}
          {data?.bride?.parents?.mother?.name}<Small> 의 장녀</Small> {data?.bride?.name}
      </GroomBride>
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
