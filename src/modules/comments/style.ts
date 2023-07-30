import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-weight: 800;
  font-size: 32px;

  align-items: center;

  .arrow {
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;
export const Comment = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  max-width: 550px;
  margin-top: 10px;

  border: 1px solid;
  padding: 5px;
  border-radius: 8px;
  .email {
    font-weight: 800;
    font-size: 20px;
  }
  .body {
    font-size: 18px;
    text-align: justify;
  }
`;