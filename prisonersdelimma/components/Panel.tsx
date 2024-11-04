import React from 'react';
import { ReactNode, FC } from 'react';

type FlexibleBoxProps = {
  children?: ReactNode;
  styles: string;
};

const Panel: FC<FlexibleBoxProps> = ({ children, styles }) => {
  return (
    <div className={styles}>
      {children}
    </div>
  );
};

export default Panel;