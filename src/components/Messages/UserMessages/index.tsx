import { useSelector } from 'react-redux';
import {
  useGetUserMessagesQuery,
  useSendMessageMutation
} from '../../../features/api/messagesApiSlice';
import { TypeMessage } from '../../../types/messagesTypes';
import Preloader from '../../common/Preloader/Preloader';
import { Message } from './Message';
import { selectAuthData } from '../../../selectors/authSelector';
import { TypePhotos } from '../../../types/profileTypes';
import { Avatar } from '../../common/Avatar';
import { MessagesStyled, UserMessagesBlock, UserMessageStyled } from './style';
import { SendMessage } from '../../common/SendMessage';

type TypeUserMessagesProps = {
  id: number;
  photos: TypePhotos;
  userName: string;
};

export const UserMessages: React.FC<TypeUserMessagesProps> = (props) => {
  const { id, photos } = props;

  const { data, isLoading } = useGetUserMessagesQuery(id);

  const { id: senderId, login: senderName } = useSelector(selectAuthData);

  const [sendMessage] = useSendMessageMutation();

  const handleSendMessage = (message: string) => {
    sendMessage({
      recipientId: id,
      body: { body: message },
      senderId,
      senderName
    });
  };

  if (isLoading) return <Preloader />;

  return (
    <UserMessagesBlock>
      <MessagesStyled>
        {data.items.map((msgItem: TypeMessage) => (
          <UserMessageStyled
            key={msgItem.id}
            $isCurrentUserSender={msgItem.senderId === senderId}
          >
            <Avatar src={photos.large} width={20} alt="Message avatar" />
            <Message
              message={msgItem.body}
              isCurrentUserSender={msgItem.senderId === senderId}
            />
          </UserMessageStyled>
        ))}
      </MessagesStyled>
      <SendMessage sendMessage={handleSendMessage} />
    </UserMessagesBlock>
  );
};
