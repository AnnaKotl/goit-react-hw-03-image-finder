import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
`;

export const ModalImage = styled.img`
  width: 100%;
  max-height: 90vh;
  display: block;
  margin: 0 auto;
`;
