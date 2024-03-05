import React, { useState } from "react"

import {
    ClientSwitchWrapper,
    StyledLink,
    LeftSide,
    SwitchButtons
} from "./ClientSwitch.styles"
import {ClientSwitchProps } from "./ClientSwitch.d"

import Card from "@components/Card"
import Flexbox from "@components/Flexbox"
import {Link} from "@components/Link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faUserTie,
    faUserSecret
} from '@fortawesome/free-solid-svg-icons'

const ClientSwitch: React.FC<ClientSwitchProps> = ({

   }) => {

    const [client, setClient] = useState('')

    return (
        <ClientSwitchWrapper>
            <Flexbox
                wrap
                align="center"
                justify="space-between"
            >
                <LeftSide>
                    <Link href='/internet'>
                        <Card
                            hoverEffect
                            title={'Klient indywidualny'}
                            description={"Kliknij aby wyświetlić cennik i poznać szeczegóły oferty."}
                            cardIcon={faUser}
                            onClick={() => setClient('Klient indywidualny')}
                        >
                        </Card>
                    </Link>
                </LeftSide>
                <SwitchButtons>
                    <Link href='/business'>
                        <StyledLink>
                            Dla biznesu
                        </StyledLink>
                    </Link>
                    <Link href='/developer'>
                        <StyledLink>
                            Dla dewelopera
                        </StyledLink>
                    </Link>
                </SwitchButtons>
            </Flexbox>

        </ClientSwitchWrapper>
    )

}

export default ClientSwitch;
