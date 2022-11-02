import styled from "styled-components";
import { Box, TextInput } from "grommet";

export const ArcanesWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  background: url("assets/bg_1.png") no-repeat center center fixed;
  background-size: cover;
`;

export const SearchbarWrapper = styled(Box)`
  width: 100vw;
  height: 15vh;
  position: fixed;
  top: 10vh;
  left: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled(TextInput)`
  width: 30vw;
  background: white;
  color: #111;
`;
