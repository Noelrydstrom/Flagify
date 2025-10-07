import styled from "styled-components";
import { colors } from "../../theme/colors";

export const ToggleLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  border: 0;
  white-space: nowrap;
`;

export const Slider = styled.span<{ checked?: boolean }>`
  display: inline-block;
  width: 48px;
  height: 28px;
  border-radius: 9999px;
  background: ${(p) =>
    p.checked ? colors.secondary : colors.toggleBackground};
  position: relative;
  transition: background 0.25s ease;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${colors.textPrimary};
    transform: translateX(${(p) => (p.checked ? "20px" : "0")});
    transition: transform 0.25s ease, background 0.25s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }
`;
