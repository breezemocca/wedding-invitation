import React, { useState } from "react";
import { Divider, Modal } from "antd";
import { styled } from "@stitches/react";

const Wrapper = styled("div", {
    backgroundImage: "url(./assets/GroovePaper.png)",
    width: "100%",
});

const Title = styled("p", {
    fontSize: 20,
    fontWeight: "bold",
    opacity: 0.85,
});

const Content = styled("div", {
    fontSize: 18,
    lineHeight: 1.75,
    opacity: 0.75,
    width: "100%",
    textAlign: "center",
});

const ThumbnailsGrid = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1px",
    marginBottom: "16px",
});

const ThumbnailImage = styled("img", {
    width: "100%",
    cursor: "pointer",
    borderRadius: "0px",
});

const images = Array.from({ length: 28 }, (_, i) => {
    const index = i + 1; // index starts from 1
    const fileName = `Gallery_Photo_${index}.jpg`;
    return {
        original: `./assets/${fileName}`,
        thumbnail: `./assets/thumnail/${fileName}`,
    };
});

const ArrowButton = styled("button", {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "transparent",
    border: "none",
    fontSize: "2rem",
    color: "white",
    cursor: "pointer",
    zIndex: 10,
    "&:hover": {
        color: "gray",
    },
});

const PrevButton = styled(ArrowButton, {
    left: "10px",
});

const NextButton = styled(ArrowButton, {
    right: "10px",
});

export default function Gallery() {
    const [showAllImages, setShowAllImages] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const handleShowMore = () => {
        setShowAllImages(true);
    };

    const handleThumbnailClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const handleModalClose = () => {
        setSelectedImageIndex(null);
    };

    const handleNext = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % images.length);
        }
    };

    const handlePrev = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <Wrapper>
            <Divider plain style={{ paddingTop: 100, marginBottom: 32 }}>
                <Title style={{ fontSize: 50 }}>📸</Title>
            </Divider>
            <Content style={{ paddingTop: 30, marginBottom: 32 }}>
                제주도, 가파도, <br />
                그리고 프랑스 파리까지.
            </Content>
            <ThumbnailsGrid>
                {images.slice(0, showAllImages ? images.length : 9).map((image, index) => (
                    <ThumbnailImage
                        key={index}
                        src={image.thumbnail}
                        onClick={() => handleThumbnailClick(index)}
                    />
                ))}
            </ThumbnailsGrid>
            {!showAllImages && (
                <button
                    type="button"
                    onClick={handleShowMore}
                    style={{
                        display: "block",
                        margin: "0 auto",
                        backgroundColor: "white",
                        color: "black",
                        width: 200,
                        height: 40,
                        marginTop: 30,
                        marginBottom: 100,
                    }}
                >
                    더 보기
                </button>
            )}
            <Modal
                visible={selectedImageIndex !== null}
                footer={null}
                onCancel={handleModalClose}
                centered
                bodyStyle={{ padding: 0 }}
            >
                {selectedImageIndex !== null && (
                    <div style={{ position: "relative" }}>
                        <PrevButton onClick={handlePrev}>{"<"}</PrevButton>
                        <img
                            src={images[selectedImageIndex].original}
                            alt="Selected"
                            style={{ width: "100%" }}
                        />
                        <NextButton onClick={handleNext}>{">"}</NextButton>
                    </div>
                )}
            </Modal>
        </Wrapper>
    );
}