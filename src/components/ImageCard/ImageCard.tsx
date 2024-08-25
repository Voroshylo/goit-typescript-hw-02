import React from "react";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: {
    urls: {
      small: string;
    };
    alt_description: string | null;
  };
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const { urls, alt_description } = image;
  return (
    <div className={css.div} onClick={onClick}>
      <img
        className={css.img}
        src={urls.small}
        alt={alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;
