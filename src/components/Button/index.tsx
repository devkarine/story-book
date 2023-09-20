import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";
import { ButtonStyledProps } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyledProps & {
    label: string;
    icon?: React.ReactNode;
  };

export const Button = ({ label, icon, ...rest }: ButtonProps) => {
  return (
    <S.Button {...rest}>
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </S.Button>
  );
};
