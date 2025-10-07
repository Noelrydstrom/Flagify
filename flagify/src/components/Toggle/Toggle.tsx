// src/components/Toggle.tsx
import type { FC } from "react";
import { ToggleLabel, HiddenCheckbox, Slider } from "./styles";

type ToggleProps = {
  id?: string;
  checked: boolean;
  onChange: (next: boolean) => void;
  ariaLabel?: string;
};

export const Toggle: FC<ToggleProps> = ({ id, checked, onChange, ariaLabel }) => {
  return (
    <ToggleLabel htmlFor={id}>
      <HiddenCheckbox
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-label={ariaLabel}
      />
      <Slider checked={checked} aria-hidden />
    </ToggleLabel>
  );
};

export default Toggle;
