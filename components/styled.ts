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
  width: 30%;
  height: 0.25rem;
  margin-top: -1.5rem;
  background: white;
`;

export const MainWrapper = styled.div`
  background: rgb(35, 57, 46);
  background: linear-gradient(
    121deg,
    rgba(35, 57, 46, 1) 30%,
    rgba(82, 129, 115, 1) 60%,
    rgba(31, 31, 31, 1) 95%
  );
`;
