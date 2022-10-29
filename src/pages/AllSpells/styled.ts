import styled from 'styled-components'

export const AllSpellsWrapper = styled.div`
  margin-top: 10vh;
  padding: 64px 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AllSpellsContentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const SingleSpellSmallCard = styled.div`
  /* width: 500px;
  height: 300px; */
  width: 20%;
  height: 25%;
  display: flex;
  flex-direction: column;
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  padding: 35px;
  margin-bottom: 2vw;
`

export const AllSpellsBackgroundImage = styled.img`
  position: fixed;
  /* top: 10vh; */
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
`
