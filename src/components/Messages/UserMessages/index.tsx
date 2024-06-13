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
import styled from 'styled-components';
import { UserMessagesBlock } from './style';
import { SendMessage } from '../../common/SendMessage';

const UserMessageBlock = styled.div<{ $isCurrentUserSender: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: ${(props) =>
    props.$isCurrentUserSender ? 'row-reverse' : 'row'};
`;

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
      Messages
      {data.items.map((msgItem: TypeMessage) => (
        <UserMessageBlock
          key={msgItem.id}
          $isCurrentUserSender={msgItem.senderId === senderId}
        >
          <Avatar src={photos.large} width={20} alt="Message avatar" />
          <Message
            message={msgItem.body}
            isCurrentUserSender={msgItem.senderId === senderId}
          />
        </UserMessageBlock>
      ))}
      <SendMessage sendMessage={handleSendMessage} />
    </UserMessagesBlock>
  );
};
