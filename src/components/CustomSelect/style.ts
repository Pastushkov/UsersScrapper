import styled from "styled-components";

export const Select = styled.select`
  cursor: pointer;
  padding: 5px 7px;
  border-radius: 8px;
`;
export const Option = styled.option`
  cursor: pointer;
  font-size: 18px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Button = styled.button`
  padding: 5px 7px;
  border-radius: 8px;
  background-color: #8f8f8f;
  color: #fff;
  font-weight: 700;
  &:hover {
    background-color: #525252;
  }
`;

export const Label = styled.label`
font-size: 20px;
`