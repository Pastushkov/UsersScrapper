import styled, { keyframes } from "styled-components";

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
    z-index: 1;
  }
  100% {
    transform: scale(1.05);
    z-index: 2;
  }
`;

const returnAnimation = keyframes`
  from {
    transform: scale(1.05);
    z-index: 2;
  }
  to {
    transform: scale(1);
    z-index: 1;
  }
`;

export const Post = styled.div`
  max-width: 350px;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  .title {
    font-size: 20px;
    font-weight: 800;
    border-bottom: 2px dashed;
    text-align: center;
    margin-bottom: 5px;
  }
  .body {
    font-size: 18px;
  }
  &:hover {
    animation: ${hoverAnimation} 0.5s ease-in-out forwards;
  }
  &:not(:hover) {
    animation: ${returnAnimation} 0.3s ease-in-out forwards;
  }
`;

export const ForUser = styled.div`
  text-align: center;
  margin: 10px;
  font-size: 18px;
`;