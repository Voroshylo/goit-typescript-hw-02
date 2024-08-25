import React from "react";
import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className={css.div}>
    <p className={css.p}>{message}</p>
  </div>
);

export default ErrorMessage;
