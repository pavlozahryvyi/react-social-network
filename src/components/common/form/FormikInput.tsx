import { Field } from 'formik';
import styled from 'styled-components';

const StyledInput = styled(Field)`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 3px 7px;
  border-radius: 10px;
  &::placeholder {
    opacity: 0.5;
    color: rgba(255, 255, 255, 0.5);
  }
`;

interface IProps {
  name: string;
  placeholder?: string;
  type?: string;
}

export const InputField: React.FC<IProps> = ({
  name,
  placeholder,
  type = 'text'
}) => {
  return <StyledInput type={type} name={name} placeholder={placeholder} />;
};
