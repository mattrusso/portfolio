import { useEffect, useRef } from "react";
import Styles from "./modal.module.css";

export function Modal({
  onClose,
  children,
  title,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    ref.current?.showModal();
  }, []);

  return (
    <dialog
      className={Styles.wrapper}
      tabIndex={-1}
      aria-labelledby="modal-title"
      ref={ref}
      onClose={onClose}
    >
      <div className={Styles.header}>
        <h2 id="modal-title">{title}</h2>
        <button className={Styles.button} onClick={onClose}>
          Close
        </button>
      </div>
      <div className={Styles.content}>{children}</div>
    </dialog>
  );
}
