import { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid white;
  border-radius: 15px;
  text-align: center;
  padding: 10px;
  &:hover {
    text-decoration: underline;
    background: #ffffff2e;
  }
`;

interface ISimpleButtonProps {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const SimpleButton: React.FC<ISimpleButtonProps> = ({
  children,
  type,
  onClick,
  disabled
}) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
