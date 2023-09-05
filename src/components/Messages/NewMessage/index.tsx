import { Field, Form, Formik } from 'formik';
import { useSendMessageMutation } from '../../../features/api/messagesApiSlice';

type TypeMewMessage = {
  userId: number;
};

type TypeForm = {
  body: string;
};

export const NewMessage: React.FC<TypeMewMessage> = (props) => {
  const { userId } = props;

  const [sendMessage] = useSendMessageMutation();

  const handleSubmit = (formData: TypeForm) => {
    sendMessage({ id: userId, body: formData });
  };

  return (
    <div>
      <Formik
        initialValues={{ body: '' }}
        // validate={formValidate}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="textarea" name="body" />
          <button type="submit">SEND</button>
        </Form>
      </Formik>
    </div>
  );
};
