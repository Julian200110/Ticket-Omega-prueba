import React, { useState } from 'react'
import { usePatientContext } from '../../../PatientContext'
import SignatureCanvas from 'react-signature-canvas'
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
  const [sign, setSign] = useState()
  const [url, setUrl] = useState()

  const handleClear = () => {
    sign.clear()
    setUrl('')
  }
  const handleGenerate = () => {
    setUrl(sign.getTrimmedCanvas().toDataURL('image/png'))
  }

  const [fecha, setFecha] = useState([])
  const [nombre, setNombre] = useState([])
  const [tipoDocumento, setTipoDocumento] = useState([])
  const [numeroDocumento, setNumeroDocumento] = useState([])
  const [Procedimiento, setProcedimiento] = useState([])
  const [quienFirma, setQuienFirma] = useState([])
  const [Profesional, setProfesional] = useState([])
  const { selectedPatientId } = usePatientContext()
  const handleCreateAppointment = () => {
    const formData = {
      patient_id: selectedPatientId,
      date: fecha,
      requesterRelationShip: quienFirma,
      name: nombre,
      idType: 'CC',
      idNumber: numeroDocumento,
      procedure_id: Procedimiento,
      signature: url,
      professional_id: Profesional,
    }
    axios
      .post('https://demo.habidd.com/api/ehr/authorization/informedconsent/create.php', formData)
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
            <CButton color="primary" variant="ghost" href="/#/base/navs">
              Diagnosticos y Planes de tratamiento
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/forms/Select">
              Evolucion
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/base/carousels">
              Soportes
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/base/collapses" active>
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
                <CIcon icon={cilUser} /> Consentimientos informados
              </strong>
            </CCardHeader>
            <CCardBody style={{ maxHeight: '400px', overflowY: 'auto' }}>
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
                    <CFormLabel htmlFor="exampleFormControlInput1">¿Quien Firma?</CFormLabel>{' '}
                  </strong>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder=""
                    onChange={(e) => setQuienFirma(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className="p-2">
                <CCol>
                  <strong>
                    <CFormLabel htmlFor="exampleFormControlInput1">Nombre completo</CFormLabel>{' '}
                  </strong>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder=""
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </CCol>
                <CCol>
                  <strong>
                    <CFormLabel htmlFor="exampleFormControlInput1">
                      Numero de identificacion
                    </CFormLabel>{' '}
                  </strong>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder=""
                    onChange={(e) => setNumeroDocumento(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className="p-2">
                <CCol>
                  <strong>
                    <CFormLabel htmlFor="exampleFormControlInput1"> Procedimiento</CFormLabel>{' '}
                  </strong>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder=""
                    onChange={(e) => setProcedimiento(e.target.value)}
                  />
                </CCol>
                <CCol>
                  <strong>
                    <CFormLabel htmlFor="exampleFormControlInput1">Profesional</CFormLabel>{' '}
                  </strong>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder=""
                    onChange={(e) => setProfesional(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className="p-2">
                <CCol>
                  <strong>
                    <CFormLabel htmlFor="exampleFormControlInput1">Firma</CFormLabel>{' '}
                  </strong>
                  <div style={{ border: '2px solid black', width: 300, height: 100 }}>
                    <SignatureCanvas
                      canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
                      ref={(data) => setSign(data)}
                    />
                  </div>

                  <br></br>
                  <CButton onClick={handleClear}>Limpiar</CButton>
                  <CButton onClick={handleGenerate}>Mostrar</CButton>
                  <br />
                  <br />
                  <img src={url} />
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
                    Guardar soporte/anexo
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

export default Accordion
