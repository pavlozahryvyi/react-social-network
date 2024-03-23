import { Textarea } from './Textarea';

interface IControlledTextareaFieldProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  placeholder?: string;
  type?: string;
}

export const ControlledTextarea: React.FC<IControlledTextareaFieldProps> = ({
  placeholder,
  ...props
}) => {
  return <Textarea placeholder={placeholder} {...props} />;
};
