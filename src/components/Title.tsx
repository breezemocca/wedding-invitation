import { styled } from "@stitches/react";
import { Divider } from "antd";
import {white} from "next/dist/lib/picocolors";

const Layout = styled("div", {
  //width: "100%",
  //height: "100vh",
  height: "100%",
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
});

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "17%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "white",
  //textShadow: "-1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e",
  animation: "fadein 3s",
  "-moz-animation": "fadein 3s" /* Firefox */,
  "-webkit-animation": "fadein 3s" /* Safari and Chrome */,
  "-o-animation": "fadein 3s" /* Opera */,
});

const ImageBackground = styled("img", {
  backgroundColor: "#aeb8b3 !important",
  opacity: 0.9,
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
  minHeight: 480,
});

const GroomBride = styled("p", {
  fontSize: 20,
  opacity: 0.8,
  marginBottom: 16,
});

const Schedule = styled("p", {
  fontSize: 18,
  opacity: 0.65,
  marginBottom: 24,
});

type TitleProps = {
  data?: Data;
};

export default function Title({ data }: TitleProps) {
  return (
      <Layout>
        <ImageBackground src="./assets/BackgroundImage.jpg" alt="Wedding Background" />
        <TitleWrapper>
          <GroomBride>
            {data?.host?.groom?.name} 🍀 {data?.host?.bride?.name}
          </GroomBride>
          <Schedule>
            {data?.date}
            <br />
            {data?.location}
          </Schedule>
        </TitleWrapper>
      </Layout>
  );
}
