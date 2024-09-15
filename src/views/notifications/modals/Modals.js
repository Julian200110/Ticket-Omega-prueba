import React, { useState, useEffect } from 'react'
import { usePatientContext } from '../../../PatientContext'
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
  CFormInput,
  CFormLabel,
  CFormSelect,
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

const Modals = () => {
  const [code, setCode] = useState('')
  const [idType, setIdType] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [nameFirst, setNameFirst] = useState('')
  const [nameSecond, setNameSecond] = useState('')
  const [surnameFirst, setSurnameFirst] = useState('')
  const [surnameSecond, setSurnameSecond] = useState('')
  const [birthday, setBirthday] = useState('')
  const [birthPlace, setBirthPlace] = useState('')
  const [genre, setGenre] = useState('')
  const [familyStatus, setFamilyStatus] = useState('')
  const [notes, setNotes] = useState('')
  const [countryId, setCountryId] = useState('')
  const [stateId, setStateId] = useState('')
  const [cityId, setCityId] = useState('')
  const [address, setAddress] = useState('')
  const [addressType, setAddressType] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneNumberMobile, setPhoneNumberMobile] = useState('')
  const [email, setEmail] = useState('')
  const [occupation, setOccupation] = useState('')
  const [occupationCompanyName, setOccupationCompanyName] = useState('')
  const [companionName, setCompanionName] = useState('')
  const [companionRelationShip, setCompanionRelationShip] = useState('')
  const [companionPhoneNumber, setCompanionPhoneNumber] = useState('')
  const [responsibleName, setResponsibleName] = useState('')
  const [responsibleRelationShip, setResponsibleRelationShip] = useState('')
  const [responsiblePhoneNumber, setResponsiblePhoneNumber] = useState('')
  const [responsibleIdType, setResponsibleIdType] = useState('')
  const [responsibleIdNumber, setResponsibleIdNumber] = useState('')
  const [socialsecurityaffiliation, setSocialSecurityAffiliation] = useState('')
  const [socialsecuritycompanyId, setSocialSecurityCompanyId] = useState('')
  const [affiliation, setAffiliation] = useState('')
  const [entryDate, setEntryDate] = useState('')
  const [contactedWhatsapp, setContactedWhatsapp] = useState(false)
  const [contactedEmail, setContactedEmail] = useState(false)
  const [contactedSms, setContactedSms] = useState(false)
  const [contactedPhone, setContactedPhone] = useState(false)
  const tiempoTranscurrido = Date.now()
  const hoy = new Date(tiempoTranscurrido)
  const { selectedPatientId } = usePatientContext()
  const handleCreateAppointment = () => {
    const formData = {
      institution: 1,
      code: code,
      idType: idType,
      idNumber: idNumber,
      nameFirst: nameFirst,
      nameSecond: nameSecond,
      surnameFirst: surnameFirst,
      surnameSecond: surnameSecond,
      birthday: birthday,
      birthPlace: birthPlace,
      genre: genre,
      familyStatus: familyStatus,
      notes: notes,
      country_id: countryId,
      state_id: stateId,
      city_id: cityId,
      address: address,
      addressType: addressType,
      phoneNumber: phoneNumber,
      phoneNumberMobile: phoneNumberMobile,
      email: email,
      occupation: occupation,
      occupationCompanyName: occupationCompanyName,
      companionName: companionName,
      companionRelationShip: companionRelationShip,
      companionPhoneNumber: companionPhoneNumber,
      responsibleName: responsibleName,
      responsibleRelationShip: responsibleRelationShip,
      responsiblePhoneNumber: responsiblePhoneNumber,
      responsibleIdType: responsibleIdType,
      responsibleIdNumber: responsibleIdNumber,
      socialsecurityaffiliation: socialsecurityaffiliation,
      socialsecuritycompany_id: socialsecuritycompanyId,
      affiliation: affiliation,
      entryDate: hoy.toLocaleDateString(),
      contactedWhatsapp: true,
      contactedEmail: true,
      contactedSms: false,
      contactedPhone: false,
    }
    axios
      .post('https://demo.habidd.com/api/ehr/patients/create.php', formData)
      .then((response) => {
        console.log('Respuesta exitosa:', response.data)
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error)
        console.log('CITA CREADO')
      })
  }

  const handleChange = (e) => {
    const value = e.target.value

    // Validar que el valor solo contenga letras, números, puntos, guiones, y arroba
    const formattedValue = value.replace(/[^a-zA-Z0-9._@-]/g, '')

    // Actualizar el estado con el valor formateado
    setEmail(formattedValue)
  }

  // Dividir el valor en parte local y dominio
  const [localPart, domainPart] = email.split('@')

  // Si no hay dominio, usamos el dominio por defecto
  const domain = domainPart ? domainPart : ''

  // Mostrar el valor del campo de entrada como "local@domain"
  const displayValue = `${localPart ? localPart : ''}@${domain}`
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
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setIdType(e.target.value)}
                    >
                      <option></option>
                      <option value="Casado">CC</option>
                      <option value="Soltero">TI</option>
                      <option value="Viudo">CE</option>
                    </CFormSelect>
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Numero de documento
                      </CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setIdNumber(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Primer Nombre</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setNameFirst(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Segundo Nombre</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setNameSecond(e.target.value)}
                    />
                  </CCol>
                </CRow>
                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Primer Apellido</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setSurnameFirst(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Segundo Apellido</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setSurnameSecond(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Fecha de nacimiento
                      </CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="Date"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Lugar de nacimiento
                      </CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setBirthPlace(e.target.value)}
                    />
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
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setGenre(e.target.value)}
                    >
                      <option></option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                      <option value="No refiere">No refiere</option>
                      <option value="Otro">Otro</option>
                    </CFormSelect>
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Estado Civil</CFormLabel>{' '}
                    </strong>
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setFamilyStatus(e.target.value)}
                    >
                      <option></option>
                      <option value="Casado">Casado/a</option>
                      <option value="Soltero">Soltero/a</option>
                      <option value="Viudo">Viudo/a</option>
                    </CFormSelect>
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Cod del paciente</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </CCol>
                </CRow>

                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Observaciones</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setNotes(e.target.value)}
                    />
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
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setCountryId(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Departamento</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setStateId(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Municipio</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setCityId(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Zona de residencia</CFormLabel>{' '}
                    </strong>
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setAddressType(e.target.value)}
                    >
                      <option></option>
                      <option value="Urbano">Urbano</option>
                      <option value="Rural">Rural</option>
                    </CFormSelect>
                  </CCol>
                </CRow>

                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Direccion</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Telefono Fijo</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Celular</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setPhoneNumberMobile(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Email</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      value={displayValue}
                      placeholder="Introduce tu correo"
                      onChange={handleChange}
                      className="custom-email-input"
                    />
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
                      <CFormLabel htmlFor="exampleFormControlInput1">Ocupacion</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </CCol>
                  <CCol></CCol>
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
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setCompanionName(e.target.value)}
                    />
                  </CCol>

                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Telefono</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setCompanionPhoneNumber(e.target.value)}
                    />
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
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setResponsibleName(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Parentesco</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setResponsibleRelationShip(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Telefono</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setResponsiblePhoneNumber(e.target.value)}
                    />
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
                      <CFormLabel htmlFor="exampleFormControlInput1">EPS</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      onChange={(e) => setSocialSecurityCompanyId(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Tipo de vinculacion
                      </CFormLabel>{' '}
                    </strong>
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={(e) => setAffiliation(e.target.value)}
                    >
                      <option></option>
                      <option value="Beneficiario">Beneficiario</option>
                      <option value="Subsidiado">Subsidiado</option>
                      <option value="Independiente">Independiente</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
              </CContainer>
            </CCardBody>
            <CCardFooter className="text-body-secondary " align="end">
              <CButton
                color="primary"
                variant="outline"
                href="/#/theme/colors"
                onClick={() => {
                  handleCreateAppointment()
                }}
              >
                Guardar
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Modals
