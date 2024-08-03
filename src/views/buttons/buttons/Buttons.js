import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
const Buttons = () => {
  const [appointments, setAppointments] = useState([])
  function getAppointments() {
    const options = {
      method: 'GET',
      url: 'https://demo.habidd.com/api/ehr/patients/list.php?institution=1',
    }
    axios
      .request(options)
      .then((response) => {
        console.log(response.data.data[0])
        console.log('golaa')
        return response
      })
      .then((responseData) => {
        if (responseData && responseData.data) {
          setAppointments(responseData.data.data[0])
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
    <CContainer className="px-4">
      <CRow xs={{ gutterX: 5 }}>
        <CCol className="p-3" align="end">
          <Link to="/buttons/button-groups">
            <CButton color="primary">
              <CIcon icon={cilMedicalCross} /> Historia Clinica{' '}
            </CButton>
          </Link>
        </CCol>
      </CRow>
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
                <CCol align="end">
                  <CButton color="Link" variant="ghost" href="/#/base/paginations">
                    <CIcon icon={cilPencil} />
                  </CButton>
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
                    <strong>Notas</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>{appointments.notes}</CCol>
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
                    <strong>Pais</strong>
                  </CCol>
                  <CCol>
                    <strong>Departamento</strong>
                  </CCol>
                  <CCol>
                    <strong>Municipio</strong>
                  </CCol>
                  <CCol>
                    <strong>Zona de residencia</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>Colombia</CCol>
                  <CCol>Bogota d.c</CCol>
                  <CCol>Bogota d.c</CCol>
                  <CCol>Usaquen</CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Direccion</strong>
                  </CCol>
                  <CCol>
                    <strong>Telefono</strong>
                  </CCol>
                  <CCol>
                    <strong>Celular</strong>
                  </CCol>
                  <CCol>
                    <strong>Email</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>Calle 100 #32-56</CCol>
                  <CCol>N/A</CCol>
                  <CCol>3145896325</CCol>
                  <CCol>alexander@gmail.com</CCol>
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
                    <strong>Cargo</strong>
                  </CCol>
                  <CCol>
                    <strong>Nombre de la empresa</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>Community Manager</CCol>
                  <CCol>Coca Cola</CCol>
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
                    <strong>Nombre</strong>
                  </CCol>
                  <CCol>
                    <strong>Parentesco</strong>
                  </CCol>
                  <CCol>
                    <strong>Telefono</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>Maria Velasquez</CCol>
                  <CCol>Hermana</CCol>
                  <CCol>3189657425</CCol>
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
                    <strong>Nombre</strong>
                  </CCol>
                  <CCol>
                    <strong>Parentesco</strong>
                  </CCol>
                  <CCol>
                    <strong>Telefono</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>N/A</CCol>
                  <CCol>N/A</CCol>
                  <CCol>N/A</CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Tipo de documento</strong>
                  </CCol>
                  <CCol>
                    <strong>Numero de documento</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>N/A</CCol>
                  <CCol>N/A</CCol>
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
                    <strong>Numero Poliza</strong>
                  </CCol>
                  <CCol>
                    <strong>EPS</strong>
                  </CCol>
                  <CCol>
                    <strong>dd</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>375895</CCol>
                  <CCol>Salud Total</CCol>
                  <CCol>123456</CCol>
                </CRow>
              </CContainer>
            </CCardBody>
            <CCardFooter className="text-body-secondary " align="end">
              <CButton color="primary" variant="outline">
                Volver
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>

        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>
                {' '}
                <CIcon icon={cilCalendar} /> Agendamiento
              </strong>
            </CCardHeader>
            <CCardBody>
              <CTable striped hover bordered>
                <CTableHead color="primary">
                  <CTableRow>
                    <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Hora</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Servicio</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Estado</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">01/01/1975</CTableHeaderCell>
                    <CTableDataCell>10:00 - 11:00</CTableDataCell>
                    <CTableDataCell>Odontologia general</CTableDataCell>
                    <CTableDataCell> Pendiente</CTableDataCell>
                    <CTableDataCell>
                      <a href="https://icons.coreui.io/">Ver</a>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Buttons
