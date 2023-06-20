import React, { ReactNode, Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader';

type SuspenseComponentPropsTypes = {
  children: ReactNode;
};

const SuspenseComponent: React.FC<SuspenseComponentPropsTypes> = (props) => (
  <Suspense fallback={<Preloader />}>{props.children}</Suspense>
);

export default SuspenseComponent;
