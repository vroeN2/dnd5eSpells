import styled from "styled-components";

interface IconProps {
  url: string;
}

export const Icon = styled.div<IconProps>`
  background: url(${(props) => props.url}) no-repeat;
  background-size: contain;
  width: 5vw;
  display: flex;
  z-index: 3;
`;
