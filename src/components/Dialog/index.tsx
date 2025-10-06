"use client";
import clsx from "clsx";

type DialogProps = {
  isVisible?: boolean;
  title: string;
  content: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

const Dialog = ({
  isVisible = false,
  title,
  content,
  onCancel,
  onConfirm,
  disabled,
}: DialogProps) => {
  if (!isVisible) return null;

  const handleCancel = () => {
    if (disabled) return;
    onCancel();
  };

  return (
    <div
      className={clsx(
        "fixed",
        "z-50",
        "inset-0",
        "bg-black/50",
        "flex items-center justify-center"
      )}
      onClick={handleCancel}
    >
      <div
        className={clsx(
          "bg-slate-100",
          "max-w-2xl",
          "flex flex-col gap-6",
          "p-6",
          "rounded-lg",
          "shadow-lg shadow-black/30 text-center",
          "dark:bg-slate-800 dark:text-slate-200",
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="dialog-title" className="text-xl font-extrabold">
          {title}
        </h3>
        <div id="dialog-description">{content}</div>
        <div className="flex items-center justify-around">
          <button
            className={clsx(
              "bg-slate-300",
              "hover:bg-slate-400",
              "transition",
              "text-slate-950",
              "flex items-center justify-center",
              "py-2 px-4 rounded-lg cursor-pointer",
              "disabled:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed"
            )}
            autoFocus
            onClick={handleCancel}
            disabled={disabled}
          >
            Cancel
          </button>
          <button
            className={clsx(
              "bg-blue-500",
              "hover:bg-blue-600",
              "transition",
              "text-blue-50",
              "flex items-center justify-center",
              "py-2 px-4 rounded-lg cursor-pointer",
              "disabled:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed"
            )}
            onClick={onConfirm}
            disabled={disabled}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
