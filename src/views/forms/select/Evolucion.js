import React, { useState, useEffect } from 'react'
import { usePatientContext } from '../../../PatientContext'
import axios from 'axios'
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
  CInputGroupText,
  CRow,
  CContainer,
  CPagination,
  CPaginationItem,
  CCardFooter,
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
import './Timeline.css'
const Select = () => {
  const [appointments, setAppointments] = useState([])
  const { selectedPatientId } = usePatientContext()
  function getAppointments() {
    const params = {
      patient_id: selectedPatientId,
    }
    const options = {
      method: 'GET',
      url: 'https://demo.habidd.com/api/ehr/evolution/list.php',
      params,
    }
    axios
      .request(options)
      .then((response) => {
        console.log(response.data.data)
        console.log('golaa')
        return response
      })
      .then((responseData) => {
        if (responseData && responseData.data) {
          setAppointments(responseData.data.data)
        } else {
          setAppointments([])
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }
  useEffect(() => {
    getAppointments()
  }, [])
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
              Diagnosticos y Planes de tratamiento
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/forms/Select" active>
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
        <CCol>
          {' '}
          <CCard className="mb-4">
            <CCardHeader>
              <strong>
                <CIcon icon={cilUser} />
                Evolucion
              </strong>
            </CCardHeader>
            <CCardBody md={9} style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <CContainer>
                <CCol className="timeline">
                  <ul>
                    {appointments.map((incidencia, index) => (
                      <li key={index}>
                        <span>{incidencia.date}</span>
                        <div className="content">
                          <h3>{incidencia.reason}</h3>
                          <p>{incidencia.reasonText}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CCol>
              </CContainer>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Select
