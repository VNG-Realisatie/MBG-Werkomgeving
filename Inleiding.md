# Inleiding

Het onderliggende document bevat het Metamodel voor BerichtstructuurGegevens (MBG), voor het beschrijven van Berichtstructuurmodellen. 
VNG Realisatie heeft er voor gekozen dit metamodel als een extensie op het MUG (Metamodel UitwisselingsGegevens) te definiëren. In theorie is het ook mogelijk om het MBG als een extensie op het MIM te definiëren. In beide gevallen vormen ze tezamen de basis voor een Bericht Structuur Model (BSM). Het metamodel beschrijft de modellering zoals toegepast bij VNG Realisatie en Kennisnet bij het modelleren van API-specificaties. Het dient als basis voor de doorontwikkeling daarvan binnen de Imvertor community zodat het ook voor andere organisaties en op mogelijke andersoortige specificaties toepasbaar wordt. Het model bevat duidelijke afspraken over het vastleggen van berichtgegevensspecificaties.

Dit document is opgesteld met kennis aanwezig bij VNG Realisatie.

## Toepassingsgebied

Het metamodel biedt de modelleringstaal waarmee het bericht-technische deel van een BSM gemaakt, gelezen en begrepen kan worden. Het doel hiervan is:
*	de leesbaarheid en eenduidigheid van BSM’s te vergroten;
*	een basis te leggen voor het aanbrengen van verbeteringen en uitbreidingen van dit metamodel en de gerelateerde BSM’s;
*	tooling te kunnen (door)ontwikkelen en (her)gebruiken voor resp. door alle partijen die kiezen voor dit metamodel;
*	en in het verlengde hiervan, om op een meer geautomatiseerde werkwijze sneller en beter voorspelbaar uitwisselingsstandaarden op te kunnen stellen.

Voor BSM’s die op basis van dit metamodel zijn beschreven geldt:
*	ze zijn eenduidig te interpreteren en goed te vergelijken;
*	er kan documentatie mee worden opgesteld of gegenereerd welke geschikt is voor publicatie;
*	er kunnen specificaties mee worden gegenereerd die direct geschikt zijn om bijv. als OAS voor een API-standaard in te zetten.

## Doelgroep

Dit document is primair bestemd voor berichtontwerpers die BSM’s maken, mensen die model-driven verder werken op basis van informatiemodellen 
die zijn vervaardigd op basis van [[MIM]]. Kennis van informatiemodelleringen middels [[UML]] is een vereiste. Dit metamodel richt zich in 
het bijzonder op de informatievoorziening binnen het overheidsdomein, al is het ook in bredere context inzetbaar.

Daarnaast is dit document ook bruikbaar voor ontwikkelaars van tooling die de, op basis van de met dit metamodel vervaardigde, BSM’s als input nemen.

## Leeswijzer

Het metamodel beschrijven we in 3 hoofdstukken en enkele bijlages.

