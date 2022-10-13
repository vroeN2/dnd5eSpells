import styled from 'styled-components'

export const FirstSpacingDiv = styled.div`
  margin-top: -1vh;
  width: 100%;
  height: 10vh;
  background: linear-gradient(
    180deg,
    rgba(1, 17, 3, 1) 0%,
    rgba(1, 17, 3, 1) 55%,
    rgba(3, 15, 3, 1) 100%
  );
`

export const SecondSpacingDiv = styled.div`
  width: 100%;
  height: 10vh;
  margin-top: -1vh;
  background: linear-gradient(
    180deg,
    rgba(3, 15, 3, 1) 0%,
    rgba(3, 15, 3, 1) 65%,
    rgba(4, 9, 17, 1) 100%
  );
`

export const SlideWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

export const FirstSlideWrapper = styled(SlideWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SecondSlideWrapper = styled(SlideWrapper)`
  display: flex;
  align-items: center;
`

export const ThirdSlideWrapper = styled(SlideWrapper)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
`

export const SecondSlideTextWrapper = styled.div`
  width: 100%;
  margin-left: 45vw;
  z-index: 2;
  display: flex;
  flex-direction: column;
`

export const ThirdSlideTextWrapper = styled.div`
  width: 100%;
  margin-top: 5%;
  z-index: 2;
  display: flex;
  flex-direction: column;
`

export const HeaderWrapper = styled.div`
  z-index: 2;
  color: #ffffff;
  font-size: 5rem;
  text-shadow: 0px 0px 5px #1f1f1f;
  height: 100%;
  width: 100vw;
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  min-width: 800px;
`

export const DescriptionWrapper = styled.div`
  z-index: 2;
  color: #ffffff;
  font-size: 2rem;
  text-shadow: 0px 0px 5px #1f1f1f;
  height: 100%;
  width: 100vw;
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 17%;
`
