// src/components/Button/Button.tsx
import type { FC } from "react";
import type { ReactNode } from "react";
import { StyledButton } from "./styles"; // import renamed styled-component

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
