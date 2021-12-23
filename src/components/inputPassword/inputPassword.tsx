import React, { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import "./inputPassword.scss";
import { ReactComponent as ShowPassword } from "../../assets/icons/showPassword.svg";
import { ReactComponent as HidePassword } from "../../assets/icons/hidePassword.svg";
import cn from "classnames";

type IInputType = "password" | "type";

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register?: any;
  name?: string;
  placeholder?: string;
  appearance?: "default" | "error";
}

export const InputPassword = ({
  register,
  name,
  placeholder,
  appearance = "default",
  ...rest
}: IProps) => {
  const [inputType, setInputType] = useState<IInputType>("password");
  const changeInputType = () => {
    setInputType(inputType === "password" ? "type" : "password");
  };
  return (
    <div className={"input-password-container"}>
      <input
        placeholder={placeholder}
        className={cn("input-password", [
          { ["error"]: appearance === "error" },
        ])}
        type={inputType}
        {...register(name)}
        {...rest}
      />
      <div className={"input-password-icons"}>
        {inputType === "password" ? (
          <ShowPassword className={"icon"} onClick={changeInputType} />
        ) : (
          <HidePassword className={"icon"} onClick={changeInputType} />
        )}
      </div>
    </div>
  );
};
