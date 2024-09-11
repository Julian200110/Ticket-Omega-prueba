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
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
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

const Breadcrumbs = () => {
  const [appointments, setAppointments] = useState([])
  const { selectedPatientId } = usePatientContext()
  function getAppointments() {
    const options = {
      method: 'GET',
      url: `https://demo.habidd.com/api/ehr/exam/physical/list.php?patient_id=${selectedPatientId}`,
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
            <CButton
              color="primary"
              variant="ghost"
              text-align="end"
              href="#/base/breadcrumbs"
              active
            >
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
            <CButton color="primary" variant="ghost" href="/#/icons/coreui-icons">
              Preescripciones medicas
            </CButton>
          </CButtonGroup>
        </CCol>
        <CCol>
          {' '}
          <CPagination aria-label="Page navigation example" align="center">
            <CPaginationItem active href="#/base/breadcrumbs">
              Signos Vitales
            </CPaginationItem>
            <CPaginationItem href="#/base/cards">Patologias</CPaginationItem>
          </CPagination>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>
                <CIcon icon={cilUser} />
                Examen Fisico
              </strong>
            </CCardHeader>
            <CCardBody md={9} style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <CTable striped hover bordered>
                <CTableHead color="primary">
                  <CTableRow>
                    <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
                    <CTableHeaderCell scope="col">PAS</CTableHeaderCell>
                    <CTableHeaderCell scope="col">PAD</CTableHeaderCell>
                    <CTableHeaderCell scope="col">PESO (KG)</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Observaciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {appointments.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell>{item.date}</CTableHeaderCell>
                      <CTableDataCell>{item.systolicPressure}</CTableDataCell>

                      <CTableDataCell>{item.diastolicPressure}</CTableDataCell>
                      <CTableDataCell>{item.weight}</CTableDataCell>
                      <CTableDataCell>{item.notes}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              <CButton color="primary" href="/#/base/popovers">
                Añadir signos vitales
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Breadcrumbs
