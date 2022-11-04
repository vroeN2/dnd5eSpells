import { Box } from "grommet";
import styled from "styled-components";

export const SpellcardWrapper = styled(Box)`
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
