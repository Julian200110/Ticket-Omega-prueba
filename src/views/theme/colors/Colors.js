import axios from 'axios'
import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
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

import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

const Colors = () => {
  const [appointments, setAppointments] = useState([])
  function getAppointments() {
    const options = {
      method: 'GET',
      url: 'https://demo.habidd.com/api/ehr/patients/list.php?institution=1',
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
    <>
      <CContainer className="px-4">
        <CRow xs={{ gutterX: 5 }}>
          <CCol className="p-3">
            <h1> Pacientes</h1>
          </CCol>
          <CCol className="p-3">
            {' '}
            <CForm>
              <CFormInput
                type="text"
                id="exampleFormControlInput1"
                placeholder="Buscar"
                aria-describedby="exampleFormControlInputHelpInline"
                size="lg"
              />
            </CForm>
          </CCol>
          <CCol className="p-3" align="end">
            <CButton color="primary">Añadir paciente</CButton>
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
          {appointments.map((item, index) => (
            <CTableRow key={index}>
              <CTableHeaderCell>{item.nameFirst + ' ' + item.nameSecond}</CTableHeaderCell>
              <CTableDataCell>{item.surnameFirst + ' ' + item.surnameSecond}</CTableDataCell>
              <CTableDataCell>{item.birthday}</CTableDataCell>
              <CTableDataCell>{item.genre}</CTableDataCell>
              <CTableDataCell>{item.idType}</CTableDataCell>
              <CTableDataCell>{item.idNumber}</CTableDataCell>
              <CTableDataCell>
                <a href="/#/buttons/buttons">Ver ficha</a>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      <CPagination aria-label="Page navigation example" align="center">
        <CPaginationItem aria-label="Previous" disabled>
          <span aria-hidden="true">&laquo;</span>
        </CPaginationItem>
        <CPaginationItem active>1</CPaginationItem>
        <CPaginationItem>2</CPaginationItem>
        <CPaginationItem>3</CPaginationItem>
        <CPaginationItem aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </CPaginationItem>
      </CPagination>
    </>
  )
}

export default Colors
