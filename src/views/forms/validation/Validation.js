import React, { useState, useEffect } from 'react'
import { usePatientContext } from '../../../PatientContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButtonGroup,
  CButtonToolbar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CFormInput,
  CInputGroup,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CInputGroupText,
  CRow,
  CContainer,
  CFormLabel,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilCalendar,
} from '@coreui/icons'

const Validation = () => {
  const [fecha, setFecha] = useState([])
  const [nombre, setNombre] = useState([])
  const [archivo, setArchivo] = useState([])
  const { selectedPatientId } = usePatientContext()
  const handleCreateAppointment = () => {
    const formData = new FormData()
    formData.append('patient_id', selectedPatientId)
    formData.append('date', fecha)
    formData.append('name', nombre)
    formData.append('file', archivo)
    for (let [key, value] of formData.entries()) {
      console.log(key, value)
    }
    axios
      .post('https://demo.habidd.com/api/ehr/documents/create.php', formData)
      .then((response) => {
        console.log('Respuesta exitosa:', response.data)
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error)
        console.log('CITA CREADO')
      })
  }
  return (
    <CContainer>
      <CRow>
        <CCol md={3}>
          {' '}
          <CButtonGroup vertical role="group" aria-label="Vertical button group">
            <CButton color="primary" variant="ghost" href="#/buttons/button-groups">
              Datos Personales
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/forms/checks-radios">
              Consultas
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/Forms/Floating-labels">
              Anamnesis
            </CButton>
            <CButton color="primary" variant="ghost" text-align="end" href="#/base/breadcrumbs">
              Examen Fisico
            </CButton>
            <CButton color="primary" variant="ghost" href="#/forms/Range">
              Odontograma
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/base/navs">
              Diagnosticos
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/forms/Select">
              Evolucion
            </CButton>
            <CButton color="primary" variant="ghost" active>
              Soportes
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/base/collapses">
              Consentimiento informado
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/base/list-groups">
              Ordenes medicas
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/icons/coreui-icons">
              Preescripciones medicas
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/notifications/alerts">
              Plan de tratamiento
            </CButton>
          </CButtonGroup>
        </CCol>
        <CCol md={9}>
          {' '}
          <CCard className="mb-4">
            <CCardHeader>
              <strong>
                <CIcon icon={cilUser} /> Soportes y anexos
              </strong>
            </CCardHeader>
            <CCardBody style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <CContainer>
                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Fecha</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="Date"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setFecha(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Nombre del soporte/anexo
                      </CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </CCol>
                </CRow>

                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Fichero</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="file"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setArchivo(e.target.files[0])}
                    />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <CButton
                      color="primary"
                      href="/#/buttons/button-groups"
                      onClick={() => {
                        handleCreateAppointment()
                      }}
                    >
                      Guardar soporte/anexo
                    </CButton>
                  </CCol>
                </CRow>
              </CContainer>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Validation
