import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { PropsWithChildren, ReactNode } from "react";

import { FiX } from "react-icons/fi";

export interface ControlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BaseModal({
  title,
  children,
  isOpen,
  onClose,
}: {
  title?: ReactNode;
} & PropsWithChildren &
  ControlModalProps) {
  return (
    <Dialog
      as="div"
      open={isOpen}
      onClose={onClose}
      transition
      className="relative z-10 focus:outline-none inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-150 ease-out data-[closed]:opacity-0"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="w-full max-w-4xl rounded-2xl bg-white p-5">
            <div className="flex items-center mb-6">
              <DialogTitle
                as="h3"
                className="text-2xl/7 flex items-center gap-x-2 font-medium flex-1"
              >
                {title}
              </DialogTitle>
              <CloseButton>
                <FiX size={20} />
              </CloseButton>
            </div>

            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
