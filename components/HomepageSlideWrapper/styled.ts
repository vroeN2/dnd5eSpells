import styled from "styled-components";

export interface SlideProps {
  bgURL: string;
  justifyContent: string;
}

export const SlideWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 9vh;
  background: url(${(props: SlideProps) => props.bgURL});
  justify-content: ${(props: SlideProps) => props.justifyContent};
  background-repeat: no-repeat;
  background-size: cover;
`;
export const FirstSpacingDiv = styled.div`
  width: 100%;
  height: 10vh;
  position: absolute;
  bottom: -9vh;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(1, 17, 3, 1) 0%,
    rgba(1, 17, 3, 1) 55%,
    rgba(3, 15, 3, 1) 100%
  );
`;

export const SecondSpacingDiv = styled.div`
  position: absolute;
  bottom: -10vh;
  left: 0;
  width: 100%;
  height: 10vh;
  background: linear-gradient(
    180deg,
    rgba(3, 15, 3, 1) 0%,
    rgba(3, 15, 3, 1) 65%,
    rgba(4, 9, 17, 1) 100%
  );
`;
