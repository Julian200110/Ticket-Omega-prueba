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
const Popovers = () => {
  const [fecha, setFecha] = useState([])
  const [pas, setPas] = useState([])
  const [pad, setPad] = useState([])
  const [peso, setPeso] = useState([])
  const [observaciones, setObservaciones] = useState([])
  const { selectedPatientId } = usePatientContext()
  const handleCreateAppointment = () => {
    const formData = {
      patient_id: selectedPatientId,
      date: fecha,
      systolicPressure: pas,
      diastolicPressure: pad,
      weight: peso,
      notes: observaciones,
    }
    axios
      .post('https://demo.habidd.com/api/ehr/exam/physical/create.php', formData)
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
            </CButton>{' '}
            <CButton
              color="primary"
              variant="ghost"
              text-align="end"
              href="#/base/breadcrumbs"
              active
            >
              Examen Fisico
            </CButton>{' '}
            <CButton color="primary" variant="ghost" text-align="end" href="#/ExamenOdontologico">
              Examen Odontologico
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
          {/* <CPagination aria-label="Page navigation example" align="center">
            <CPaginationItem active href="#/base/breadcrumbs">
              Signos Vitales
            </CPaginationItem>
            <CPaginationItem href="#/base/cards">Patologias</CPaginationItem>
          </CPagination> */}
          <CCard className="mb-4">
            <CCardHeader>
              <strong>
                <CIcon icon={cilUser} />
                Examen Fisico
              </strong>
            </CCardHeader>
            <CCardBody md={9} style={{ maxHeight: '400px', overflowY: 'auto' }}>
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
                      <CFormLabel htmlFor="exampleFormControlInput1">Presion Arterial</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setPas(e.target.value)}
                    />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Frecuencia Cardiaca
                      </CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setPad(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Temperatura</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setPeso(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Respiracion</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Observaciones</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setObservaciones(e.target.value)}
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
                      Guardar signos vitales
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

export default Popovers
