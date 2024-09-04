import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CPagination,
  CPaginationItem,
  CButton,
  CForm,
  CFormInput,
  CContainer,
} from '@coreui/react'
import { usePatientContext } from '../../../PatientContext' // Importa el hook personalizado
const Colors = () => {
  const [appointments, setAppointments] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const { selectedPatientId, setSelectedPatientId } = usePatientContext()

  function getAppointments() {
    const options = {
      method: 'GET',
      url: `https://demo.habidd.com/api/ehr/patients/list.php?institution=1`,
    }
    axios
      .request(options)
      .then((response) => {
        if (response.data && response.data.data) {
          setAppointments(response.data.data)
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

  // Filtra los appointments según el término de búsqueda
  const filteredAppointments = appointments.filter((item) => {
    const fullName =
      `${item.nameFirst} ${item.nameSecond} ${item.surnameFirst} ${item.surnameSecond}`.toLowerCase()
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      item.idNumber.includes(searchTerm) ||
      item.idType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.genre.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  // Calcular los datos para la página actual
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredAppointments.slice(indexOfFirstItem, indexOfLastItem)

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const handleViewDetails = (id) => {
    setSelectedPatientId(id)
  }
  return (
    <>
      <CContainer className="px-4">
        <CRow xs={{ gutterX: 5 }}>
          <CCol className="p-3">
            <h1> Pacientes</h1>
          </CCol>
          <CCol className="p-3">
            <CForm>
              <CFormInput
                type="text"
                id="exampleFormControlInput1"
                placeholder="Buscar"
                aria-describedby="exampleFormControlInputHelpInline"
                size="lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </CForm>
          </CCol>
          <CCol className="p-3" align="end">
            <CButton color="primary" href="/#/notifications/modals">
              Añadir paciente
            </CButton>
          </CCol>
        </CRow>
      </CContainer>

      <CTable striped hover bordered>
        <CTableHead color="primary">
          <CTableRow>
            <CTableHeaderCell scope="col">Nombres</CTableHeaderCell>
            <CTableHeaderCell scope="col">Apellidos</CTableHeaderCell>
            <CTableHeaderCell scope="col">Fecha de nacimiento</CTableHeaderCell>
            <CTableHeaderCell scope="col">Genero</CTableHeaderCell>
            <CTableHeaderCell scope="col">Tipo de documento</CTableHeaderCell>
            <CTableHeaderCell scope="col">Numero de documento</CTableHeaderCell>
            <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {currentItems.map((item, index) => (
            <CTableRow key={index}>
              <CTableHeaderCell>{item.nameFirst + ' ' + item.nameSecond}</CTableHeaderCell>
              <CTableDataCell>{item.surnameFirst + ' ' + item.surnameSecond}</CTableDataCell>
              <CTableDataCell>{item.birthday}</CTableDataCell>
              <CTableDataCell>{item.genre}</CTableDataCell>
              <CTableDataCell>{item.idType}</CTableDataCell>
              <CTableDataCell>{item.idNumber}</CTableDataCell>
              <CTableDataCell>
                <a href="/#/buttons/buttons" onClick={() => handleViewDetails(item.id)}>
                  Ver ficha
                </a>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>

      <CPagination aria-label="Page navigation example" align="center">
        <CPaginationItem
          aria-label="Previous"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ cursor: 'pointer' }}
        >
          &laquo;
        </CPaginationItem>
        {Array.from({ length: Math.ceil(filteredAppointments.length / itemsPerPage) }, (_, i) => (
          <CPaginationItem
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => paginate(i + 1)}
            style={{ cursor: 'pointer' }}
          >
            {i + 1}
          </CPaginationItem>
        ))}
        <CPaginationItem
          aria-label="Next"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredAppointments.length / itemsPerPage)}
          style={{ cursor: 'pointer' }}
        >
          &raquo;
        </CPaginationItem>
      </CPagination>
    </>
  )
}

export default Colors
