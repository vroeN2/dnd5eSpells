import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
`;

export const BackgroundWrapper = styled(FlexContainer)`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: relative;
  align-items: center;
  background: url("assets/bg_3.png") no-repeat center center fixed;
  background-size: cover;
`;

export const MainSpellbookWrapper = styled(FlexContainer)`
  position: absolute;
  top: 10vh;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  align-items: center;
  padding: 0 10vw;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;
