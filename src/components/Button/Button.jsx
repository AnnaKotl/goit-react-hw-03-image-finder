import React from 'react';
import styled from 'styled-components';

const LoadMoreButton = styled.button`
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  color: white;
  cursor: pointer;
`;

export const Button = ({ show, onClick }) => (
  <LoadMoreButton show={show} onClick={onClick}>
    Load More
  </LoadMoreButton>
);
