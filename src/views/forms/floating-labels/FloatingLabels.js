import React from 'react'
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

const FloatingLabels = () => {
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
            <CPaginationItem href="#/forms/input-group">Condiciones Clinicas</CPaginationItem>
            <CPaginationItem href="#/forms/layout">medicamentos</CPaginationItem>
          </CPagination>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>
                <CIcon icon={cilUser} />
                Anamnesis
              </strong>
            </CCardHeader>
            <CCardBody md={9} style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <CContainer>
                <CRow>
                  <CCol>
                    <h4 style={{ color: '#5856D6' }}>Antecedentes Familiares y Personales</h4>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Fecha</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>123456</CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Antecedentes Medicos Familiares</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>16/12/2020</CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Antecedentes Medicos Personales</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>No refiere</CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>Alergias</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>No refiere</CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>¿Cree usted que hay algo de más importancia que debamos saber?</strong>
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>No refiere</CCol>
                </CRow>
              </CContainer>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default FloatingLabels
