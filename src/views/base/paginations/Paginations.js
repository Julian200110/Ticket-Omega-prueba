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
  const [appointments, setAppointments] = useState([])
  const { selectedPatientId } = usePatientContext()
  const [code, setCode] = useState('')
  const [idType, setIdType] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [nameFirst, setNameFirst] = useState()
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
  const [address, setAddress] = useState(appointments.address)
  const [addressType, setAddressType] = useState(appointments.addressType)
  const [phoneNumber, setPhoneNumber] = useState(appointments.phoneNumber)
  const [phoneNumberMobile, setPhoneNumberMobile] = useState(appointments.phoneNumberMobile)
  const [email, setEmail] = useState(appointments.email)
  const [occupation, setOccupation] = useState(appointments.occupation)
  const [occupationCompanyName, setOccupationCompanyName] = useState(
    appointments.occupationCompanyName,
  )
  const [companionName, setCompanionName] = useState(appointments.companionName)
  const [companionRelationShip, setCompanionRelationShip] = useState(
    appointments.companionRelationShip,
  )
  const [companionPhoneNumber, setCompanionPhoneNumber] = useState(
    appointments.companionPhoneNumber,
  )
  const [responsibleName, setResponsibleName] = useState(appointments.responsibleName)
  const [responsibleRelationShip, setResponsibleRelationShip] = useState(
    appointments.responsibleRelationShip,
  )
  const [responsiblePhoneNumber, setResponsiblePhoneNumber] = useState(
    appointments.responsiblePhoneNumber,
  )
  const [responsibleIdType, setResponsibleIdType] = useState(appointments.responsibleIdType)
  const [responsibleIdNumber, setResponsibleIdNumber] = useState(appointments.responsibleIdNumber)
  const [socialsecurityaffiliation, setSocialSecurityAffiliation] = useState(
    appointments.socialsecurityaffiliation,
  )
  const [socialsecuritycompanyId, setSocialSecurityCompanyId] = useState(
    appointments.socialsecuritycompanyId,
  )
  const [affiliation, setAffiliation] = useState(appointments.affiliation)
  const [entryDate, setEntryDate] = useState('')
  const [contactedWhatsapp, setContactedWhatsapp] = useState(false)
  const [contactedEmail, setContactedEmail] = useState(false)
  const [contactedSms, setContactedSms] = useState(false)
  const [contactedPhone, setContactedPhone] = useState(false)
  const handleCreateAppointment = () => {
    const formData = {
      id: selectedPatientId,
      institution: 1,
      code: appointments.code,
      idType: appointments.idType,
      idNumber: appointments.idNumber,
      nameFirst: appointments.nameFirst,
      nameSecond: appointments.nameSecond,
      surnameFirst: appointments.surnameFirst,
      surnameSecond: appointments.surnameSecond,
      birthday: appointments.birthday,
      birthPlace: appointments.birthPlace,
      genre: appointments.genre,
      familyStatus: appointments.familyStatus,
      notes: appointments.notes,
      country_id: appointments.countryId,
      state_id: appointments.stateId,
      city_id: appointments.cityId,
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
      entryDate: '2024-08-08',
      contactedWhatsapp: true,
      contactedEmail: true,
      contactedSms: false,
      contactedPhone: false,
    }
    axios
      .put('https://demo.habidd.com/api/ehr/patients/edit.php', formData)
      .then((response) => {
        console.log('Respuesta exitosa:', response.data)
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error)
        console.log('CITA CREADO')
      })
  }
  function getAppointments() {
    const options = {
      method: 'GET',
      url: `https://demo.habidd.com/api/ehr/patients/get.php?institution=1&id=${selectedPatientId}`,
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
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      value={appointments.idType}
                      onChange={(e) => setIdType(e.target.value)}
                    />
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
                      value={appointments.idNumber}
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
                      value={appointments.nameFirst}
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
                      value={appointments.nameSecond}
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
                      value={appointments.surnameFirst}
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
                      value={appointments.surnameSecond}
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
                      value={appointments.birthday}
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
                      value={appointments.birthPlace}
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
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      value={appointments.genre}
                      onChange={(e) => setGenre(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Estado Civil</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      value={appointments.familyStatus}
                      onChange={(e) => setFamilyStatus(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Cod del paciente</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder=""
                      value={appointments.code}
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
                      value={appointments.notes}
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
                      value={appointments.countryId}
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
                      value={appointments.stateId}
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
                      value={appointments.cityId}
                      onChange={(e) => setCityId(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Zona de residencia</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder={appointments.addressType}
                      onChange={(e) => setAddressType(e.target.value)}
                    />
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
                      placeholder={appointments.address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Telefono</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder={appointments.phoneNumber}
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
                      placeholder={appointments.phoneNumberMobile}
                      onChange={(e) => setPhoneNumberMobile(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Email</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="email"
                      id="exampleFormControlInput1"
                      placeholder={appointments.email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      <CFormLabel htmlFor="exampleFormControlInput1">Cargo</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder={appointments.occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Nombre de la empresa
                      </CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder={appointments.occupationCompanyName}
                      onChange={(e) => setOccupationCompanyName(e.target.value)}
                    />
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
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder={appointments.companionName}
                      onChange={(e) => setCompanionName(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Parentesco</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder={appointments.companionRelationShip}
                      onChange={(e) => setCompanionRelationShip(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Telefono</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder={appointments.companionPhoneNumber}
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
                      placeholder={appointments.responsibleName}
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
                      placeholder={appointments.responsibleRelationShip}
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
                      placeholder={appointments.responsiblePhoneNumber}
                      onChange={(e) => setResponsiblePhoneNumber(e.target.value)}
                    />
                  </CCol>
                </CRow>

                <CRow className="p-2">
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Tipo de documento</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder={appointments.responsibleIdType}
                      onChange={(e) => setResponsibleIdType(e.target.value)}
                    />
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
                      placeholder={appointments.responsibleIdNumber}
                      onChange={(e) => setResponsibleIdNumber(e.target.value)}
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
                      <CFormLabel htmlFor="exampleFormControlInput1">Numero Poliza</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder={appointments.socialsecurityaffiliation}
                      onChange={(e) => setSocialSecurityAffiliation(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">EPS</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder={appointments.socialsecuritycompany_id}
                      onChange={(e) => setSocialSecurityCompanyId(e.target.value)}
                    />
                  </CCol>
                  <CCol>
                    <strong>
                      <CFormLabel htmlFor="exampleFormControlInput1">Tipo de afiliacion</CFormLabel>{' '}
                    </strong>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder={appointments.affiliation}
                      onChange={(e) => setAffiliation(e.target.value)}
                    />
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

export default Paginations
