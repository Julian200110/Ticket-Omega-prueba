/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState } from 'react'

// Crear el contexto
const PatientContext = createContext()

// Proveedor del contexto
// eslint-disable-next-line react/prop-types
export const PatientProvider = ({ children }) => {
  const [selectedPatientId, setSelectedPatientId] = useState(null)

  return (
    <PatientContext.Provider value={{ selectedPatientId, setSelectedPatientId }}>
      {children}
    </PatientContext.Provider>
  )
}

// Hook personalizado para usar el contexto
export const usePatientContext = () => {
  return useContext(PatientContext)
}
