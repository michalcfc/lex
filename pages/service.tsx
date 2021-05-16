import { HomeProps } from "./../Types/Home.d"
import Head from "next/head";

import Container from "@components/Container"

const Service: React.FC<HomeProps> = ({

  }) => {
    return (
        <Container>
            <Head>
                <title>Lexell help desk IT</title>
            </Head>
            <h2>Lexell help desk IT</h2>


            <p>
                Szukasz doświadczonego specjalisty, który da drugie życie Twojemu urządzeniu?
                W takim razie nie mogłeś lepiej trafić! Nasza firma Lexell zajmuje się szeroko pojętym <strong>serwisem komputerowym</strong> od ponad 25 lat.
                Nie straszne są nam zarówno wszelkiego rodzaju awarie komputerowe, jak i konfiguracja nowo zakupionych urządzeń zgodnie z indywidualnymi preferencjami Klienta.
                Jesteś gotowy na prawdziwą rewolucję technologiczną, która wzniesie Twoją pracę na wyższy poziom?
            </p>
            <h2>Czym jest help desk IT?</h2>
            <p>
                Nasi pracownicy helpdesk IT to certyfikowani informatycy z wieloletnim doświadczeniem w branży, którzy na pierwszym miejscu stawiają zadowolenie Klientów.
                Ich głównym zadaniem jest serwis komputerowy, a także diagnozowanie oraz rozwiązywanie problemów natury technicznej.
                Niemniej równie chętnie udzielają odpowiedzi na trapiące naszych Klientów pytania zarówno w zakresie danego oprogramowania, systemu, jak i na te dotyczące konfiguracji bądź skutecznego zabezpieczenia sprzętu.
            </p>
            <h2>Jakie usługi oferujemy w ramach help desk IT?</h2>
            <p>
                W Lexell zajmujemy się przede wszystkim  <strong>naprawą laptopów</strong> oraz komputerów stacjonarnych, tym samym gwarantując naszym Klientom ochronę oraz prywatność danych znajdujących się na dyskach.
                Nie obce nam są również działania, mające na celu usprawnienie prędkości powierzonego w nasze ręce sprzętu, a także czyszczenie układów chłodzenia.
                Niemniej równie chętnie służymy pomocą podczas zakupu nowego urządzenia, niezbędnych podzespołów, oraz konfiguracji.
                Równocześnie mając na uwadze nieustannie zmieniające się trendy w branży IT, jesteśmy w gotowości, aby wdrażać najnowsze technologie, chcąc zapewnić najwyższą jakość bezpieczeństwa oraz ochrony danych naszych Klientów.
            </p><br/>

            <p>
                Jeśli jesteś zainteresowany <strong>serwisem komputerowym</strong>. <strong>Skórzewo</strong> to miejscowość, w której znajdziesz naszą firmę.
                Posiadasz jakiekolwiek pytania, dotyczące <strong>naprawy laptopa</strong> bądź komputera stacjonarnego?
                Skontaktuj się z nami teraz - telefoniczne bądź mailowo, a nasi specjaliści rozwieją wszelkie Twoje wątpliwości i odpowiedzą na trapiące Cię pytania!
            </p>

        </Container>
    )
}

export default Service