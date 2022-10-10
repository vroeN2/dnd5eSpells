import { FirstSpacingDiv, SecondSpacingDiv } from './styled'

const Homepage = () => {
  return (
    <div style={{ marginTop: '10vh', width: '100vw' }}>
      <img
        style={{ width: '100%' }}
        src='assets/Project2501_massive_giant_portal_in_a_dense_forest_environment__da72e786-9729-40b2-83c5-f30067278cd8.png'
      />

      <FirstSpacingDiv />

      <img
        style={{ width: '100%' }}
        src='assets/Project2501_massive_giant_portal_in_a_dense_forest_environment__da72e786-9729-40b2-83c5-f30067278cd9.png'
      />

      <SecondSpacingDiv />

      <img
        style={{ width: '100%' }}
        src='assets/Project2501_massive_giant_portal_in_a_desolate_ice_frost_enviro_a6f6d55c-8893-4729-adf3-381df54a77d6.png'
      />
    </div>
  )
}

export default Homepage
