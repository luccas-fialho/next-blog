import clsx from "clsx";
import React, { useId } from "react";

type InputCheckboxProps = {
  labelText?: string;
  type?: string;
} & React.ComponentProps<"input">;

const InputCheckbox = ({
  labelText = "",
  type = "checkbox",
  ...props
}: InputCheckboxProps) => {
  const id = useId();

  return (
    <div className="flex items-center gap-3">
      <input
        {...props}
        className={clsx("w-4 h-4 outline-none focus:ring-2 focus:ring-blue-500", props.className)}
        id={id}
        type={type}
      />

      {labelText && (
        <label className="text-sm" htmlFor={id}>
          {labelText}
        </label>
      )}
    </div>
  );
};

export default InputCheckbox;
