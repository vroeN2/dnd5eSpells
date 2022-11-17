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

export const SpellDetailsWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("assets/bg_2.png") no-repeat center center fixed;
  background-size: cover;
`;

export const SingleSpellCardWrapper = styled.div`
  height: 75vh;
  width: 56vw;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #023020;
  border-radius: 10px;
  padding: 3rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
