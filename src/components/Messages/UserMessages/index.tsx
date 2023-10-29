import { useSelector } from 'react-redux';
import { useGetUserMessagesQuery } from '../../../features/api/messagesApiSlice';
import { TypeMessage } from '../../../types/messagesTypes';
import Preloader from '../../common/Preloader/Preloader';
import { NewMessage } from '../NewMessage';
import { Message } from './Message';
import { selectAuthData } from '../../../selectors/authSelector';
import { TypePhotos } from '../../../types/profileTypes';
import { Avatar } from '../../common/Avatar';
import styled from 'styled-components';
import { UserMessagesBlock } from './style';

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
  const { userName, id, photos } = props;

  const { data, isLoading } = useGetUserMessagesQuery(id);

  const { id: senderId, login: senderName } = useSelector(selectAuthData);

  if (isLoading) return <Preloader />;

  console.log('---data.items', data.items);

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
      <NewMessage userId={id} />
    </UserMessagesBlock>
  );
};
