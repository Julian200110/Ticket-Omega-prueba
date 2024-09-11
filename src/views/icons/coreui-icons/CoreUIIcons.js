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

const CoreUIIcons = () => {
  const [appointments, setAppointments] = useState([])
  const { selectedPatientId } = usePatientContext()
  function getAppointments() {
    const options = {
      method: 'GET',
      url: `https://demo.habidd.com/api/ehr/orders/drug/list.php?patient_id=${selectedPatientId}`,
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
            <CButton color="primary" variant="ghost" href="/#/icons/coreui-icons" active>
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
                Preescripciones medicas
              </strong>
            </CCardHeader>
            <CCardBody style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <CTable striped hover bordered>
                <CTableHead color="primary">
                  <CTableRow>
                    <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Concentracion</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Dosis</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Periodo del tratamiento</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {appointments.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell>{item.date}</CTableHeaderCell>
                      <CTableDataCell>{item.nameGeneric}</CTableDataCell>
                      <CTableDataCell>{item.concentration}</CTableDataCell>
                      <CTableDataCell>{item.dosage}</CTableDataCell>
                      <CTableDataCell>{item.duration}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              <CRow className="p-2">
                <CCol>
                  <CButton color="primary" href="#/icons/flags">
                    Agregar Preescripcion
                  </CButton>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default CoreUIIcons
