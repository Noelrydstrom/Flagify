import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
`;

export const Meta = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const Description = styled.div`
  font-size: 12px;
  color: #6b7280;
  line-height: 1.2;
`;

export const Control = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;