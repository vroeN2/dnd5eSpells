import styled from "styled-components";
import { MenuItem } from "./Navbar/styled";

export const ErrorPageLinks = styled(MenuItem)`
  color: white;
  text-shadow: 0px 0px 2px #1d1d1d;
  &::after {
    transition: 0.4s;
  }
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  height: 0.25rem;
  margin-top: -1.5rem;
  background: white;
`;

export const MainWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
`;
