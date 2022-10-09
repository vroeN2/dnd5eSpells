import ClassIcons from 'components/ClassIcons/ClassIcons.json'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10vh auto',
      }}
    >
      {ClassIcons &&
        ClassIcons.map((characterClass) => {
          return (
            <div
              key={characterClass.id}
              style={{
                color: characterClass.color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                maxWidth: '100px',
              }}
            >
              <div>
                <img
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                  alt={`${characterClass.class} class icon`}
                  src={`assets/classes/${characterClass.class}.png`}
                />
              </div>
            </div>
          )
        })}
    </div>
  )
}
export default App
