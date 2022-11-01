import styled from "styled-components";

export interface SlideProps {
  bgURL: string;
  justifyContent: string;
}

export const SlideWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background: url(${(props: SlideProps) => props.bgURL}) no-repeat center center
    fixed;
  justify-content: ${(props: SlideProps) => props.justifyContent};
  background-size: cover;
`;

export const SlideHeader = styled.h2`
  font-size: 5rem;
  max-width: 30%;
`;

export const SlideDescription = styled.h3`
  font-size: 2rem;
  max-width: 17%;
`;
