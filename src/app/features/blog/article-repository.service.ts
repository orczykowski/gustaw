import {Injectable} from '@angular/core';
import {ArticleLinkModel} from './article-link/article-link.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleRepositoryService {
  private static DEFAULT_ICON = 'default-article-icon.jpeg';

  fetchAllLinks(): Array<ArticleLinkModel> {

    return [
      {
        icon: ArticleRepositoryService.DEFAULT_ICON,
        title: 'Kocie terytorium',
        description: 'Jak bezpiecznie zwiekszyć powierzchnie kociego terytorium ?',
        url: 'kocie-terytorium',
        content: `Koty Zwierzęta które rządzą swoim królestwem bezpieczne kocie królestwo
Koty są jednymi z najpopularniejszych zwierząt domowych na całym świecie. Ich wyjątkowy wygląd wyjątkowa osobowość oraz niezwykłe umiejętności polowania czynią z nich niezwykłymi towarzyszami człowieka. Jedną z najbardziej niezauważanych a zarazem charakterystycznych cech kotów jest ich silne terytorialne zachowanie.
Na czym polega natura terytorialna kotów
Kiedy kot wprowadza się do naszego domu całe mieszkanie staje się jego terytorium. To pierwotne instynkty sprawiają że koty wytyczają granice i starają się utrzymać kontrolę nad całym mieszkaniem.
Oznaczanie terenu Koty posiadają gruczoły zapachowe w swoich łapach i twarzy. Przez drapanie pocieranie się o przedmioty oraz oznaczanie moczem koty pozostawiają swoje zapachowe znaki które są jednoznaczną informacją dla innych kotów że dany obszar jest już zajęty.
Zachowanie Obrona swojego terytorium jest naturalna dla kotów. Zdarza się że kiedy inny kot próbuje wkroczyć na nie swój teren miedzy nim a prawowitym kocim właścicielem może dojść do walki.
Patrole graniczne Koty często obchodzą swoje terytorium. Przemieszczając się wokół granic swojego terytorium sprawdzając czy nie pojawiły się jakieś zmiany.
Jak możemy pomóc kotom w terytorialnym zachowaniu
Oznaczone miejsce swojego terytorium Zaprojektuj specjalne miejsce dla swojego kota takie jak drapak lub legowisko które będzie jego wyłączną przestrzenią.
Dostęp do wysokości Koty lubią obserwować świat z wysokości. Zapewnienie im dostępu do regałów półek lub drapaków.
Stymulujące środowisko Zapewnienie kotu różnorodnych zabawek ukrytych miejsc tuneli i możliwości polowania.
Wykorzystaj balkon taras duży parapet. To idealne dodatkowe miejsce do obserwacji czy wylegiwania się w ciepłe letnie dni.
Aranżacja balkonu parapetu tarasu
Jednak by nasz kociak mógł spędzić czas na nowym terytorium obserwując świat podglądając życie ptaków czy wygrzewając się na słońcu musimy zapewnić mu bezpieczeństwo. Niestety to mit że kot ma 9 żyć i że zawsze spada na cztery łapy.
Siatka zabezpieczająca. Siatka powinna być specjalnie przeznaczona do tego celu. Powinna być zamontowana w sposób stabilny solidny.
Montaż siatki przyklejając do elewacji specjalne haczyki wkręcając specjalne haczyki w elewację budynku ramę okna konstrukcja stelaż przykręcana do balustrady balkonu.`
      },
      {
        icon: ArticleRepositoryService.DEFAULT_ICON,
        title: 'Kocia dieta',
        description: 'Kilka słów o kociej diecie',
        url: 'dieta',
        content: `Wpływ i różnorodność diet na zdrowie i rozwój kota
Dieta ma bezpośredni wpływ na zdrowie każdego żywego organizmu w tym oczywiście naszych kotów. Odpowiednio dobrane składniki odżywcze są niezbędne do utrzymania prawidłowej masy ciała zdrowych zębów sierści mocnych kości oraz dobrego funkcjonowania układu trawiennego.
Źle zbilansowana dieta może prowadzić do otyłości choroby serca cukrzyca problemy z układem trawiennym problemy z układem moczowym.
Rodzaje najpopularniejszych kocich diet
Dieta oparta o karmy suche to najpopularniejszy rodzaj diety dla kotów. Łatwość przechowywania długoterminowa trwałość wspieranie zdrowia jamy ustnej. Wady niskie nawodnienie ryzyko otyłości problemy trawienne brak różnorodności smaków i tekstur.
Dieta oparta o karmy mokre składające się głównie z wilgotnych kawałków mięsa lub ryb w sosie lub galaretce. Zalety nawodnienie smak i apetyt urozmaicenie diety lepsze trawienie. Wady krótszy okres przydatności wyższy koszt wpływ na zęby.
Dieta mieszana z karmy mokrej i suchej optymalne żywienie kota często obejmuje różnorodność w diecie.
BARF Biologically Appropriate Raw Food dieta oparta na podawaniu surowego mięsa niektórych owoców warzyw oraz dodatków takich jak specjalistyczne suplementy czy oleje rybne. Składniki surowe mięso kości skóra chrząstki dodatki suplementy. Pozytywy naturalność zróżnicowanie składników odżywczych poprawa stanu sierści i zdrowia jamy ustnej. Negatywy bakterie i zakażenia salmonella e.coli niedobory żywieniowe trudności w przygotowaniu i przechowywaniu.
Dieta weterynaryjna diety weterynaryjne są dostępne dla kotów z różnymi schorzeniami takimi jak choroby nerek alergie pokarmowe problemy z wagą.
O czym warto pamiętać przy wyborze diety wiek kocięta wymagają wyższej kaloryczności alergie przebyte choroby wartości odżywcze składniki i jakość diety.`
      },
      {
        icon: ArticleRepositoryService.DEFAULT_ICON,
        title: 'Kot idealny współokator',
        description: 'Pozytywny wpływ posiadania kota w domu',
        url: 'kot-idealny-wspolokator',
        content: `Korzyści dla zdrowia i samopoczucia wynikające z posiadania w domu kota
Posiadanie kota w domu to nie tylko przyjemność ale również ma liczne korzyści dla naszego zdrowia i samopoczucia. Koty są wspaniałymi towarzyszami którzy mogą przynieść wiele radości i ukojenia.
Źródło towarzystwa koty są niezwykle przyjacielskie i oddane. Ich obecność w domu pozwala nam poczuć się kochanym i zapewnia towarzystwo.
Redukcja stresu terapia emocjonalna. Badania wykazały że interakcja z kotem może pomóc w redukcji stresu. Pieszczoty i przytulanie kota wyzwalają w nas hormony szczęścia takie jak endorfiny i oksytocyna które mają działanie relaksujące. Mruczenie ciepło i przytulanie może działać uspokajająco.
Nauka odpowiedzialności i uporządkowanie dnia. Codzienne zadania takie jak karmienie czesanie czy dbanie o kuwetę mogą pomóc nam utrzymać rutynę.
Wspomaganie zdrowia obniżenie ryzyka chorób serca i nadciśnienia tętniczego poprawa układu odpornościowego zmniejszenie ryzyka alergii i astmy u dzieci.
Koty są mało wymagające. Samodzielność czystość niezależność niski poziom aktywności fizycznej.
Kot to też obowiązki. Regularnie karmić kota dostarczając odpowiednią i zrównoważoną dietę. Utrzymanie świeżej wody pitnej. Codzienne czyszczenie kuwety. Regularne szczotkowanie futra. Regularne wizyty u weterynarza szczepienia kontrole zdrowotne profilaktyczne leczenie przeciw pasożytom. Zapewnienie aktywności i zabawy zabawki laserowe wskaźniki drapaki. Bezpieczne i komfortowe środowisko życia.`
      },
      {
        icon: ArticleRepositoryService.DEFAULT_ICON,
        title: 'Dlaczego koty mruczą?',
        description: 'mrrrrrr ...',
        url: 'dlaczego-koty-mrucza',
        content: `Dlaczego koty mruczą? To dźwięk który kojarzy się z przyjemnością i spokojem. Mruczenie to znacznie bardziej złożone zjawisko które może wpływać na zdrowie zarówno kotów jak i ich opiekunów.
Mruczenie czyli dokładnie co? Mruczenie kotów powstaje przez rytmiczne napinanie i rozluźnianie mięśni krtani co powoduje drgania strun głosowych podczas przepływu powietrza. To wibracje mięśni a nie same struny głosowe są odpowiedzialne za charakterystyczny dźwięk. Mruczenie może pojawiać się zarówno na wdechu jak i wydechu. Mechanizm ten jest kontrolowany przez sygnały nerwowe wysyłane z mózgu kota szczególnie z regionu zwanego ośrodkiem rezonansu krtaniowego. Koty potrafią mruczeć niezależnie od swojego stanu emocjonalnego mogą to robić zarówno z zadowolenia jak i w sytuacjach stresowych.
Dlaczego koty mruczą? Zadowolenie i relaks koty często mruczą gdy czują się szczęśliwe i bezpieczne na przykład podczas głaskania lub leżenia w słońcu. Samoleczenie ukojenie bólu mruczenie kota nie zawsze oznacza zadowolenie może być także sygnałem stresu bólu lub choroby. Częstotliwość dźwięku mruczenia około 25-150 Hz może wspomagać regenerację kości i tkanek. Komunikacja mruczenie jest formą komunikacji zarówno z innymi kotami jak i z ludźmi mogą sygnalizować swoje potrzeby głód prośbę o uwagę sympatię. Zabezpieczenie i bezpieczeństwo kocięta zaczynają mruczeć już w wieku kilku dni co pomaga im w komunikacji z matką. Potrzeba uwagi koty mogą mruczeć celowo aby zwrócić na siebie uwagę swojego opiekuna prosząc o jedzenie lub zabawę.`
      },
      {
        icon: ArticleRepositoryService.DEFAULT_ICON,
        title: 'Jak pies z kotem. Czyli jak?',
        description: 'Już niebawem',
        url: '',
        content: ''
      },
    ];
  }
}
