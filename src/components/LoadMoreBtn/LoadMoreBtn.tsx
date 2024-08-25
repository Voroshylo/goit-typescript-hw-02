import React from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button type="button" onClick={onClick} className={css.btn}>
    Load more...
  </button>
);

export default LoadMoreBtn;
