import { TypePhotos } from '../../../types/profileTypes';
import { Avatar } from '../../common/Avatar';
import { MessageUser } from './style';

type TypeUserProps = {
  hasNewMessages: boolean;
  id: number;
  lastDialogActivityDate: string;
  lastUserActivityDate: string;
  newMessagesCount: number;
  photos: TypePhotos;
  userName: string;
  setUserId: any;
};

export const User: React.FC<TypeUserProps> = (props) => {
  const {
    // hasNewMessages,
    id,
    // lastDialogActivityDate,
    // lastUserActivityDate,
    // newMessagesCount,
    photos,
    userName,
    setUserId
  } = props;

  const handleClick = () => {
    setUserId({ id, photos, userName });
  };

  return (
    <MessageUser onClick={handleClick}>
      <Avatar src={photos.small} alt="message user" width={50} height={50} />
      <p>{userName}</p>
    </MessageUser>
  );
};
