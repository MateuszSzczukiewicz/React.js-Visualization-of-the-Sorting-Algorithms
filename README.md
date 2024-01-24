# Wizualizacja Algorytmu Sortowania

Aplikacja React wykonana przy użyciu TypeScript, Vite, PNPM, Jotai, Styled Components oraz GSAP.

## Opis Projektu

Ta aplikacja została stworzona w celu wizualizacji algorytmów sortowania, oferując interaktywny sposób zrozumienia ich działania. Zastosowano najnowsze technologie, aby zapewnić szybkie ładowanie i responsywność.

## Technologie Wykorzystane

- **React z TypeScript:** Gwarantuje efektywne komponenty, a TypeScript dodaje statyczną typografię do projektu, zwiększając czytelność i bezpieczeństwo kodu.

- **Vite:** Wykorzystano jako szybkie środowisko deweloperskie do uruchamiania aplikacji. Zapewnia szybkie czasy kompilacji i błyskawiczne odświeżanie strony.

- **PNPM:** Jako menadżer paczek, PNPM został wybrany ze względu na jego efektywność w zarządzaniu zależnościami, współdzieleniu pakietów i oszczędzaniu miejsca na dysku.

- **Jotai:** Zastosowano do zarządzania stanem globalnym aplikacji. Jotai oferuje prosty i wydajny sposób na przechowywanie i aktualizowanie stanu bez konieczności używania dodatkowych narzędzi. Dodatkowo pozwala on na integrację atomów z local storage.

- **Styled Components:** Wykorzystano do stylowania komponentów. Dzięki Styled Components możliwe jest pisanie stylów w plikach JavaScript, co ułatwia utrzymanie spójności między logiką a wyglądem.

- **GSAP (GreenSock Animation Platform):** Wykorzystano do animacji wykresów. GSAP to zaawansowana biblioteka do tworzenia animacji, co ułatwiło animowanie elementów w aplikacji.

## Instrukcja Uruchomienia

1. **Instalacja zależności:**
   ```bash
   pnpm install

2. **Uruchomienie aplikacji w trybie deweloperskim:**
   ```bash
   pnpm dev

Aplikacja będzie dostępna pod adresem http://localhost:5173.

## Funkcje Aplikacji

- **Wizualizacja Algorytmów Sortowania:** Aplikacja umożliwia interaktywną wizualizację dwóch algorytmów sortowania: QuickSort oraz MergeSort, co pozwala użytkownikowi na lepsze zrozumienie ich działania, dzięki zastosowanym kolorom dla odpowiednich faz sortowania.


- **Konfigurowalne Parametry:** Użytkownik może dostosować różne parametry algorytmów, takie jak rodzaj algorytmu czy rozmiar danych do posortowania.


- **Śledzenie Stanu Aplikacji:** Stan globalny przechowywany za pomocą Jotai ułatwia monitorowanie i aktualizację stanu aplikacji w czasie rzeczywistym.

## Techniki wykorzystane podczas pracy nad aplikacją

Podczas pisania aplikacji skoncentrowałem się na stworzeniu eleganckiego, czyli przejrzystego i wydajnego kodu. Komponenty zostały podzielone na ich logikę biznesową zawartą w plikach .tsx oraz style w plikach .styles.ts. Dzięki wykorzystaniu Styled Components mogłem za pomocą propsów ingerować bezpośrednio w style za pomocą JavaScriptu. Same komponenty postanowiłem zminimalizować, by w głównej mierze wyświetlały one kod JSX, jednocześnie czerpiąc z danych zwróconych przez zastosowanie customowych hooków. Dzięki nim każdy komponent spełnia jedynie określone zadanie, bez rozwadniania ich niepotrzebnymi działaniami. W samych hookach postanowiłem używać stworzonych w utilsach funkcji, by również jak najbardziej poprawić ich czytelność. Do stworzenia stanu globalnego wybrałem Jotai. Przesyłane w aplikacji dane nie potrzebowały dodatkowych akcji, więc zastosowanie Reduxa czy Zustanda było bezcelowe. Natomiast useContext wydaje się dla mnie przestarzałe i mniej czytelne niż Jotai. Również wykorzystanie go znacznie ułatwiło mi pracę nad zapisywaniem danych w local storage, dzięki rozwiązaniu atomWithStorage i ujednoliceniu informacji między pamięcią przeglądarki a danymi zapisywanymi w stanie globalnym aplikacji. Naturalnym dla mnie było także pisanie kodu w TypeScript, dzięki któremu miałem możliwość stworzenia bezpieczniejszego i bardziej odpornego na błędy kodu, przez co zaoszczędziłem czas, który wykorzystałbym na debugowanie. Ostatnią rzeczą było zastosowanie GSAP, czyli mojej ocenie najlepszej biblioteki do tworzenia animacji, która ułatwiła mi animowanie wykresów. Całość aplikacji pozostawała w nienagannej strukturze dzięki narzędziom Prettier oraz ESLint, a także została wydeployowana na platformie Vercel, by zapewnić możliwość zobaczenia efektów aplikacji. Ponadto zadbałem o odpowiednie SEO aplikacji, jej wydajność oraz dostępność stosując atrybuty aria-label.

## Problemy podczas pracy nad aplikacją

Największym problemem podczas pracy, było zastosowanie algorytmów oraz prawidłowe ich zanimowanie na podstawie wrażenia użytkownika. Poszczególne kolory różnych faz sortowania zostały umieszczone na legendzie, dzięki czemu użytkownik może zobaczyć je w tempie pozwalającym na analizę zmian na wykresie. Dużym ułatwieniem było zastosowanie GSAP, który do minimum skrócił pracę nad poruszaniem się poszczególnych elementów. Drugim problemem była integracja stanu globalnego z wartością w local starage oraz początkowymi ustawieniami aplikacji. Problem został rozwiązany dzięki atomWithStorage zawartym w Jotai. Miałem wtedy również problem z odpowiednim parsowaniem wartości liczbowych przekazywanych do local storage, które miały na celu walidowanie najmniejszej i największej liczby słupków w wykresie użytkownika.

## Umiejętności zdobyte podczas pracy nad aplikacją

Praca z algorytmami i odpowiednie wdrażanie oraz animowanie ich w kodzie. Synchronizacja stanu globalnego aplikacji z aktualną wartością local storage dzięki zastosowaniu Jotai i atomWithStorage.