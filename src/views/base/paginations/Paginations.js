import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CContainer,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardFooter,
  CFormInput,
  CFormLabel,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import { DocsExample } from 'src/components'
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
  cilMedicalCross,
} from '@coreui/icons'

const Paginations = () => {
  return (
    <CContainer className="px-4">
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <CRow>
                <CCol>
                  <strong>
                    <CIcon icon={cilUser} /> Datos del paciente
                  </strong>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CContainer>
                <CRow>
                  <CCol>
                    <h4 style={{ color: '#5856D6' }}>Datos de identificacion</h4>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Tipo de documento</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Numero de documento
                      </CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Primer Nombre</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Segundo Nombre</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Primer Apellido</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Segundo Apellido</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Fecha de nacimiento
                      </CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Lugar de nacimiento
                      </CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                </CRow>

                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Edad</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Sexo</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Estado Civil</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Cod del paciente</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                </CRow>

                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Notas</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer>
                <CRow>
                  <CCol>
                    <h4 style={{ color: '#5856D6' }}>Informacion de contacto</h4>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Pais</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Departamento</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Municipio</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Zona de residencia</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                </CRow>

                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Direccion</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Telefono</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Celular</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Email</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer>
                <CRow>
                  <CCol>
                    <h4 style={{ color: '#5856D6' }}>Ocupacion</h4>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Cargo</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Nombre de la empresa
                      </CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer>
                <CRow>
                  <CCol>
                    <h4 style={{ color: '#5856D6' }}>Persona acompañante</h4>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Nombre</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Parentesco</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Telefono</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer>
                <CRow>
                  <CCol>
                    <h4 style={{ color: '#5856D6' }}>Persona responsable</h4>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Nombre</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Parentesco</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Telefono</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                </CRow>

                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Tipo de documento</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Numero de documento
                      </CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer>
                <CRow>
                  <CCol>
                    <h4 style={{ color: '#5856D6' }}>Datos del seguro salud</h4>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Numero Poliza</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">EPS</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">dd</CFormLabel>{' '}
                    </strong>
                    <CFormInput type="text" id="exampleFormControlInput1" placeholder="" />
                  </CCol>
                </CRow>
              </CContainer>
            </CCardBody>
            <CCardFooter className="text-body-secondary " align="end">
              <CButton color="primary" variant="outline">
                Guardar
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Paginations
