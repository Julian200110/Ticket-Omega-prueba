import React, { useState, useEffect } from 'react'
import { usePatientContext } from '../../PatientContext'
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
  CFormLabel,
  CFormSelect,
  CFormTextarea,
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
import { Button } from '@coreui/coreui'

const Widgets = () => {
  const { selectedPatientId } = usePatientContext()
  const [fecha, setFecha] = useState([])
  const [hora, setHora] = useState([])
  const [tipoConsulta, setTipoConsulta] = useState([])
  const [finalidadConsulta, setFinalidadConsulta] = useState([])
  const [motivoConsulta, setMotivoConsulta] = useState([])
  const [causaExterna, setCausaExterna] = useState([])
  const [diagnosticoPrincipal, setDiagnosticoPrincipal] = useState([])
  const [tipoDiagnosticoPrincipal, setTipoDiagnosticoPrincipal] = useState([])
  const [actividadRealizada, setActividadRealizada] = useState([])
  const [evolucion, setEvolucion] = useState([])

  const handleCreateAppointment = () => {
    const formData = {
      patient_id: selectedPatientId,
      date: fecha,
      time: hora,
      procedure_id: tipoConsulta,
      reason: finalidadConsulta,
      reasonText: motivoConsulta,
      cause: causaExterna,
      diagnosisMain_id: diagnosticoPrincipal,
      diagnosisType: tipoDiagnosticoPrincipal,
      evolution: evolucion,
      actions: actividadRealizada,
    }
    axios
      .post('https://demo.habidd.com/api/ehr/evolution/create.php', formData)
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
            <CPaginationItem active href="#/base/breadcrumbs">
              Ant fam y per
            </CPaginationItem>
            <CPaginationItem href="#/forms/input-group">Condicion Medica Actual</CPaginationItem>
            <CPaginationItem href="#/forms/layout">Uso de Medicamentos</CPaginationItem>
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
                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Fecha</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="date" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Hora</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="Time" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Tipo de consulta</CFormLabel>{' '}
                    </strong>
                    <CFormSelect aria-label="Default select example">
                      <option></option>
                      <option value="Primera vez">Primera vez</option>
                      <option value="Control">Control</option>
                      <option value="Urgencia">Control</option>
                      <option value="Finalizacion de tratamiento">
                        Finalizacion de tratamiento
                      </option>
                      <option value="Valoracion">Valoracion</option>
                      <option value="Inicio de tratamiento ">Inicio de tratamiento </option>
                    </CFormSelect>
                  </CCol>
                </CRow>

                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Motivo de consulta{' '}
                      </CFormLabel>{' '}
                    </strong>
                    <CFormTextarea type="text" id="exampleFormControlInput1" placeholder="" />
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
                      Guardar consulta
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

export default Widgets
