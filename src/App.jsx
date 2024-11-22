import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'

function App() {

  return (
    <>

      <AppHeader >
        <nav>
          <a href="/">Home</a>
          {/*  <button type='button' onClick={handleClick}>Fetch Characters</button> */}
        </nav>
      </AppHeader>
      <AppMain />

    </>
  )
}

export default App
