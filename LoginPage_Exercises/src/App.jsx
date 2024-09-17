import { Route, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Login2 from './components/Login2'

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/login2" element={<Login2 />} />
      <Route path="/" element={<LoginForm />} />
    </Routes>
  )
}

export default App
