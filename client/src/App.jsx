import styled from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'
import HomePage from './pages/HomePage'
import ExercisesPage from './pages/ExercisesPage'
import NotFoundPage from './pages/NotFoundPage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App

const Container = styled.div`
  padding: 20px;
  max-height: 100vh;
`