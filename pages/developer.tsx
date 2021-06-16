import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";
import Container from "@components/Container";
import Heading from "@components/Heading";
import ContactForm from "@components/ContactForm";

const Developer: React.FC<HomeProps> = ({

                                        }) => {

    let messageTopic = [
        {
            id: 0,
            value: 'Dla dewelopera',
            label: "Dla dewelopera",
            selected: true
        },
    ]

    return (
        <>
            <Head>
                <title>
                    Dla dewelopera
                </title>
            </Head>
            <Container>
                <Heading>
                    Dla dewelopera
                </Heading>
                <p>
                    Jeśli jesteś zainteresowany współpracą z naszą firmą, możesz zostawić zapytanie w formularzu bądź napisać e-mail na adres: <a href="mailto:biuro@lexell.com.pl">biuro@lexell.com.pl</a>
                </p><br/>
                <ContactForm
                    messageTopic={messageTopic}
                />
            </Container>
        </>
    )
}

export default Developer