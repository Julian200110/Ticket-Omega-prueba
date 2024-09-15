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

const Layout = () => {
  const [appointments, setAppointments] = useState([])
  const { selectedPatientId } = usePatientContext()
  const handleCreateAppointment = () => {
    const formData = {
      patient_id: selectedPatientId,
      name: 'N/A',
      current: 1,
      dosage: 'N/A',
      notes: 'N/A',
    }
    axios
      .post('https://demo.habidd.com/api/ehr/anamnesis/drug/create.php', formData)
      .then((response) => {
        console.log('Respuesta exitosa:', response.data)
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error)
        console.log('CITA CREADO')
      })
  }
  function getAppointments() {
    const options = {
      method: 'GET',
      url: `https://demo.habidd.com/api/ehr/anamnesis/drug/list.php?patient_id=${selectedPatientId}`,
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
            <CButton color="primary" variant="ghost" href="/#/Forms/Floating-labels" active>
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
            <CButton color="primary" variant="ghost" href="/#/icons/coreui-icons">
              Preescripciones medicas
            </CButton>
          </CButtonGroup>
        </CCol>
        <CCol>
          {' '}
          <CPagination aria-label="Page navigation example" align="center">
            <CPaginationItem href="#/forms/floating-labels">Ant fam y per</CPaginationItem>
            <CPaginationItem href="#/forms/input-group">Condicion Medica Actual</CPaginationItem>
            <CPaginationItem active href="#/forms/layout">
              Uso de Medicamentos
            </CPaginationItem>
          </CPagination>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>
                <CIcon icon={cilUser} />
                Anamnesis
              </strong>
            </CCardHeader>
            <CCardBody md={9} style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {' '}
              <CContainer>
                {appointments.length === 0 ? (
                  <CRow className="justify-content-center">
                    <CCol xs={5}>
                      <CButton
                        href="/#/buttons/button-groups"
                        onClick={() => {
                          handleCreateAppointment()
                        }}
                      >
                        No usa medicamentos
                      </CButton>
                    </CCol>
                    <CCol xs={5}>
                      <CButton href="/#/charts">Agregar uso de medicamento</CButton>
                    </CCol>
                  </CRow>
                ) : (
                  <>
                    <CTable striped hover bordered className="text-center">
                      <CTableHead color="primary">
                        <CTableRow>
                          <CTableHeaderCell scope="col">Nombre/Principio activo</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Posologia</CTableHeaderCell>
                          <CTableHeaderCell scope="col">¿Actual?</CTableHeaderCell>
                          <CTableHeaderCell scope="col">
                            ¿Desde cuando usa este medicamento?
                          </CTableHeaderCell>
                          <CTableHeaderCell scope="col">
                            ¿Hasta cuando usa este medicamento?
                          </CTableHeaderCell>
                          <CTableHeaderCell scope="col">Observaciones</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {appointments.map((item, index) => (
                          <CTableRow key={index}>
                            <CTableHeaderCell>{item.name}</CTableHeaderCell>
                            <CTableDataCell>{item.dosage}</CTableDataCell>
                            <CTableDataCell>
                              {' '}
                              {item.current === '0' ? 'Sí' : item.current === '1' ? 'No' : ''}
                            </CTableDataCell>
                            <CTableDataCell>{item.dateFrom}</CTableDataCell>
                            <CTableDataCell>{item.dateTo}</CTableDataCell>
                            <CTableDataCell>{item.notes}</CTableDataCell>
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                    <CRow className="p-2">
                      <CCol>
                        <CButton color="primary" href="/#/charts">
                          Nuevo medicamento
                        </CButton>
                      </CCol>
                    </CRow>{' '}
                  </>
                )}
              </CContainer>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Layout
