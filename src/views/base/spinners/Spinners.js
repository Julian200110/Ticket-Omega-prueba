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
const Accordion = () => {
  const [fecha, setFecha] = useState([])
  const [diagnostico, setDiagnostico] = useState([])
  const [planTratamiento, setPlanTratamiento] = useState([])
  const { selectedPatientId } = usePatientContext()
  const handleCreateAppointment = () => {
    const formData = {
      patient_id: selectedPatientId,
      date: fecha,
      diagnosis: diagnostico,
      treatmentPlan: planTratamiento,
    }
    axios
      .post('https://demo.habidd.com/api/ehr/diagnostics/create.php', formData)
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
            <CButton color="primary" variant="ghost" href="/#/base/navs" active>
              Diagnosticos
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/forms/Select">
              Evolucion
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/base/carousels">
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
          </CButtonGroup>
        </CCol>
        <CCol md={9}>
          {' '}
          <CCard className="mb-4">
            <CCardHeader>
              <strong>
                <CIcon icon={cilUser} />
                Diagnosticos
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
                      <CFormLabel htmlFor="exampleFormControlInput1">Diagnostico</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setDiagnostico(e.target.value)}
                    />
                  </CCol>
                </CRow>

                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Plan de tratamiento
                      </CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setPlanTratamiento(e.target.value)}
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
                      Guardar Diagnostico
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

export default Accordion
