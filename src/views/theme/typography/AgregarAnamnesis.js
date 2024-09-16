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

const AgregarAnamnesis = () => {
  const [appointments, setAppointments] = useState([])
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
  const { selectedPatientId } = usePatientContext()
  function getAppointments() {
    const options = {
      method: 'GET',
      url: `https://demo.habidd.com/api/ehr/anamnesis/background/list.php?patient_id=${selectedPatientId}`,
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
                    <CFormInput
                      type="date"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setFecha(e.target.value)}
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <h4 style={{ color: '#5856D6' }}>Antecedentes medicos personales</h4>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Antecedente</strong>
                  </CCol>
                  <CCol>
                    <strong>¿La padece?</strong>
                  </CCol>
                  <CCol>
                    <strong>Cual</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Alergias
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
                      Hemorragias
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
                      VIH/SIDA
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
                      Cirugias
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
                      Asma
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
                      Diabetes
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
                      Hepatits
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
                      Hipertension
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
                      Enfermedades Cardiacas
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
                      Consumo de medicamentos
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
                      Consumo de drogas
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
                      Fracturas
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
                <CRow>
                  <CCol>
                    <h4 style={{ color: '#5856D6' }}>Antecedentes medicos familiares</h4>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Antecedente</strong>
                  </CCol>
                  <CCol>
                    <strong>¿La padece?</strong>
                  </CCol>
                  <CCol>
                    <strong>Cual</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol style={{ display: 'flex', alignItems: 'center' }}>
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      Cancer
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
                      VIH/SIDA
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
                      Diabetes
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
                      Hipertension
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
                      Enfermedades cardiacas
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
                    <CFormLabel
                      htmlFor="exampleFormControlInput1"
                      style={{ marginRight: '10px', minWidth: '260px' }}
                    >
                      <strong>
                        {' '}
                        ¿Cree usted que hay algo de más importancia que debamos saber?
                      </strong>
                    </CFormLabel>{' '}
                    <CFormTextarea
                      aria-label="Default select example"
                      onChange={(e) => setTipoConsulta(e.target.value)}
                    ></CFormTextarea>
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

export default AgregarAnamnesis
