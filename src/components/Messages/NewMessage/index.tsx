import { Field, Form, Formik } from 'formik';
import { useSendMessageMutation } from '../../../features/api/messagesApiSlice';
import { useSelector } from 'react-redux';
import { selectAuthData } from '../../../selectors/authSelector';

type TypeMewMessage = {
  userId: number;
};

type TypeForm = {
  body: string;
};

export const NewMessage: React.FC<TypeMewMessage> = (props) => {
  const { userId: recipientId } = props;

  const { id: senderId, login: senderName } = useSelector(selectAuthData);

  const [sendMessage] = useSendMessageMutation();

  const handleSubmit = (body: TypeForm) => {
    sendMessage({ recipientId, body, senderId, senderName });
  };

  return (
    <div>
      <Formik initialValues={{ body: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field type="textarea" name="body" />
          <button type="submit">SEND</button>
        </Form>
      </Formik>
    </div>
  );
};
