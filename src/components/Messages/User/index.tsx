import { TypePhotos } from '../../../types/profileTypes';
import { Avatar } from '../../common/Avatar';

type TypeUserProps = {
  hasNewMessages: boolean;
  id: number;
  lastDialogActivityDate: string;
  lastUserActivityDate: string;
  newMessagesCount: number;
  photos: TypePhotos;
  userName: string;
  setUserId: Function;
};

export const User: React.FC<TypeUserProps> = (props) => {
  const {
    hasNewMessages,
    id,
    lastDialogActivityDate,
    lastUserActivityDate,
    newMessagesCount,
    photos,
    userName,
    setUserId
  } = props;

  const handleClick = () => {
    setUserId(id);
  };

  return (
    <div>
      <Avatar src={photos.small} alt="message user" width={50} height={50} />
      <p onClick={handleClick}>{userName}</p>
    </div>
  );
};
