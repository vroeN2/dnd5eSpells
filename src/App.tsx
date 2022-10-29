import { Routes, Route } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Homepage from 'pages/Homepage'
import AllSpells from 'pages/AllSpells'
import SavedSpells from 'pages/SavedSpells'
import NoMatch from 'pages/NoMatch'
import { Grommet } from 'grommet'

function App() {
  return (
    <Grommet plain>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path='spells' element={<AllSpells />} />
          <Route path='saved' element={<SavedSpells />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </Grommet>
  )
}
export default App
