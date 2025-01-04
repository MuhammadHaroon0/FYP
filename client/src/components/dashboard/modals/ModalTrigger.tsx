import React, { ReactNode, useState } from "react";
import { ControlModalProps } from "./BaseModal";

export function ModalTrigger({
  children,
  Modal,
  modalProps,
}: {
  children: ReactNode;
  Modal: React.ComponentType<ControlModalProps>;
  modalProps?: Record<any, any>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  children = React.Children.only(children);
  const triggerElement =
    children &&
    React.cloneElement(children as any, {
      onClick: () => setIsOpen(true),
    });

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      {triggerElement}
      <Modal {...modalProps} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
