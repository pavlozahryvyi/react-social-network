import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 3px 7px;
  border-radius: 10px;
  &::placeholder {
    opacity: 0.5;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Textarea: React.FC<React.ComponentPropsWithoutRef<'textarea'>> = ({
  ...props
}) => {
  return <StyledTextarea {...props} />;
};
