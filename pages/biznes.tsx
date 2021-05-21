import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";
import Container from "@components/Container";
import Heading from "@components/Heading";
import ContactForm from "@components/ContactForm";

const Biznes: React.FC<HomeProps> = ({

}) => {

    let messageTopic = [
        {
            id: 0,
            value: 'Internet dla firmy',
            label: "Internet dla firmy",
            selected: true
        },
    ]

    return (
        <>
            <Head>
                <title>
                    Internet dla firm
                </title>
            </Head>
            <Container>
                <Heading>
                    Internet dla firm
                </Heading>
                <p>
                Nasza firma oferuje łącze internetu radiowego. Do usługi dołączamy gwarancję niezawodności oraz prędkości. Podczas trwania umowy zapewniamy pomoc techniczną dla swoich abonentów. Jeśli jesteś zainteresowany naszą ofertą dla swojej firmy, skontaktuj się z nami przez formularz bądź bezpośrednio na e-mail: <a href="mailto:biuro@lexell.com.pl">biuro@lexell.com.pl</a>
                </p><br/>
                <ContactForm
                    messageTopic={messageTopic}
                />
            </Container>
        </>
    )
}

export default Biznes