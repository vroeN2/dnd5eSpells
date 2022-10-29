import { useState } from 'react'
import {
  BackgroundImage,
  DescriptionWrapper,
  FirstSpacingDiv,
  HeaderWrapper,
  SecondSpacingDiv,
  FirstSlideWrapper,
  SecondSlideWrapper,
  ThirdSlideWrapper,
  SecondSlideTextWrapper,
  ThirdSlideTextWrapper,
} from './styled'

const Homepage = () => {
  const [offset, setOffset] = useState(0)

  const handleScroll = () => setOffset(window.pageYOffset)
  window.addEventListener('scroll', handleScroll)

  return (
    <div style={{ width: '100vw' }}>
      {/* <div style={{ marginTop: '10vh', width: '100vw' }}> */}
      <FirstSlideWrapper>
        <BackgroundImage src='assets/Project2501_massive_giant_portal_in_a_dense_forest_environment__da72e786-9729-40b2-83c5-f30067278cd8.png' />

        <HeaderWrapper style={{ marginLeft: '5vw' }}>Find your spells with ease</HeaderWrapper>

        <DescriptionWrapper style={{ marginRight: '10vw' }}>
          Find desired Dungeons and Dragons spell with no problem
        </DescriptionWrapper>
      </FirstSlideWrapper>

      <FirstSpacingDiv />

      <SecondSlideWrapper>
        <BackgroundImage src='assets/Project2501_massive_giant_portal_in_a_dense_forest_environment__da72e786-9729-40b2-83c5-f30067278cd9.png' />

        <SecondSlideTextWrapper>
          <HeaderWrapper>Just start searching</HeaderWrapper>

          <DescriptionWrapper style={{ width: '45%', marginTop: '3%' }}>
            And use build-in filters to make it even quicker <br />
            <br /> It is that easy
          </DescriptionWrapper>
        </SecondSlideTextWrapper>
      </SecondSlideWrapper>

      <SecondSpacingDiv />

      <ThirdSlideWrapper>
        <BackgroundImage src='assets/Project2501_massive_giant_portal_in_a_desolate_ice_frost_enviro_a6f6d55c-8893-4729-adf3-381df54a77d6.png' />

        <ThirdSlideTextWrapper>
          <HeaderWrapper>Save your most searched</HeaderWrapper>

          <DescriptionWrapper style={{ width: '45%', marginTop: '1%' }}>
            And access them with one click
          </DescriptionWrapper>
        </ThirdSlideTextWrapper>
      </ThirdSlideWrapper>
    </div>
  )
}

export default Homepage
