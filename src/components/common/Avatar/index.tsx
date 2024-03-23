import { FC } from 'react';
import userPhoto from '../../../../src/assets/img/usr.png';
import { AvatarImg } from './styles';

type TypeAvatar = {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
};

export const Avatar: FC<TypeAvatar> = (props) => {
  const { src, alt, width = 100 } = props;

  return (
    <AvatarImg src={src || userPhoto} alt={alt} width={width} height={width} />
  );
};
