import React from 'react';
import { Triangle } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

export const Loader = () => (
  <SpinnerWrapper>
    <Triangle
      height={200}
      width={200}
      color="#0d2bdb"
      ariaLabel="triangle-loading"
      visible={true}
    />
  </SpinnerWrapper>
);
