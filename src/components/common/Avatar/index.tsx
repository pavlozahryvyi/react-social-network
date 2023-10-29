import { FC } from 'react';
import styles from './Avatar.module.css';
import userPhoto from '../../../../src/assets/img/usr.png';
import styled from 'styled-components';

const AvatarImg = styled.img`
  border-radius: 50%;
`;

type TypeAvatar = {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
};

export const Avatar: FC<TypeAvatar> = (props) => {
  const { src, alt, width = 100 } = props;

  return (
    <AvatarImg
      src={src || userPhoto}
      alt={alt}
      className={styles.avatar}
      width={width}
      height={width}
    />
  );
};
