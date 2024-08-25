import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import React from "react";

interface Image {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string | null;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={css.ul}>
      {images.map((image) => (
        <li key={image.id} className={css.li}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
