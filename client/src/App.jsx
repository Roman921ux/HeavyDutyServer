import styled from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'
import HomePage from './pages/HomePage'
import ExercisesPage from './pages/ExercisesPage'
import NotFoundPage from './pages/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import RequireAuth from './RequireAuth'

function App() {

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={
            <HomePage />
          } />
          <Route path="/exercises" element={
            <ExercisesPage />
          } />
          <Route path="/profile" element={
            <ProfilePage />
          } />
          {/* <Route path="/" element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          } />
          <Route path="/exercises" element={
            <RequireAuth>
              <ExercisesPage />
            </RequireAuth>
          } />
          <Route path="/profile" element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          } /> */}

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
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