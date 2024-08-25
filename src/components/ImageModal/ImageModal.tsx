import React from "react";
import css from "./ImageModal.module.css";
import { Image } from "../../App.types";
import Modal from "react-modal";

interface ImageCardProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
}

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageCardProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  if (!image) return null;
  return (
    <div className={css.div}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <p>{image.description || image.alt_description}</p>
        <img
          src={image.urls.regular}
          alt={image.alt_description || "Image"}
          className={css.image}
        />
        <button className={css.btn} onClick={onRequestClose}>
          X
        </button>
      </Modal>
    </div>
  );
};

export default ImageModal;
