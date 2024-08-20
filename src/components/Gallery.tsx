import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const images = Array.from({ length: 28 }, (_, i) => {
  const index = i + 1; // index starts from 1
  const fileName = `Gallery_Photo_${index}.jpg`;
  return {
    original: `./assets/${fileName}`,
    thumbnail: `./assets/thumnail/${fileName}`,
  };
});

export default function Gallery() {
  return (
      <Wrapper>
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>우리의 아름다운 순간</Title>
        </Divider>
        <ImageGallery
            showPlayButton={false}
            showFullscreenButton={false}
            items={images}
        />
      </Wrapper>
  );
}