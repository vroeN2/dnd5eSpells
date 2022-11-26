import styled from "styled-components";

interface IconProps {
  url: string;
}

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem auto;
`;

export const Icon = styled.div<IconProps>`
  background: url(${(props) => props.url}) no-repeat;
  background-size: contain;
  width: 5vw;
  height: 5vw;
  z-index: 3;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const StyledTooltipTitle = styled.p`
  color: #23392e;
  margin: 0;
  padding: 0.25rem;
`;
