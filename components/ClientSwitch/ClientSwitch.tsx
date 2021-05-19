import React, { useState } from "react"
import Link from "next/link"
import {
    ClientSwitchWrapper,
} from "./ClientSwitch.styles"

import {ClientSwitchProps } from "./ClientSwitch.d"
import Card from "@components/Card"
import Grid from "@components/Grid";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons'

const ClientSwitch: React.FC<ClientSwitchProps> = ({

}) => {

    const [client, setClient] = useState('')

    const clients = [
        {
            id: 1,
            icon: faUser,
            link: 'internet',
            desc: "Kliknij aby wyświetlić cennik i poznać szeczegóły oferty.",
            name: 'Klient indywidualny',
        },
        {
            id: 2,
            icon: faUserTie,
            link: 'contact',
            desc: "Przejdź do forumlarza kontaktowego, aby ustalić warunki współpracy.",
            name: 'Klient biznesowy',
        }
    ]

    return (
        <ClientSwitchWrapper>
             <Grid
                gridGap="1rem"
                columns="repeat(auto-fit, minmax(320px, 1fr));"
                mt={4}
            >
                {clients.map(client => {
                    return <Link href={client.link} >
                        <Card 
                            hoverEffect
                            key={client.id}
                            description={client.desc}
                            title={client.name}
                            cardIcon={client.icon}
                            onClick={() => setClient(client.name)}
                        >
                        </Card>
                    </Link>
                })}
            </Grid>

        </ClientSwitchWrapper>
    )

}

export default ClientSwitch;
