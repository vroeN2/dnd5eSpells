import styled from "styled-components";

export interface SlideProps {
  bgURL: string;
}

export const SlideHeader = styled.h2`
  font-size: 5rem;
  max-width: 30%;
  color: white;
  text-shadow: 0px 0px 5px #1f1f1f;
`;

export const SlideDescription = styled.h3`
  font-size: 2rem;
  max-width: 17%;
  color: white;
  text-shadow: 0px 0px 5px #1f1f1f;
`;
