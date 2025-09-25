// src/components/Button/Button.tsx
import type { FC } from "react";
import { colors } from "../../theme/colors";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button style={{ backgroundColor: colors.primary, color: colors.textPrimary }}
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

export default Button;
