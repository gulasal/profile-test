import React from 'react'
import { Text } from '@nextui-org/react'
import PersonalInformationForm from './PersonalInformationForm'
function RegistrationForm() {
    const text = "Ihre personlichen Informationen"
  return (
    <div style={{width: "80%"}}>
        <Text h6>{text}</Text>
        <PersonalInformationForm/>
    </div>
  )
}

export default RegistrationForm