Lees de [Inleiding](#inleiding) verder voor inzicht in wat we onder een BSM en onder een metamodel verstaan, hoe deze modellen zich verhouden tot UML en de vier lagen metamodel architectuur van de Object Management Group [[OMG]], 

Het hoofdstuk [Metamodel Algemeen](#metamodel-algemeen) bevat de beschrijving van alle bouwstenen c.q. de modelelementen van het MBG metamodel, in de vorm van definities en specificaties. De betekenis en toelichting van de modelelementen van het metamodel vormt het materiaal waarmee een uitputtende modelspecificatie kan worden opgesteld. 

Het hoofdstuk [Metamodel in UML](#metamodel-in-uml) beschrijft hoe de implementatie van het MBG in [[UML]] er uit ziet. In dit hoofdstuk wordt beschreven hoe het MBG metamodel zich verhoudt tot het UML metamodel, welke uitbreidingen c.q. verbijzonderingen van het UML metamodel zijn aangebracht.

Het hoofdstuk [Afspraken & Regels](#afspraken-regels) gaat in op een aantal afspraken en regels die van toepassing zijn op een BSM.
In de bijlage [Diagrammen](#diagrammen) vind je een aantal diagrammen die betrekking hebben op het MBG metamodel. Bijlage [Metamodel UitwisselingsGegevens (MUG)](#metamodel-UitwisselingsGegevens-mug) beschrijft het MUG metamodel, een metamodel dat nagenoeg 1 op 1 te mappen is op het MIM en alleen qua naamgeving van de modelelementen en qua metagegevens afwijkt van het MIM metamodel. Om die reden hebben we dit niet in een apart document beschreven. Tenslotte vind je in de bijlagen [Specifieke MBG metagegevens voor Imvertor](#specifieke-mbg-metagegevens-voor-imvertor) en [Specifieke MUG metagegevens voor Imvertor](#specifieke-mug-metagegevens-voor-imvertor) nog de specifiek voor Imvertor gedefinieerde metagegevens.

## Gebruikswijzer

Met de bouwstenen oftewel de modelelementen die in dit metamodel beschreven zijn is het bericht-technische deel van een BSM te maken. Om zo'n BSM te maken volstaat het veelal om het hoofdstuk [Metamodel Algemeen](#metamodel-algemeen) en bijlage [Specifieke MBG metagegevens voor Imvertor](#specifieke-mbg-metagegevens-voor-imvertor) door te nemen. Voor het maken van een UGM kun je terugvallen op de bijlagen [Metamodel UitwisselingsGegevens (MUG)](#metamodel-UitwisselingsGegevens-mug) en [Specifieke MUG metagegevens voor Imvertor](#specifieke-mug-metagegevens-voor-imvertor).

De andere hoofdstukken kan je behandelen als naslagwerk, voor als er tijdens het modelleren vragen ontstaan. Neem vervolgens je favoriete modelleertool en ga aan de slag. Voor Enterprise Architect zijn er hulpmiddelen gemaakt waarmee de modelelementen aangemaakt kunnen worden door erop te klikken en bijvoorbeeld naar een diagram te slepen. Ook kan je daarmee valideren of je model correct het MBG volgt (wat automatisch gaat als je de hulpmiddelen gebruikt). Tot slot is het mogelijk om naar BSM’s te kijken van organisaties die al een op het MBG gebaseerd BSM hebben gepubliceerd.

## Wat is een BSM

Een BSM is een gegevensmodel waarin alle componenten van een bericht worden gemodelleerd, de bericht-technische objecten maar ook objecten die gaan over de inhoud van een domein. Het gaat dus om informatie over datgene wat uitgewisseld wordt maar ook om hoe het wordt uitgewisseld. De scope van een BSM is dus breder dan dat van het Metamodel voor Berichtgegevens (MBG).

In een BSM worden zoals gezegd ook objecten gemodelleerd die gaan over de inhoud van een domein. Van alle objecten wordt vastgelegd welke kenmerken/eigenschappen deze hebben, of deze kenmerken/eigenschappen in het beschouwde domein verplicht of optioneel zijn, hoe de objecten aan elkaar gerelateerd zijn, enzovoorts. Voor de vastlegging van deze objecten, kenmerken en eigenschappen wordt geen gebruik gemaakt van het MBG metamodel maar van het MUG metamodel. Wel is er in het MBG metamodel voorzien in een relatie met het MUG metamodel.
 
## Typering van modellen en scope van deze standaard

Bij het modelleren van een domein zijn er een aantal beschouwingsniveaus, variërend van een zo getrouw mogelijke beschrijving van de betekenis en bedoeling van de woorden en termen die mensen gebruiken als ze het ergens over hebben tot een specificatie van de wijze van registratie en uitwisseling van data. In het [[MIM]] vind je een uitgebreide beschrijving van deze niveau’s.

Een BSM is een extensie op het logisch informatie- of gegevensmodel (niveau 3) en is dus een model op niveau 4. Het modelleert de bericht-technische componenten benodigd voor de uitwisseling van de met het logisch informatie- of gegevensmodel gedefinieerde informatie en koppelt deze daaraan. Waar de objecten, kenmerken en eigenschappen in een logisch informatie- of gegevensmodel techniek onafhankelijk zijn geldt dat voor de componenten in een BSM slechts deels. De componenten in een BSM kunnen nog op allerlei manieren geserialiseerd worden maar tegelijkertijd wordt er bij de modellering van de bericht-technische componenten al voorgesorteerd op de wijze waarop de specificatie zal worden gegenereerd, bijv. OAS. De bericht-technische componenten hebben dus elk een tegenhanger in de specificaties. Het component ‘Padtype’ bijvoorbeeld is specifiek in het leven geroepen voor het definiëren van een OAS specificatie. En hoewel niet uitgesloten mag worden dat dit component ook bij andersoortige specificaties een rol heeft of gaat krijgen, had het bij het modelleren van StUF berichten nooit een functie. Ook de enumeratie voor de naam van de ‘EntiteitRelatie’ hangt natuurlijk erg sterk samen met REST API’s.

Een BSM kan, zoals hierboven reeds geschetst, geserialiseerd worden in verschillende soorten technische datamodellen en schema's (zoals XML, JSON of specifieke invullingen hiervan). Deze serialisaties zijn wat we in MBG niveau 4 noemen. De focus van het MBG ligt niet op dit niveau 4 en valt dan ook buiten scope. Wel staat het MBG een model-gedreven werkwijze voor waarbij de modellen van niveau 4 gegenereerd kunnen worden vanuit niveau 3.
De aangegeven niveaus zijn vooral bedoeld om de scope van MBG duidelijk aan geven, te weten niveau 3.

## Wat is het metamodel voor Berichtstructuurmodellering

Een metamodel is een model van een model. Het definieert een verzameling van modelleerconstructies in de vorm van bouwstenen, oftewel modelelementen zoals een Berichttype, Entiteitrelatie en Padtype, met bijbehorende betekenis en met bijbehorende afspraken omtrent hoe deze toe te passen. Hiermee kan vervolgens een informatiemodel of in dit geval specifiek een BSM gemaakt worden. Het metamodel is daarmee de modelleertaal waarin een informatiemodel is uitgedrukt. Deze metataal beschrijft als het ware de grammatica en de syntax van de modelleertaal.  

Vaak zie je dat het metamodel niet expliciet beschreven is en dat het metamodel een onderdeel van de domeinkennis is geworden. Bij domein overstijgende harmonisatie wordt het dan moeilijk om modellen met elkaar te vergelijken en op basis daarvan gegevens uit te wisselen.
Bij een BSM is dat aspect echter van minder belang. Belangrijker is dat er duidelijkheid is over de betekenis van de modelelementen en de toepassing daarvan zodat het definiëren van een BSM eenvoudiger wordt en deze ook eenvoudiger door andere organisaties kan worden toegepast. Het is ook een voorwaarde voor de doorontwikkeling van dit metamodel, bijv. voor andere berichtspecificatietalen.

Met de in een metamodel opgenomen set van modelleerconstructies worden informatiemodellen gemaakt. Door het schrijven van modelleertalen (zoals [[UML]]) in een metataal (zoals MOF) wordt gegarandeerd dat alle toepassingen van die talen op een standaard manier zijn opgebouwd en daardoor alom te begrijpen zijn. De metataal beschrijft als het ware de grammatica van de modelleertaal. Het metamodel in dit document is uitgewerkt voor modellering met UML.

## Uitdrukken in UML

Zowel het metamodel als informatiemodellen zoals het BSM kunnen worden uitgedrukt in [[UML]]. Aangezien het belangrijk is dat de lezer begrijpt wat we onder een informatiemodel en een metamodel verstaan verwijzen we naar paragraaf 1.8 van het [[MIM]]. Daarin worden de modellen tevens in de juiste context geplaatst aan de hand van de vier lagen metamodel architectuur van de Object Management Group [[OMG]]. 

Verwar de daarin besproken vier lagen metamodel architectuur overigens niet met de in paragraaf 1.6 geschetste typering van modellen. Die typering van 4 lagen wijkt fundamenteel af van de in het [[MIM]] beschreven typering van 4 lagen (M0 t/m M3). De in paragraaf 1.6 geschetste lagen zijn geen instantie van de daarboven gelegen laag waar dat in het OMG model wel het geval is.

Het onderliggende Metamodel BerichtstructuurGegevens (MBG) is een voorbeeld van een model op de M2 laag. Een BSM is een instantie van het MBG en bevindt zich dan ook op de M1 laag.

## Beheer

Het beheer van dit metamodel vindt plaats door ….

## Normreferenties

| **#** | **Naam** | **Referentie** |
| --- | --- | --- |
| 1. | Unified Modeling Language (UML) | [[UML]] |
| 2. | OMG Unified Modeling Language TM versie 2.5 | [[OMG]] |

<aside class='note' title="Versienummer normreferenties">
De versies van de genoemde referenties zijn bewust niet opgenomen, zodat het mogelijk is om gebruik te maken van nieuwere versies van deze referenties. Wanneer er nieuwe versies uitkomen van de genoemde normreferenties dan wordt er gecheckt of MBG hier nog mee in lijn is. Wanneer dit niet zo is, dan wordt er aan gewerkt om dit weer met elkaar in lijn te brengen, zodat MBG 'upward compatible' is en blijft.
</aside>
