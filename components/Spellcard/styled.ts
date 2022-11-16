import styled from "styled-components";

export const SpellcardWrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  color: #0f0f0f;
  border-radius: 10px;
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  width: 500px;
  height: 350px;
  margin: 2rem;
  transition: 0.15s ease all;

  &:hover {
    background: rgba(255, 255, 255, 1);
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

export const SpellDetails = styled.p`
  color: #528173;
  margin-bottom: 0.15rem;
  font-size: 0.9375rem;

  & span {
    font-size: 1rem;
    font-weight: 700;
    color: #23392e;
    margin-right: 0.25rem;
  }
`;

export const SpellName = styled.h2`
  /* font-size: 1.625rem; */
  font-size: 2.15rem;
  margin-bottom: 0.15rem;
`;
