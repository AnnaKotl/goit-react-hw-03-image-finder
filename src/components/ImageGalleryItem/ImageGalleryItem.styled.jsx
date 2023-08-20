import styled from 'styled-components';

export const GalleryItem = styled.li`
  border: none;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  transition: 
    transform 0.3s ease,
    box-shadow 0.3s ease;  

  &:hover,
  &:active {
    transform: scale(1.04);
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
`;