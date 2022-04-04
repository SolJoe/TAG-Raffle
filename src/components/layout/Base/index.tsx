import React, { FC } from 'react';
import background from '../../../assets/images/homepage_bg.png';

import { useStyles } from './styles';

export interface BaseProps {}

export const Base: FC<BaseProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div className={"base"} style={{backgroundImage: `url("${background}"`}}></div>
      <div className={classes.content}>{children}</div>
    </>
  );
};

export default Base;
