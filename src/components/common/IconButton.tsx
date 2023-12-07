import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: white;
`;

interface IIconButtonProps {
  Icon: any;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: any;
  disabled?: boolean;
}

export const IconButton: React.FC<IIconButtonProps> = (props) => {
  const {
    Icon,
    onClick = () => null,
    type = 'button',
    className,
    disabled
  } = props;

  return (
    <Button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      <Icon />
    </Button>
  );
};
