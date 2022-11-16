import styled from "styled-components";

export const SpellcardWrapper = styled.div`
  background: white;
  opacity: 0.8;
  color: #0f0f0f;
  border-radius: 10px;
  display: flex;
  padding: 2rem;
  position: relative;
  flex-direction: column;
  width: 500px;
  height: 300px;
  margin: 2rem;
  transition: 0.15s ease all;

  &:hover {
    opacity: 1;
  }
`;

export const SaveIconWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  transition: 0.15s all ease;
  color: #bbb;

  &:hover {
    color: #023020;
    cursor: pointer;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;

export const SpellDetails = styled.p`
  color: #528173;

  & span {
    font-weight: 700;
    color: #23392e;
    margin-right: 0.25rem;
  }
`;
