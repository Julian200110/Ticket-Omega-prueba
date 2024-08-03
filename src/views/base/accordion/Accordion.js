import React, { useState } from 'react'
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
  const [archivo, setArchivo] = useState([])
  const handleCreateAppointment = () => {
    const formData = {
      patient_id: 1,
      date: '02/08/2024',
      requesterRelationShip: '1',
      name: '1',
      idType: '1',
      idNumber: '1',
      procedure_id: '1',
      signature: url,
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
              Diagnosticos
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
                  <CFormInput type="Date" id="exampleFormControlInput1" placeholder="" />
                </CCol>
                <CCol>
                  <strong>
                    <CFormLabel htmlFor="exampleFormControlInput1">¿Quien Firma?</CFormLabel>{' '}
                  </strong>
                  <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                </CCol>
              </CRow>
              <CRow className="p-2">
                <CCol>
                  <strong>
                    <CFormLabel htmlFor="exampleFormControlInput1">Nombre completo</CFormLabel>{' '}
                  </strong>
                  <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                </CCol>
                <CCol>
                  <strong>
                    <CFormLabel htmlFor="exampleFormControlInput1">
                      Numero de identificacion
                    </CFormLabel>{' '}
                  </strong>
                  <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                </CCol>
              </CRow>
              <CRow className="p-2">
                <CCol>
                  <strong>
                    <CFormLabel htmlFor="exampleFormControlInput1"> Procedimiento</CFormLabel>{' '}
                  </strong>
                  <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                </CCol>
                <CCol>
                  <strong>
                    <CFormLabel htmlFor="exampleFormControlInput1">Profesional</CFormLabel>{' '}
                  </strong>
                  <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
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
