// src/components/SettingItem.tsx
import type { FC, ReactNode } from "react";
import { Row, Meta, Title, Description, Control } from "./styles";

type Props = {
  title: string;
  description?: string;
  control?: ReactNode;
  children?: ReactNode; };

export const SettingItem: FC<Props> = ({ title, description, control, children }) => {
  return (
    <Row>
      <Meta>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Meta>
      <Control>{control ?? children}</Control>
    </Row>
  );
};

export default SettingItem;
