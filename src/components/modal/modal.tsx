import React from "react";
import "./modal.scss";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

interface IProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ open, onClose, children }: IProps) => {
  const closeHandler = () => {
    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    <div onClick={closeHandler} className={"modal"}>
      <div className={"modal-container"}>
        <div onClick={(e) => e.stopPropagation()} className={"modal-content"}>
          <CloseIcon
            onClick={closeHandler}
            className={"modal-content-closeIcon"}
          />
          {children}
        </div>
      </div>
    </div>
  );
};
