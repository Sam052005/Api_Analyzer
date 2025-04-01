import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Alerts from './pages/Alerts'
import Settings from './pages/Settings'
import Login from './pages/Login'

function App() {
  const theme = useTheme()
  
  // Debug theme in console
  console.log('Current theme mode:', theme.palette.mode)
  console.log('Primary color:', theme.palette.primary.main)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App