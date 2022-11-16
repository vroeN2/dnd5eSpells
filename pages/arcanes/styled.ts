import styled from "styled-components";

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
  position: absolute;
  top: 19vh;
  bottom: 0;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  padding: 0 10vw;
  justify-content: center;
  flex-wrap: wrap;
`;
