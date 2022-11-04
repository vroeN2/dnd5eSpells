import styled from "styled-components";

export interface SlideProps {
  bgURL: string;
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
  background-size: cover;
`;

export const SlideHeader = styled.h2`
  font-size: 5rem;
  max-width: 30%;
  text-shadow: 0px 0px 5px #1f1f1f;
`;

export const SlideDescription = styled.h3`
  font-size: 2rem;
  max-width: 17%;
  text-shadow: 0px 0px 5px #1f1f1f;
`;