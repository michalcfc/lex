import React, { useState } from "react"
import {
    CallWidgetButton,
    CallWidgetWrapper

} from "./CallWidget.styles"

import Modal from "@components/Modal"
import Input from "@components/Input"
import Button from "@components/Button"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone,
} from '@fortawesome/free-solid-svg-icons'

import { CallWidgetProps } from "./CallWidget.d"

const CallWidget: React.FC<CallWidgetProps> = () => {

    const [isPhoneModalOpen, setPhoneModalOpen] = useState(false)

    return (
        <>
        <CallWidgetWrapper>
            <CallWidgetButton onClick={() => setPhoneModalOpen(true)}>
                <FontAwesomeIcon color="#172e57" icon={faPhone} />
            </CallWidgetButton>
       </CallWidgetWrapper>
       {
        isPhoneModalOpen 
            && <Modal 
                    title="Zamów połączenie"
                    text="Oddzwonimy"
                    isOpen={isPhoneModalOpen} 
                    isClose={() => setPhoneModalOpen(false)}
                > 
                      <Input 
                        value=""
                        label="Imię"
                        onChange={() => {}}
                    />
                    <Input 
                        value=""
                        label="Numer telefonu"
                        onChange={() => {}}
                    />
                    <Button 
                        name="Zamawiam"
                        onClick={() => {}}
                    />
                </Modal>
       }
       </>
    )
}

export default CallWidget;