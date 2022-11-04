import styled from "styled-components";
import { Box, TextInput } from "grommet";

export const ArcanesWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: relative;
  display: flex;
  background: url("assets/bg_1.png") no-repeat center center fixed;
  background-size: cover;
`;

export const ListWrapper = styled.div`
  margin-top: 25vh;
  display: flex;
  align-items: center;
  padding: 0 10vw;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SearchbarWrapper = styled(Box)`
  transition: 0.15s all ease;
  background: ${(props) => props.color};
  z-index: 3;
  width: 100vw;
  height: 15vh;
  position: fixed;
  top: 10vh;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 1px;
    z-index: 1;
    box-shadow: ${(props) =>
      props.color === "transparent" ? "0px" : "0px 1px 3px 1px #1d1d1d"};
  }
`;

export const SearchBar = styled(TextInput)`
  width: 30vw;
  background: white;
  color: #111;
`;
