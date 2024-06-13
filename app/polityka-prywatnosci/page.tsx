import Link from "next/link";

export default function Page() {
    return (
        <article className="flex flex-col md:w-[80%] w-[90%] mx-auto md:mt-[50px] mt-[30px]">
            <header>
                <h1 className="text-3xl font-bold text-center my-4 text-blue-primary">Polityka prywatności</h1>
            </header>

            <section className="flex flex-col w-full mt-2">
                <h2 className="text-2xl font-bold text-center my-4 text-neutral-200">Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.</h2>
            </section>

            <section className="flex flex-col w-full mt-5">
                <h3 className="text-3xl font-bold text-left my-4 text-neutral-200">1. Informacje ogólne</h3>
                <ul className="flex flex-col list-none">
                    <li className="text-neutral-200 text-lg py-0.5 px-3">1. Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: rexcars.pl</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">2. Operatorem serwisu oraz Administratorem danych osobowych jest: Rex Cars ADRIAN PACHOLCZYK ul. Prezydenta RP Ignacego Mościckiego 4, 26-110 Skarżysko-Kamienna</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">3. Adres kontaktowy poczty elektronicznej operatora: kontakt@rexcars.pl</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">4. Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">5. Serwis wykorzystuje dane osobowe w następujących celach:</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">a. Do obsługi zapytań przez formularz kontaktowy</li>
                    <li className="text-neutral-200 text-lg pb-0.5 pt-2 px-3">6. Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">a. Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">b. Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. &quot;ciasteczka&quot;).</li>
                </ul>
            </section>

            <section className="flex flex-col w-full mt-5">
                <h3 className="text-3xl font-bold text-left my-4 text-neutral-200">2. Wybrane metody ochrony danych stosowane przez Operatora</h3>
                <ul className="flex flex-col list-none">
                    <li className="text-neutral-200 text-lg py-0.5 px-3">1. Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">2. Operator okresowo zmienia swoje hasła administracyjne.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">3. Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych.</li>
                </ul>
            </section>

            <section className="flex flex-col w-full mt-5">
                <h3 className="text-3xl font-bold text-left my-4 text-neutral-200">3. Hosting</h3>
                <ul className="flex flex-col list-none">
                    <li className="text-neutral-200 text-lg py-0.5 px-3">1. Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: vercel.com</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">2. Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">a. zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików),</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">b. czas nadejścia zapytania,</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">c. czas wysłania odpowiedzi,</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">d. nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP,</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">e. informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">f. adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do Serwisu nastąpiło przez odnośnik,</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">g. informacje o przeglądarce użytkownika,</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">h. informacje o adresie IP,</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">i. informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez rejestratory na stronie,</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">j. informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz wysyłanej przez Operatora.</li>
                </ul>
            </section>

            <section className="flex flex-col w-full mt-5">
                <h3 className="text-3xl font-bold text-left my-4 text-neutral-200">3. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h3>
                <ul className="flex flex-col list-none">
                    <li className="text-neutral-200 text-lg py-0.5 px-3">1. W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">a. firma hostingowa na zasadzie powierzenia</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">b. operatorzy obsługujący usługę wysyłania wiadomości e-mail</li>
                    <li className="text-neutral-200 text-lg pb-0.5 pt-2 px-3">2. Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">3. Przysługuje Ci prawo żądania od Administratora:</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">a. dostępu do danych osobowych Ciebie dotyczących,</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">b. ich sprostowania,</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">c. usunięcia,</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">d. ograniczenia przetwarzania,</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">e. oraz przenoszenia danych.</li>
                    <li className="text-neutral-200 text-lg pb-0.5 pt-2 px-3">4. Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.2 wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">5. Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">6. Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">7. W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">8. Dane osobowe są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że przesyłamy je poza teren Unii Europejskiej.</li>
                </ul>
            </section>

            <section className="flex flex-col w-full mt-5">
                <h3 className="text-3xl font-bold text-left my-4 text-neutral-200">5. Informacje w formularzach</h3>
                <ul className="flex flex-col list-none">
                    <li className="text-neutral-200 text-lg py-0.5 px-3">1. Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">2. Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">3. Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">4. Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.</li>
                </ul>
            </section>

            <section className="flex flex-col w-full mt-5">
                <h3 className="text-3xl font-bold text-left my-4 text-neutral-200">6. Logi Administratora</h3>
                <ul className="flex flex-col list-none">
                    <li className="text-neutral-200 text-lg py-0.5 px-3">1. Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.</li>
                </ul>
            </section>

            <section className="flex flex-col w-full mt-5">
                <h3 className="text-3xl font-bold text-left my-4 text-neutral-200">7. Istotne techniki marketingowe</h3>
                <ul className="flex flex-col list-none">
                    <li className="text-neutral-200 text-lg py-0.5 px-3">1. Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/</li>
                </ul>
            </section>

            <section className="flex flex-col w-full mt-5">
                <h3 className="text-3xl font-bold text-left my-4 text-neutral-200">8. Informacja o plikach cookies</h3>
                <ul className="flex flex-col list-none">
                    <li className="text-neutral-200 text-lg py-0.5 px-3">1. Serwis korzysta z plików cookies.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">2. Pliki cookies (tzw. &quot;ciasteczka&quot;) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">3. Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">4. Pliki cookies wykorzystywane są w następujących celach:</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">a. utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-6">b. realizacji celów określonych powyżej w części &quot;Istotne techniki marketingowe&quot;;</li>
                    <li className="text-neutral-200 text-lg pb-0.5 pt-2 px-3">5. W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: &quot;sesyjne&quot; (session cookies) oraz &quot;stałe&quot; (persistent cookies). Cookies &quot;sesyjne&quot; są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). &quot;Stałe&quot; pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">6. Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">7. Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">8. Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).</li>
                </ul>
            </section>

            <section className="flex flex-col w-full mt-5">
                <h3 className="text-3xl font-bold text-left my-4 text-neutral-200">9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</h3>
                <ul className="flex flex-col list-none">
                    <li className="text-neutral-200 text-lg py-0.5 px-3">1. Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www</li>
                    <li className="text-neutral-200 text-lg py-0.5 px-3">2. W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami:</li>
                    <Link rel='noopener norefferer' target='_blank' href={"https://support.microsoft.com/pl-pl/help/10607/microsoft-edge-view-delete-browser-history"}><li className="text-neutral-200 text-lg py-0.5 px-6">1. Edge</li></Link>
                    <Link rel='noopener norefferer' target='_blank' href={"https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer"}><li className="text-neutral-200 text-lg py-0.5 px-6">2. Internet Explorer</li></Link>
                    <Link rel='noopener norefferer' target='_blank' href={"http://support.google.com/chrome/bin/answer.py?hl=pl&answer=95647"}><li className="text-neutral-200 text-lg py-0.5 px-6">3. Chrome</li></Link>
                    <Link rel='noopener norefferer' target='_blank' href={"http://support.apple.com/kb/PH5042"}><li className="text-neutral-200 text-lg py-0.5 px-6">4. Safari</li></Link>
                    <Link rel='noopener norefferer' target='_blank' href={"http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek"}><li className="text-neutral-200 text-lg py-0.5 px-6">5. Firefox</li></Link>
                    <Link rel='noopener norefferer' target='_blank' href={"http://help.opera.com/Windows/12.10/pl/cookies.html"}><li className="text-neutral-200 text-lg py-0.5 px-6">6. Opera</li></Link>
                    <li className="text-neutral-200 text-lg pb-0.5 pt-2 px-3">Urządzenia mobilne: </li>
                    <Link rel='noopener norefferer' target='_blank' href={"http://support.google.com/chrome/bin/answer.py?hl=pl&answer=95647"}><li className="text-neutral-200 text-lg py-0.5 px-6">1. Android</li></Link>
                    <Link rel='noopener norefferer' target='_blank' href={"http://support.apple.com/kb/HT1677?viewlocale=pl_PL"}><li className="text-neutral-200 text-lg py-0.5 px-6">2. Safari (iOS)</li></Link>
                    <Link rel='noopener norefferer' target='_blank' href={"http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings"}><li className="text-neutral-200 text-lg py-0.5 px-6">3. Windows Phone</li></Link>
                </ul>
            </section>

        </article>
    );
}