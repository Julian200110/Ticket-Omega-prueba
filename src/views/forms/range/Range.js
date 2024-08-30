import React, { useState, useEffect, createRef } from 'react'
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
  cilSave,
} from '@coreui/icons'
import '../../../components/Odontogram.css'
import Teeth from '../../../components/Teeth'
import { useScreenshot } from 'use-react-screenshot'

const Range = () => {
  const [odontogramState, setOdontogramState] = useState({})
  const ref = createRef(null)
  const [width, setWidth] = useState(300)
  const [image, takeScreenShot] = useScreenshot()
  const getImage = () => takeScreenShot(ref.current)
  const handleToothUpdate = (id, toothState) => {
    setOdontogramState((prevState) => ({
      ...prevState,
      [id]: toothState,
    }))
  }
  const sectionToNumber = {
    top: 1,
    right: 2,
    bottom: 3,
    left: 4,
    center: 5,
  }

  // Convert state to desired format
  const getToothData = () => {
    const toothData = []

    for (const [toothNumber, state] of Object.entries(odontogramState)) {
      const { Cavities, Extract, Crown, Filter, Fracture } = state

      // Check for issues in each section
      Object.keys(Cavities || {}).forEach((zone) => {
        const value = Cavities[zone]
        if (value > 0) {
          toothData.push({
            tooth: toothNumber,
            section: sectionToNumber[zone] || null,
            status: value === 1 ? 'SELLANTE' : 'OBTURADO_IONOMERO',
          })
        }
      })

      // Add other issues if they exist
      if (Extract > 0) {
        toothData.push({
          tooth: toothNumber,
          section: null,
          status: 'EXTRACCION',
        })
      }

      if (Crown > 0) {
        toothData.push({
          tooth: toothNumber,
          section: null,
          status: 'CORONA',
        })
      }

      if (Filter > 0) {
        toothData.push({
          tooth: toothNumber,
          section: null,
          status: 'FILTRACION',
        })
      }

      if (Fracture > 0) {
        toothData.push({
          tooth: toothNumber,
          section: null,
          status: 'FRACTURA',
        })
      }
    }

    return toothData
  }
  const sendOdontogramData = () => {
    const toothData = getToothData()
    const odontogramData = {
      patient_id: 1,
      date: '2024-08-13',
      moment: 'Mañana',
      tooths: toothData, // Cambiar a "tooths" en lugar de "tooths" si es el nombre correcto
      notes: 'Observaciones opcionales',
    }

    axios
      .post('https://demo.habidd.com/api/ehr/odontological/odontogram/create.php', odontogramData)
      .then((response) => {
        console.log('Respuesta exitosa:', response.data)
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error)
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
            <CButton color="primary" variant="ghost" href="#/forms/Range" active>
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
            <CButton color="primary" variant="ghost" href="/#/base/collapses">
              Consentimiento informado
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/base/list-groups">
              Ordenes medicas
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/icons/coreui-icons">
              Preescripciones medicas
            </CButton>
            <CButton color="primary" variant="ghost" href="/#/notifications/alerts">
              Plan de tratamiento
            </CButton>
          </CButtonGroup>
        </CCol>
        <CCol>
          {' '}
          <CCard className="mb-4">
            <CCardHeader>
              <strong>
                <CIcon icon={cilUser} />
                Examen Odontolgico
              </strong>
            </CCardHeader>
            <CCardBody md={9} style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <CContainer>
                <div
                  ref={ref}
                  style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    marginTop: '20px',
                  }}
                >
                  <svg version="1.1" height="550px" width="100%">
                    <Teeth start={18} end={11} x={0} y={0} handleChange={handleToothUpdate} />
                    <Teeth start={21} end={28} x={210} y={0} handleChange={handleToothUpdate} />

                    <Teeth start={55} end={51} x={75} y={60} handleChange={handleToothUpdate} />
                    <Teeth start={61} end={65} x={210} y={60} handleChange={handleToothUpdate} />

                    <Teeth start={85} end={81} x={75} y={120} handleChange={handleToothUpdate} />
                    <Teeth start={71} end={75} x={210} y={120} handleChange={handleToothUpdate} />

                    <Teeth start={48} end={41} x={0} y={180} handleChange={handleToothUpdate} />
                    <Teeth start={31} end={38} x={210} y={180} handleChange={handleToothUpdate} />
                  </svg>
                </div>
                <div>
                  <button style={{ marginBottom: '10px' }} onClick={getImage}>
                    Take screenshot
                  </button>
                </div>
                <img width={815} src={image} alt={'ScreenShot'} />
              </CContainer>
            </CCardBody>
            <CCardFooter>
              <CButton color="primary" onClick={sendOdontogramData} className="float-right">
                <CIcon icon={cilSave} />
                Guardar Datos
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Range
