import React, { useState, useEffect } from 'react'
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
const ButtonGroups = () => {
  const [appointments, setAppointments] = useState([])
  function getAppointments() {
    const options = {
      method: 'GET',
      url: 'https://demo.habidd.com/api/ehr/patients/get.php?institution=1&id=28',
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
            <CButton color="primary" variant="ghost" href="#/buttons/button-groups" active>
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
                <CIcon icon={cilUser} /> Datos del paciente
              </strong>
            </CCardHeader>
            <CCardBody style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <CContainer>
                <CRow>
                  <CCol>
                    <h4 style={{ color: '#5856D6' }}>Datos de identificacion</h4>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Tipo de documento</strong>
                  </CCol>
                  <CCol>
                    <strong>Numero de documento</strong>
                  </CCol>
                  <CCol>
                    <strong>Primer Nombre</strong>
                  </CCol>
                  <CCol>
                    <strong>Segundo Nombre</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>{appointments.idType}</CCol>
                  <CCol>{appointments.idNumber}</CCol>
                  <CCol>{appointments.nameFirst}</CCol>
                  <CCol>{appointments.nameSecond}</CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Primer Apellido</strong>
                  </CCol>
                  <CCol>
                    <strong>Segundo Apellido</strong>
                  </CCol>
                  <CCol>
                    <strong>Fecha de nacimiento</strong>
                  </CCol>
                  <CCol>
                    <strong>Lugar de nacimiento</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>{appointments.surnameFirst}</CCol>
                  <CCol>{appointments.surnameSecond}</CCol>
                  <CCol>{appointments.birthday}</CCol>
                  <CCol>{appointments.phoneNumberMobile}</CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Edad</strong>
                  </CCol>
                  <CCol>
                    <strong>Sexo</strong>
                  </CCol>
                  <CCol>
                    <strong>Estado Civil</strong>
                  </CCol>
                  <CCol>
                    <strong>Cod del paciente</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>39 años</CCol>
                  <CCol>{appointments.genre}</CCol>
                  <CCol>{appointments.familyStatus}</CCol>
                  <CCol>{appointments.code}</CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Observaciones</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>{appointments.notes}</CCol>
                </CRow>
              </CContainer>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default ButtonGroups
