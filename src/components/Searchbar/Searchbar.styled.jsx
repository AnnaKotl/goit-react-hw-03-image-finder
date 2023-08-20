import styled from 'styled-components';

  // #fff56b, 
  // #fff866,
  // #fdfa63,
  // #e7fb61,
  // #d0fb62,
  // #b5fa65, 
  // #97f86, 
  // #73f670, 
  // #3cf, 
  // #00ee82, 
  // #00ea8f, 
  // #00e69d, 
  // #00e2ad, 
  // #00dfbe, 
  // #00dbd, 
  // #00d8e3, 
  // #00d6f6;
  
export const SearchBarWrapper = styled.header`
  background-color: #00dfbe;
  padding: 16px 20px;
  border-radius: 4px;
  width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  transition: 
    transform 0.3s ease;

  &:hover,
  &:active {
    transform: scale(1.05);
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #fff866;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 
    0px 10px 15px -3px, 
    rgba(0, 0, 0, 0.05) 
    0px 4px 6px -2px;
  padding: 9px;
  color: rgba(8, 43, 64, 0.9);
  cursor: pointer;
  margin-left: 10px;
  border-radius: 4px;
  transition: 
    transform 0.3s ease, 
    box-shadow 0.4s ease;

  &:hover,
  &:active {
    background-color: #f5ed5a;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 9px;
  outline: none;
  border: 1px transparent;
  width: 280px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 
    0px 10px 15px -3px, 
    rgba(0, 0, 0, 0.05) 
    0px 4px 6px -2px;
  transition: 
    transform 0.3s ease, 
    box-shadow 0.4s ease;

  &::placeholder {
    color: rgba(15, 152, 100, 0.5);
    font-size: 19px;
  }

  &:focus,
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;


