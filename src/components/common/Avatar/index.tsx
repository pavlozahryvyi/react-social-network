import { FC } from 'react';
import styles from './Avatar.module.css';

type TypeAvatar = {
  src: string;
  alt: string;
};

export const Avatar: FC<TypeAvatar> = (props) => {
  const { src, alt } = props;

  return (
    <div>
      <img src={src} alt={alt} className={styles.avatar} />
    </div>
  );
};
