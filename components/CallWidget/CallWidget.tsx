import React, { useState } from "react"
import {
    CallWidgetButton,
    CallWidgetWrapper

} from "./CallWidget.styles"

import Modal from "@components/Modal"

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
            && <Modal isOpen={isPhoneModalOpen} isClose={() => setPhoneModalOpen(false)}> 
                    Zamów połączenie. Oddzwonimy.
                </Modal>
       }
       </>
    )
}

export default CallWidget;