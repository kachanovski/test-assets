import React from "react";
import "./successModal.scss";
import { ReactComponent as SuccessIcon } from "../../assets/icons/coolicon.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

interface IProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const SuccessModal = ({ open, onClose, children }: IProps) => {
  const closeHandler = () => {
    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    <div onClick={closeHandler} className={"notification-modal"}>
      <div className={"notification-modal-container"}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={"notification-modal-content"}
        >
          <CloseIcon
            onClick={closeHandler}
            className={"notification-modal-closeIcon"}
          />
          <div className={"success-icon-container"}>
            <SuccessIcon width={19} height={15} />
          </div>
          <>{children}</>
        </div>
      </div>
    </div>
  );
};
