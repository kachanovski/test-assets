import React from "react";
import "./confirmModal.scss";
import { Button } from "../index";
import { Modal } from "../modal/modal";

interface IProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

export const ConfirmModal = ({
  open,
  message,
  onConfirm,
  onCancel,
  cancelText = "Отмена",
  confirmText = "Да",
}: IProps) => {
  const confirmHandler = () => {
    onConfirm();
  };
  const cancelHandler = () => {
    onCancel();
  };
  if (!open) {
    return null;
  }
  return (
    <Modal open={open} onClose={cancelHandler}>
      <div className={"confirm-modal-message"}>{message}</div>
      <div className={"confirm-modal-actions"}>
        <Button
          appearance={"primary"}
          onClick={cancelHandler}
          label={cancelText}
        />
        <Button onClick={confirmHandler} label={confirmText} />
      </div>
    </Modal>
  );
};
