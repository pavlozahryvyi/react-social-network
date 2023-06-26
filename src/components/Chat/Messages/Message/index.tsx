import { NavLink } from 'react-router-dom';

type ChatMessageType = {
  userId: number;
  userName: string;
  message: string;
  photo: string;
};

export const Message: React.FC<ChatMessageType> = (props) => {
  const { userId, userName, photo, message } = props;

  return (
    <div>
      <NavLink to={`/profile/${userId}`}>
        <img src={photo} alt="User" />
      </NavLink>
      <div>
        <div>{userName}</div>
        <div>{message}</div>
      </div>
    </div>
  );
};
