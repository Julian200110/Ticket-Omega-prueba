/* eslint-disable prettier/prettier */
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
  CFormLabel,
  CFormTextarea,
  CFormSelect,
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

const AgregarExamenOdontologico = () => {
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
            <CButton color="primary" variant="ghost" href="/#/forms/checks-radios" active>
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
              {' '}
              <CContainer>
                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Fecha</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="date"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setFecha(e.target.value)}
                    />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Estructura</strong>
                  </CCol>
                  <CCol>
                    <strong>¿Normal?</strong>
                  </CCol>
                  <CCol>
                    <strong>Signos y sintomas</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Labio inferior
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Labio superior
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Comisura
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>{' '}
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Mucosa oral
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>{' '}
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Paladar blando
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>{' '}
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Paladar duro
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>{' '}
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Dorso de la lengua
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>{' '}
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Piso de la boca
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>{' '}
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Orofaringe
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Hallazagos Clinicos</strong>
                  </CCol>
                  <CCol>
                    <strong>¿Presencia?</strong>
                  </CCol>
                  <CCol>
                    <strong>N° de diente</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Fractura
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Supernumerarios
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Decoloración
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Descalcificación
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Esmalte moteado
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Maloclución
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      3 os molares incluidos
                    </CFormLabel>{' '}
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    >
                      <option></option>
                      <option value="Primera vez">Si</option>
                      <option value="Control">No</option>
                    </CFormSelect>
                  </CCol>
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setMotivoConsulta(e.target.value)}
                    />
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

export default AgregarExamenOdontologico
