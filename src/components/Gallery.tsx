import React, { useState } from "react";
import { Divider, Button, Modal } from "antd";
import { styled } from "@stitches/react";

const Wrapper = styled("div", {
    backgroundImage: "url(./assets/GroovePaper.png)",
    width: "100%",
});

const Title = styled("p", {
    fontSize: "2vh",
    fontWeight: "bold",
    opacity: 0.85,
    marginBottom: 0,
    textAlign: "center",
});

const ThumbnailsGrid = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "8px",
    marginBottom: "16px",
});

const ThumbnailImage = styled("img", {
    width: "100%",
    cursor: "pointer",
    borderRadius: "4px",
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
    const [showAllImages, setShowAllImages] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleShowMore = () => {
        setShowAllImages(true);
    };

    const handleThumbnailClick = (image: string) => {
        setSelectedImage(image);
    };

    const handleModalClose = () => {
        setSelectedImage(null);
    };

    return (
        <Wrapper>
            <Divider plain style={{ paddingTop: 100, marginBottom: 32 }}>
                <Title>Gallery</Title>
            </Divider>
            <ThumbnailsGrid>
                {images.slice(0, showAllImages ? images.length : 9).map((image, index) => (
                    <ThumbnailImage
                        key={index}
                        src={image.thumbnail}
                        onClick={() => handleThumbnailClick(image.original)}
                    />
                ))}
            </ThumbnailsGrid>
            {!showAllImages && (
                <Button type="primary" onClick={handleShowMore} style={{ display: "block", margin: "0 auto", backgroundColor:"white", color:"black", width:200, height:40, marginTop:30 }}>
                    더 보기
                </Button>
            )}
            <Modal visible={!!selectedImage} footer={null} onCancel={handleModalClose} centered>
                {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: "100%" }} />}
            </Modal>
        </Wrapper>
    );
}
