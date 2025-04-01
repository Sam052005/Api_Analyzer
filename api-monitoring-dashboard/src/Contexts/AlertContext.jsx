import { createContext, useState, useCallback } from 'react'

export const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([])

  const addAlert = useCallback((message, severity = 'info') => {
    const id = Date.now()
    setAlerts(prev => [...prev, { id, message, severity }])
    
    setTimeout(() => {
      setAlerts(prev => prev.filter(alert => alert.id !== id))
    }, 5000)
  }, [])

  const removeAlert = useCallback((id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id))
  }, [])

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  )
}