import styled from "styled-components";

interface MagicSchoolSymbolProps {
  url: string;
}

const FlexDiv = styled.div`
  display: flex;
`;

export const ArcanesWrapper = styled(FlexDiv)`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: relative;
  background: url("/assets/bg_1.png") no-repeat center center fixed;
  background-size: cover;
`;

export const ListWrapper = styled(FlexDiv)`
  position: absolute;
  top: 19vh;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  align-items: center;
  padding: 0 10vw;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SpellDetailsWrapper = styled(FlexDiv)`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: relative;

  justify-content: center;
  align-items: center;
  background: url("/assets/bg_2.png") no-repeat center center fixed;
  background-size: cover;
  z-index: 1;
`;

export const SingleSpellCardWrapper = styled(FlexDiv)`
  min-height: 75vh;
  width: 56vw;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #023020;
  border-radius: 10px;
  padding: 3rem 6rem;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const TitleWrapper = styled(FlexDiv)`
  color: #23392e;
  font-size: 2.5rem;
  margin: 0 auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;

  span {
    color: #528173;
    font-size: 1.25rem;
    margin-top: 0.2rem;
  }
`;

export const ContentWrapper = styled(FlexDiv)`
  flex-direction: column;
  align-content: flex-start;
  color: #23392e;
  font-size: 1.25rem;
  z-index: 3;

  span {
    color: #528173;
  }
`;

export const DetailsColumnsWrapper = styled(FlexDiv)`
  justify-content: space-between;
  margin-top: 3rem;
`;

export const DetailsColumn = styled(FlexDiv)`
  flex-direction: column;
`;

export const ColumnWithTitle = styled(FlexDiv)`
  flex-direction: column;
  margin-bottom: 0.25rem;
  color: #528173;

  span {
    color: #23392e;
    margin-right: 0.25rem;
  }
`;

export const MagicSchoolSymbol = styled(FlexDiv)<MagicSchoolSymbolProps>`
  height: 90%;
  width: 65%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.05;

  justify-content: center;
  align-items: center;
  background: url(${(props) => props.url}) no-repeat;
  background-size: contain;
  z-index: 2;
`;

export const LoadingComponent = styled(FlexDiv)`
  align-items: center;
  margin: 0 auto;
`;
