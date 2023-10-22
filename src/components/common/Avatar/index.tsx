import { FC } from 'react';
import styles from './Avatar.module.css';
import userPhoto from '../../../../src/assets/img/usr.png';

type TypeAvatar = {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
};

export const Avatar: FC<TypeAvatar> = (props) => {
  const { src, alt, width = 100 } = props;

  return (
    <div>
      <img
        src={src || userPhoto}
        alt={alt}
        className={styles.avatar}
        width={width}
        height={width}
      />
    </div>
  );
};
