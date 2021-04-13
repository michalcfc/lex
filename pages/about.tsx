
import Head from 'next/head';
import { HomeProps } from "./../Types/Home.d"

import Heading from "components/Heading"
import Container from "components/Container"

const About: React.FC<HomeProps> = ({

}) => {
    return (
        <>
        <Head>
            <title>
                O nas
            </title>
        </Head>
        <Container>
            <Heading>
                O nas
            </Heading>
            <p>Główny profil działalności firmy "LEXELL" to zapewnienie nielimitowanego
                dostępu do internetu, wyłącznie za pomocą łączności radiowej
                i bezpośrednio do indywidualnego użytkownika.
                Prosimy o zapoznanie się ze szczegółami naszej oferty.
                Na bazie urządzeń do łączności 2,4GHz oraz 5.8GHz "LEXELL"  projektuje i uruchamia
                "pod klucz" dedykowane połączenia punkt-punkt (point2point link)
                zestawiane na odległościach od kilkuset metrów do kilkunastu kilometrów. </p>

                <p>Miejscowości, w których świadczona jest usługa
                dostępu do internetu (internet bezprzewodowy - internet radiowy):</p>

            <ul>
                <li>*  Poznań (Junikowo, os. Kwiatowe, obszar między ul. Grunwaldzką, Żmigrodzką i linią kolejową - od ul. Wołczyńskiej),</li>
                <li>*  Fabianowo, od strony Plewisk do ul. Sycowskiej i Wołczyńskiej,</li>
                <li>*  Batorowo,   *  Dąbrowa,   *  Dąbrówka,   *  Dopiewiec,</li>
                <li>*  Dopiewo,  *  Gołuski,  *  Komorniki,  *  Palędzie,</li>
                <li>*  Plewiska,  *  Przeźmierowo,  *  Skórzewo,  *   Wysogotowo.</li>
            </ul>

            <p>Planowane lokalizacje :</p>

            <ul>
                <li>*  Konarzewo, Baranowo, *  Chyby,  *  Lusówko,  *   Sady,</li>
                <li>*  Tarnowo Podgórne  oraz inne miejscowości ,znajdujące się</li>
            </ul>
                <p>w granicach już z działającymi  lokalizacjami (patrz powyżej) - zainteresowane osoby prosimy o  kontakt </p>
        </Container>
        </>
    )
}

export default About