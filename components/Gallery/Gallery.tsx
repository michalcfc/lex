
import {
    GalleryWrapper,
    GalleryTitle,
    GalleryImage,
    GalleryImageZoom,
    GalleryImgArrow
} from "./Gallery.styles"
import React, {useState} from "react";
import { GalleryProps } from "./Gallery.d"
import Grid from "@components/Grid";
import Modal from "@components/Modal";
import Flexbox from "@components/Flexbox";


const Gallery: React.FC<GalleryProps> = ({
    images
 }) => {

    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const [currentImg, setCurrentImg] = useState<number>(null)

    const nextImg = () => {
        if(currentImg < images.length - 1) {
            setCurrentImg(currentImg + 1)
        } else if(currentImg === images.length - 1) {
            setCurrentImg(0)
        }
    }

    const prevImg = () => {
        if(currentImg < images.length && currentImg != 0) {
            setCurrentImg(currentImg - 1)
        }
    }

    const renderImages = () => {
        return <>
            {images?.map((img, id) => (
                <GalleryImage
                    key={id}
                    src={img.image.url}
                    onClick={() => {
                        setModalOpen(true)
                        setCurrentImg(id)
                    }}
                />
            ))}
        </>
    }

    const renderImagePreview = () => (
        <Modal
            autoWidth
            isOpen={isModalOpen}
            title={"Galeria zdjęć"}
            isClose={() =>  setModalOpen(false)}
        >
            <Flexbox>
                <GalleryImgArrow onClick={() =>prevImg()}>
                    &lt;
                </GalleryImgArrow>

                <div>
                {images?.map((img, id) => {
                    if (currentImg == id) {
                        return <GalleryImageZoom
                            key={id}
                            src={img.image.url}
                            onClick={() => setModalOpen(true)}
                        />
                    }
                })}
                </div>

                <GalleryImgArrow onClick={() =>nextImg()}>
                    &gt;
                </GalleryImgArrow>

            </Flexbox>
        </Modal>
    )

    const gallery = renderImages()
    const imagePreview = renderImagePreview()

    return (
        <GalleryWrapper>
            <GalleryTitle>
                Galeria zdjęć
            </GalleryTitle>
            <Grid
                gridGap="30px"
                columns="repeat(auto-fit, minmax(160px, 1fr));"
            >
                {gallery}
            </Grid>

            {imagePreview}
        </GalleryWrapper>
    )
}

export default Gallery