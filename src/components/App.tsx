import './App.css'
import Todos from './Todos'
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <>
      <h1>Vite + React + TS + MobX</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Todos />
      </ErrorBoundary>
    </>
  )
}

export default App
