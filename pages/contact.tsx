import { useState, useEffect } from 'react'

import { HomeProps } from "./../Types/Home.d"
import ContactForm from "@components/ContactForm";
import Head from "next/head";

import Heading from "@components/Heading"
import Container from "@components/Container"

const Contact: React.FC<HomeProps> = (

) => {

    const [choosenPack, setChoosenPack] = useState<string>('')

    useEffect(() => {
        const packName = localStorage.getItem('choosenPack')
        setChoosenPack(packName)
    }, [choosenPack])

    let messageTopic = [
        {
            id: 0,
            value: 'Wybierz temat',
            label: "Wybierz temat",
            disabled: true,
            selected: true
        },
        {
            id: 1,
            value: 'Internet',
            label: "Internet"
        },
        {
            id: 2,
            value: 'Telewizja',
            label: "Telewizja"
        },
        {
            id: 3,
            value: "Serwis",
            label: "Serwis"
        },
    ]

    const checkChoosenPack = () => {
        if(choosenPack) {
            messageTopic.push(
                {
                    id: 4,
                    value: choosenPack,
                    label: choosenPack
                })
        }
        return messageTopic
    }

    return (
      <Container>
          <Head>
              <title>
                  Kontakt
              </title>
          </Head>
              <Heading>
                  Kontakt
              </Heading>
              {/*Adres e-mail: biuro@lexell.com.pl*/}
              <ContactForm
                  messageTopic={checkChoosenPack()}
                  choosenPack={choosenPack}
              />
      </Container>
    )
}

export default Contact

