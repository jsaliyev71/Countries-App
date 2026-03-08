import AppRouter from './AppRouter'
import ContextProvider from './context/ContextProvider'
import './App.css'

function App() {

  return (
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  )
}

export default App
