import React from 'react';
import { Triangle } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

export const Loader = () => (
  <SpinnerWrapper>
    <Triangle
      height={80}
      width={80}
      color="#0d2bdb"
      ariaLabel="triangle-loading"
      visible={true}
    />
  </SpinnerWrapper>
);
