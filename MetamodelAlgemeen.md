# Metamodel Algemeen

Dit hoofdstuk beschrijft het metamodel in diagramvorm en in tekst.

Het metamodel beschrijft de modelelementen die worden gebruikt bij het maken van een BSM. Voorbeelden van modelelementen zijn: 
Berichttype, Entiteitrelatie en Padtype, maar denk ook datatypen of aan metagegevens. In de paragrafen hierna worden alle 
modelelementen beschreven en toegelicht.

*	De eerste paragraaf bevat diagrammen, die kort een overzicht geven van de modelelementen die op metamodel niveau worden
onderkend, alsmede hun onderlinge verhouding
*	De paragrafen erna bevatten de beschrijvingen in tekst van de modelelementen die op metamodel niveau worden onderkend.
Wanneer u liever de beschrijvingen eerst leest, kunt u ook met deze paragraaf starten. Dit begint bij 2.2.
*	Paragraaf 2.5 bevat de metagegevens die worden bijgehouden over de modelelementen in een informatiemodel. Het MBG metamodel
geeft aan welke metagegevens er zijn.

**Uitgangspunten voor het metamodel**

*	Elk modelelement heeft een naam en een eigen MBG metaclass, waaraan je het modelelement overal kan herkennen.
*	De modelelementen worden eerst uitgelegd zonder een specifieke specificatietaal te gebruiken. Dit is zodat we hierna kunnen
aangeven hoe je het modelelement uitdrukt per specifieke specificatietaal, te weten in UML of in W3C-specificatietechnieken.
*	Een toolonafhankelijke beschrijving van het metamodel. Verder is er, omdat VNG Realisatie, Kadaster en Geonovum en veel
andere organisaties Sparx EA gebruiken, aanvullend aangegeven hoe het metamodel in Enterprise Architect toegepast wordt. Hierdoor
borgen we deze relatie.
In een aparte bijlage zijn metagegevens beschreven die alleen op Imvertor van toepassing zijn.
*	Uniforme toepassing van het metamodel in BSM’s. Anders gezegd, uitbreiden mag, afwijken niet, maak voor hetzelfde doel geen
alternatieve constructies.

_Toelichting metaclass_
Alle modelelementen zijn een metaklasse in het metamodel. Hiermee wordt aangegeven dat het niet een klasse betreft in een 
informatiemodel, zoals de klasse Getfractie, maar dat het om de classificatie gaat dat de Getfractie een Getberichttype is, 
oftewel dat de klasse Getfractie van de metaklasse Getberichttype is. Vandaar de term metaclass.

De metaklassen worden ook gebruikt om aan te geven hoe deze zich verhouden tot de metaklassen van UML en W3C, in de volgende 
hoofdstukken.

Bij het maken van een BSM modelleer je in feite gewoon met de modelelementen, en geef je aan dat een ‘Getfractie’ een 
Getberichttype is en ‘/fracties’ een Padtype.

Hierna volgen eerst diagrammen met de modelelementen, als overzicht. In de paragrafen erna wordt de betekenis van elk van deze 
modelelementen beschreven, met een definitie en een toelichting en een voorbeeld. Tot slot volgt een paragraaf met metadata die 
bijgehouden wordt, of kan worden, bij een modelelement.

## Structuur metamodel
Deze paragraaf bevat een overzicht van het Metamodel voor BerichtGegevens, kortweg MBG, en geeft alle modelelementen weer. De 
beschrijving van de modelelementen staat in de volgende paragraaf.

De modelelementen zijn verdeeld over een tweetal diagrammen, die elk een eigen view op een deel van het metamodel tonen. Elk 
view toont een aantal van de modelelementen, inclusief hun onderlinge samenhang.

Alle views samen vormen het metamodel als geheel:
*	[KERN](#kern), met de belangrijkste modelelementen in onderlinge samenhang;
*	[GROEPERING](#groepering) modelelementen. 

Elk modelelement heeft een MBG metaclass met een naam. Hieraan is elk modelelement te herkennen in alle diagrammen en in de tekst 
en in elke specificatietaal die een uitdrukking is van dit metamodel.

Bij de modelelementen zijn in deze diagrammen geen beschrijvende kenmerken opgenomen, de metagegevens zoals naam, definitie 
enzovoorts. In de diagrammen in de bijlage zijn deze wel opgenomen.
 
### Kern

View 1: De kern van een BSM. Deze bestaat uit de volgende modelelementen:

| **MBG metaclass** |
| --- |
| Getberichttype |
| Postberichttype |
| Putberichttype |
| Patchberichttype |
| Deleteberichttype |
| Padtype |
| Entiteitrelatie |
| Padrelatie |
| Generalisatie |
| Interface |

De betekenis van deze modelelementen en de beschrijvingen ervan staat in [Objecten](#objecten) en [Relaties](#relaties).

In diagramvorm:

<figure id="MBGKernzonderdetails">
  <img src="media/MBG Kern zonder details.jpg" alt="" />
  <figcaption>Diagram: Kern - Modelelementen zonder Metagegevens</figcaption>
</figure>

De verbindingen tussen de modelelementen geven aan welke combinaties kunnen voorkomen op metamodelniveau, oftewel welke 
modelelementen in een informatiemodel met elkaar gecombineerd kunnen worden. Bijvoorbeeld:

*	Een Patchberichttype kan verbonden worden met een Padrelatie en deze Padrelatie kan weer verbonden worden met een Padtype. 
Dit geeft aan dat een Padrelatie een modelelement is dat een Patchberichttype met een Padtype verbindt. Een Patchberichttype 
kan dus niet rechtstreeks verbonden worden met een Padtype.
*	Een Deleteberichttype kan via een generalisatie verbonden worden met een Interface.

### Groepering

View 2: Groepering. Deze bestaat uit de volgende modelelementen:

| **MBG metaclass** |
| --- |
| Koppelvlak |
| Domein |
| Bericht |

De betekenis van deze modelelementen en de beschrijvingen ervan staan in [Packages](#packages).

In diagramvorm:

<figure id="MBGPackageszonderdetails1">
  <img src="media/MBG Packages zonder details 1.jpg" alt="" />
  <figcaption>Diagram: Groepering</figcaption>
</figure>

## Objecten

Diagram: [Kern](#kern)

### Berichttypes

Het MBG metamodel kent een aantal berichttypes. Al deze berichttypes zijn afgeleid van de superclass Berichttype en overerven 
dus de metagegevens van die superclass. De class Berichttype is abstract en zal daarom zelf nooit in een BSM voorkomen. Alle 
berichten moeten één en niet meer dan éen relatie van het type ‘Padrelatie’ en mogen één en niet meer dan éen relatie van het 
type ‘Generalisatie’ hebben.

Elk hieronder toegelicht Berichttype is een abstractie van de werkelijkheid, nl. de berichtspecificatie. In die werkelijkheid 
heeft de keuze voor een berichttype gevolgen voor de wijze waarop dit bericht in de specificatie moet worden gedefinieerd. Die 
gevolgen hebben slechts ten dele invloed op de wijze waarop het bericht gemodelleerd moet worden in een BSM. Hieronder wordt 
per bericht aangegeven wat die gevolgen zijn.

#### Getberichttype

<aside class="definition">
  <dfn data-lt="objecten">Getberichttype</dfn>De typering van het berichttype waarmee resources kunnen worden opgehaald.
</aside>

_Toelichting:_

Classes van dit type hebben verplicht 2 relaties van het type EntiteitRelatie hebben, één relatie met de naam 'request' en 
één met de naam 'response'. Alleen bij de eerste is het toegestaan een leeg Entiteittype aan de EntiteitRelatie te koppelen.

#### Postberichttype

<aside class="definition">
  <dfn data-lt="objecten">Postberichttype</dfn>De typering van het berichttype waarmee resources kunnen worden aangemaakt.
</aside>

_Toelichting:_ 

Classes van dit type hebben verplicht 2 relaties van het type EntiteitRelatie, één relatie met de naam ‘requestbody’ en één met 
de naam 'response'.  Een Entiteittype dat m.b.v. de eerste verbonden wordt met het Postberichttype bevat altijd minimaal 1 property. 
Een Entiteittype dat m.b.v. de tweede verbonden wordt met het Postberichttype mag leeg blijven.

#### Putberichttype

<aside class="definition">
  <dfn data-lt="objecten">Putberichttype</dfn>De typering van het berichttype waarmee bestaande resources kunnen worden vervangen of 
 nieuwe kunnen worden aangemaakt.
</aside>

_Toelichting:_ 

Classes van dit type hebben verplicht 2 relaties van het type EntiteitRelatie, één met de naam ‘requestbody’ en één met de naam 
'response'. Een Entiteittype dat m.b.v. de eerste verbonden wordt met het Postberichttype bevat altijd minimaal 1 property. Een 
Entiteittype dat m.b.v. de tweede verbonden wordt met het Postberichttype mag leeg blijven.

#### Patchberichttype

<aside class="definition">
  <dfn data-lt="objecten">Patchberichttype</dfn>De typering van het berichttype waarmee properties van resources kunnen worden aangepast.
</aside>
 
_Toelichting:_

Classes van dit type hebben verplicht 2 relaties van het type EntiteitRelatie, één met de naam ‘requestbody’ en één met de naam 
'response'. Een Entiteittype dat m.b.v. de eerste verbonden wordt met het Postberichttype bevat altijd minimaal 1 property. Een 
Entiteittype dat m.b.v. de tweede verbonden wordt met het Postberichttype mag leeg blijven.

#### Deleteberichttype

<aside class="definition">
  <dfn data-lt="objecten">Deleteberichttype</dfn>De typering van het berichttype waarmee resources kunnen worden verwijderd.
</aside>

_Toelichting:_

Classes van dit type hebben verplicht 2 relaties van het type EntiteitRelatie, één relatie met de naam 'request' en één met de naam 
'response'. Alleen bij de tweede is het toegestaan een leeg Entiteittype aan de EntiteitRelatie te koppelen.

### Padtype

<aside class="definition">
  <dfn data-lt="objecten">Padtype</dfn>Het Padtype definieert een relatief path naar een individueel endpoint.
</aside>

_Toelichting:_

Tezamen met een Server Object url (het deel van de url dat definieert waar de API wordt gehost) vormt het path een uniek adres. De 
naam van een Padtype start altijd met een slash (/) en mag templates bevatten. Dit zijn strings voorafgegaan door een slash (/), 
startend met een open accolade ({) en eindigend met een sluit accolade (}). Binnen een model mogen niet meerdere Padtypes voorkomen 
met dezelfde naam. Meerdere berichten mogen gebruik maken van hetzelfde Padtype zolang deze maar niet van hetzelfde Berichttype zijn.

Classes van dit type hebben 1 verplichte relatie van het type 'Padrelatie'.

### Interface

<aside class="definition">
  <dfn data-lt="objecten">Interface</dfn>Een Interface definieert een berichttype op een hoger abstractie niveau.
</aside>

_Toelichting:_

Een interface definieert eigenschappen (metagegevens, attribuutsoorten en/of relaties) die een groep van berichttypes gemeen hebben. 
Een interface kan d.m.v. een generalisatie relatie gekoppeld worden aan een specifiek berichttype waarmee deze de eigenschappen van die 
interface overerft.

## Relaties

Verbanden met betekenis, die gelegd zijn tussen modelelementen van het type Berichttype naar het type Entiteittype of van het type 
Berichttype naar het type Padtype.

Diagram: [Kern](#kern)

### Generalisatie

<aside class="definition">
  <dfn data-lt="objecten">Generalisatie tussen Berichttype en Interface</dfn>De typering van het hiërarchische verband tussen een meer 
 generiek en een meer specifiek modelelement van hetzelfde soort, waarbij het meer specifieke modelelement eigenschappen van het meer 
 generieke modelelement overerft. Dit verband is alleen gedefinieerd voor generalisaties tussen Berichttypes en Interfaces.
</aside>

_Toelichting:_

De generalisatie relatie geeft aan dat bepaalde eigenschappen van een interface (metagegevens) ook gelden voor de gerelateerde berichttypen.
 
### EntiteitRelatie

<aside class="definition">
  <dfn data-lt="objecten">EntiteitRelatie</dfn>Modelelement waarmee verschillende relaties tussen de berichtdefinitie en de resource waar 
 het bericht betrekking op heeft kunnen worden gemodelleerd.
</aside>

_Toelichting:_

Berichttypes danken hun bestaan aan een specifieke resource, de resource waarop de methode, die de berichttype vertegenwoordigd, moet worden 
uitgevoerd. Het modelleren van de relatie tussen het Berichttype en het Entiteittype dat de resource vertegenwoordigd gebeurd met de metaklasse 
EntiteitRelatie. Een Berichttype kan, afhankelijk van het type, 1 of 2 EntiteitRelaties hebben. Een EntiteitRelatie kan maar met 1 Berichttype 
en 1 Entiteittype verbonden zijn maar een Entiteittype kan wel meerdere EntiteitRelaties hebben. De naam van deze relatie kan alleen ‘request’, 
‘requestbody’ of ‘response’ zijn.

### PadRelatie

<aside class="definition">
  <dfn data-lt="objecten">PadRelatie</dfn>Modelelement waarmee de relatie tussen de berichtdefinitie en het Padtype dat het bericht identificeert 
 kan worden gemodelleerd.
</aside>

_Toelichting:_

Elk Berichttype moet aan een relatief path worden gekoppeld. Het modelleren van de relatie tussen een Berichttype en het PadType gebeurd m.b.v. de 
metaklasse PadRelatie. Elk berichttype kan maar aan 1 PadType worden gekoppeld maar meerdere Berichttypes kunnen wel hetzelfde PadType hebben. Deze 
relatie heeft altijd de naam ‘pad’.

## Packages

<aside class="definition">
  <dfn data-lt="objecten">Package</dfn>Een package is een benoemde en begrensde verzameling/groepering van modelelementen.
</aside>

Diagram: [Groepering](#groepering)

Het MBG metamodel kent een aantal packages. Al deze packages zijn afgeleid van de superclass Package. De class Package is abstract en zal daarom zelf 
nooit in een BSM voorkomen.

De verschillende modelelementen van het type package zijn:

*	Koppelvlak
*	Domein
*	Bericht

In een Koppelvlak package komen Bericht packes voor en kunnen Domein packages opgenomen worden.

In een Bericht package mogen de volgende MBG-elementen worden opgenomen:

*	Getberichttype
*	Postberichttype
*	Putberichttype
*	Patchberichttype
*	Deleteberichttype
*	Padtype

en alle modelelementen van het Metamodel Uitwisselings Gegevens (MUG).

In een Domein package mogen alleen modelelementen van het Metamodel Uitwisselings Gegevens (MUG) worden opgenomen.

In beide gevallen is de volgorde daarbij niet van belang.

De drie package-typen worden hieronder uitgelegd.

### Koppelvlak

<aside class="definition">
  <dfn data-lt="objecten">Koppelvlak</dfn>De groepering van alle modelelementen waaruit het Koppelvlak is opgebouwd. Het Koppelvlak als geheel.
</aside>

_Toelichting:_
Het Koppelvlak is een package, te weten het hoofdpackage van het koppelvlak, waaronder alle subpackages die een koppelvlak beschrijven, zoals 
Domein en Bericht, vallen. Het koppelvlak wordt verder beschreven met metadata, zoals de serialisatie waarin het koppelvlak moet worden uitgedrukt 
(‘json’ of ‘hal+json’) en de naam van het koppelvlak.
 
### Domein

Een koppelvlak kan optioneel een aantal Domein packages hebben als subpackage, waarbij aangegeven wordt dat deze de modellering van de gegevens 
van het domein bevatten.

<aside class="definition">
  <dfn data-lt="objecten">Domein</dfn>Een groepering van constructies die een semantisch samenhangend gedeelte van een koppelvlak beschrijven welke met de in het koppelvlak beschreven 
berichten kunnen worden uitgewisseld.
</aside>

_Toelichting:_
Een Domein package bevat die modelelementen die met het koppelvlak uitgewisseld worden, zoals het Entiteittype ‘Persoon’ en het Entiteittype ‘Adres’ 
en impliciet ook relaties als ‘gehuwdMet’. In ieder geval alleen modelelementen uit het Metamodel Uitwisselings Gegevens (MUG). Deze modelelementen 
kunnen 1 op 1 overgenomen zijn van een Uitwisselingsgegevensmodel (UGM) maar kunnen ook bewerkingen daarvan zijn.

### Bericht

Een koppelvlak bevat een of meer Bericht packages als subpackage.

<aside class="definition">
  <dfn data-lt="objecten">Bericht</dfn>Een groepering van constructies die de modelelementen van een of meerdere gerelateerde berichten clustert.
</aside>

_Toelichting:_
Berichten worden doorgaans geclusterd op basis van een in een UGM gemodelleerd Entiteittype. Alle berichten die dezelfde Entiteittype als top level delen 
kunnen bij elkaar in één Bericht package worden geplaatst. Met ‘dezelfde Entiteittype’ bedoelen we hier niet ‘dezelfde instantie van een entiteittype klasse’. 
In een bericht mogen dus meerdere entiteittype klassen van dezelfde Entiteittype worden opgenomen zolang de naam maar uniek blijft binnen het koppelvlak.

Een Bericht package bevat i.i.g. de voor de berichten benodigde modelelementen van een set van gerelateerde berichten maar kan ook alle modelelementen bevatten 
die in een ‘Domein’ package mogen worden opgenomen.

## Specificatie metagegevens

Bij de modelelementen in een koppelvlak kunnen metagegevens, zoals 'naam' of 'berichtcode' van een modelelement, worden bijgehouden. Dit zijn geen eigenschappen 
van een object en worden daarom niet als bijvoorbeeld een EntiteitRelatie van een Berichttype gemodelleerd.

In de volgende paragrafen worden de metagegevens in tekst beschreven. Bij elk metagegeven is de definitie opgenomen, een toelichting en de toepassing ervan bij 
modelelementen en soms een voorbeeld.

### Specificatie metagegevens Packages

We onderkennen een aantal specifieke metagegevens op het niveau van de packages. Deze staan beschreven in deze paragaaf.

#### Metagegeven: Naam

<aside class="definition">
  <dfn data-lt="objecten">Naam</dfn>Korte identificatie van een koppelvlak of beschrijving van een package als definitie van diens functie of inhoud.
</aside>

_Toelichting:_
Korte identificerende naam van een Koppelvlak package of definitie van een Domein of Bericht package zodat duidelijk is waartoe het dient en/of wat 
voor inhoud het heeft of kan worden opgenomen.

_Bijvoorbeeld:_ Enumeraties.

_Toepassing:_ Alle packages (verplicht)

#### Metagegeven: beheerder-email

<aside class="definition">
  <dfn data-lt="objecten">beheerder-email</dfn>Het e-Mail adres van de persoon of organisatie die het koppelvlak beheert.
</aside>

_Toelichting:_

Het e-Mailadres dat in de berichtenspecificatie en/of de documentatie daarvan kan worden opgenomen zodat voor de gebruikers van de specificatie duidelijk 
is hoe ze middels e-Mail contact op kunnen nemen met de beherende persoon of organisatie.

_Toepassing:_ Koppelvlak (optioneel)
 
#### Metagegeven: Koppelvlak-naam

<aside class="definition">
  <dfn data-lt="objecten">Koppelvlak-naam</dfn>Volledige naam van een koppelvlak.
</aside>

_Toelichting:_
Bedoelt om kernachtig de functie/domein van het koppelvlak dat gemodelleerd wordt aan te geven.

_Bijvoorbeeld:_ ‘Open Raads- en StatenInformatie’ of ‘Regels bij activiteiten’.

_Toepassing:_ Koppelvlak (verplicht)

#### Metagegeven: project_url

<aside class="definition">
  <dfn data-lt="objecten">project_url</dfn>Url van de bij het koppelvlak horende project repository.
</aside>

_Toelichting:_
De url van de repository waarin de al dan niet met het koppelvlakmodel te genereren of gegenereerde specificatie en documentatie wordt opgeslagen. 
Dit kan bijv. een GitHub repository zijn maar ook een GitLab of andersoortige repository.

_Bijvoorbeeld:_ https://github.com/VNG-Realisatie/ODS-Open-Raadsinformatie 

_Toepassing:_ Koppelvlak (optioneel)

#### Metagegeven: release

<aside class="definition">
  <dfn data-lt="objecten">release</dfn>Datum waarop begonnen is met het realiseren van de betreffende versie van het koppelvlak.
</aside>

_Toelichting:_
De datum wordt uitgedrukt in het volgende formaat ‘jjjjmmdd’.

_Bijvoorbeeld:_ 20230404

_Toepassing:_ Koppelvlak (verplicht)
 
#### Metagegeven: Version

<aside class="definition">
  <dfn data-lt="objecten">Version</dfn>Het versienummer waaronder het koppelvlak zal worden gepubliceerd.
</aside>

_Toelichting:_
Het versienummer wordt uitgedrukt in het volgende formaat ‘x.x.x’.

_Bijvoorbeeld:_ 1.2.0

_Toepassing:_ Koppelvlak (verplicht)
 
#### Metagegeven: Serialisatie

<aside class="definition">
  <dfn data-lt="objecten">Serialisatie</dfn>Definieert de vorm waarnaar het koppelvlak geserialiseerd moet worden.
</aside>

_Toelichting:_
BSM’s op basis van het MBG worden opgesteld teneinde omgezet te worden naar een technische specificatie. De vorm waarin de technische specificatie wordt 
uitgedrukt is de serialisatie. Voor REST OAS API’s gaat het om de serialisatietypes, ‘json’ en ‘hal+json’. In principe zijn ook andere serialisaties 
mogelijk zoals ‘xml’. Dit metagegeven definieert de gewenste serialisatievorm.

_Toepassing:_ Koppelvlak (optioneel)

### Specificatie metagegevens modelelementen

De specifieke metagegevens op het niveau van de modelelementen waarmee een BSM wordt samengesteld staan beschreven in deze paragaaf.

Zo is er de naam van het modelelement, bijvoorbeeld het Getberichttype met als naam ‘Getagendapunt’ en een bijbehorende berichtcode, bijvoorbeeld Gr01.

Welke metagegevens verplicht zijn per modelelement en welke niet staat beschreven in het diagram in Metagegevens per modelelement. Dit diagram is een onderdeel 
van deze specificatie.

Elk modelelement kent een eigen set van metagegevens, die bepaalde aspecten van het modelelement specificeren. Metagegevens kunnen dus verplicht of optioneel 
zijn. Zo is een berichtcode altijd verplicht voor de berichttype modelelementen.

#### Metagegeven: Naam

<aside class="definition">
  <dfn data-lt="objecten">Naam</dfn>De naam van een modelelement.
</aside>

_Toelichting:_
Een korte beschrijving die het modelelement benoemt. In de berichttype modelelementen en ‘Interface’ heeft dit metagegeven alleen een functie bij het kunnen 
interpreteren van het model. De in de modelelementen ‘EntiteitRelatie’ en ‘Padtype’ gedefinieerde waardes voor dit metagegeven ‘Naam’ komen terug in de 
berichtspecificatie’.
Bij de modelelementen ‘EntiteitRelatie’ en ‘PadRelatie’ wordt de naam gekozen uit een beperkte set van waarden. In het geval van de laatste heeft het zelfs 
altijd slechts 1 mogelijke waarde, te weten ‘pad’.

Binnen een BSM mogen niet meerdere Berichttype, Padtype, Domein en Bericht modelelementen met dezelfde naam voorkomen.

_Bijvoorbeeld:_ ‘/stemmingen/{stemmingsidentificatie}’ is de naam van het modelelement ‘Padtype’ en ‘Getactiviteit’ is de naam van het modelelement ‘Getberichttype’.

_Toepassing:_ alle modelelementen behalve Generalisatie (verplicht).

#### Metagegeven: berichtcode

<aside class="definition">
  <dfn data-lt="objecten">berichtcode</dfn>Code ter typering van een bericht.
</aside>

_Toelichting:_
De code bestaat uit een limitatieve lijst van waarden en typeert een bericht. Aan de hand van deze code worden door Imvertor aan properties/kenmerken toegekend aan een 
bericht in een berichtspecificatie standaard.

_Toepassing:_ Alle van Berichttype afgeleide modelelementen (verplicht).

#### Metagegeven: tag

<aside class="definition">
  <dfn data-lt="objecten">tag</dfn>Naam waarmee een aantal berichten kan worden gegroepeerd.
</aside>

_Toelichting:_
Dit metagegeven heeft een ordenende functie. De wijze van ordenen is niet voorgeschreven maar over het algemeen krijgen berichten die een (deel van een pad) met elkaar gemeen 
hebben dezelfde waarde voor dit metagegeven.

_Toepassing:_ Alle van Berichttype afgeleide modelelementen (optioneel).

#### Metagegeven: servicename

<aside class="definition">
  <dfn data-lt="objecten">servicename</dfn>OperationId van een OAS3 service.
</aside>

_Toelichting:_
Unieke identificatie van een operation in een OAS berichtspecificatie. Een operation is een combinatie van een path en een HTTP method. Binnen een OAS berichtspecificatie is 
het niet toegestaan om een path en een HTTP method meerdere keren met elkaar te combineren.

_Bijvoorbeeld:_ ‘getUserById’.

_Toepassing:_ Alle van Berichttype afgeleide modelelementen (verplicht).

#### Metagegeven: custom_path_facet

<aside class="definition">
  <dfn data-lt="objecten">custom_path_facet</dfn>Niet af te leiden deel van het path.
</aside>

_Toelichting:_
Het deel van het path dat niet uit het berichtenmodel kan worden afgeleid. 
Om het path toch te kunnen verifiëren tegen het model wordt daar eerst de custom_path_facet uit verwijderd. Deze tv mag ‘/’ (slashes) bevatten maar niet aan het begin en eind.

_Bijvoorbeeld:_ ‘actuelestatus’ en ‘nawgegevens’ in ‘/zaken/{id}/actuelestatus’ resp. ‘/ingeschrevennatuurlijkpersonen/{burgerservicenummer}/nawgegevens’.

_Toepassing:_ Padtype (optioneel).

#### Metagegeven: Positie

<aside class="definition">
  <dfn data-lt="objecten">Positie</dfn>Positie die een construct inneemt t.o.v. constructs op hetzelfde niveau.
</aside>

_Toelichting:_
De positie van de construct binnen producten waarin deze opeenvolging een rol speelt. Dit metagegeven had in het verleden een functie maar is inmiddels obsolete.

_Toepassing:_ Entiteitrelatie (optioneel).
 
### Specificatie metagegevens modelelement bindingen

Bindingen geven aan hoe modelelementen met elkaar verbonden kunnen en mogen worden.

Voorbeeld: de binding tussen een Berichttype en een Padtype, om aan te geven dat een Berichttype aan een pad moet worden gekoppeld. Een voorbeeld van wat niet 
mag is de verbinding van een Padtype aan een EntiteitRelatie.

Deze metagegevens zijn alleen nodig voor de binding van modelelementen aan elkaar en zijn vrijwel altijd een onderdeel van een modelleertaal (waarmee een BSM 
gemaakt kan worden).

De bindingen zijn ook in diagram vorm te lezen aan het begin van dit hoofdstuk, in Diagrammen van modelelementen.

#### Metagegeven: heeft padrelatie

Verkorte schrijfwijze: PadRelatie

<aside class="definition">
  <dfn data-lt="objecten">heeft padrelatie</dfn>De binding van een Berichttype aan een Padtype middels een Padrelatie.
</aside>

_Toelichting:_
Een Berichttype heeft een relatie naar een Padtype.

_Toepassing:_ Alle Berichttype modelelementen en Padtype.

#### Metagegeven: heeft entiteitrelatie

Verkorte schrijfwijze: EntiteitRelatie

<aside class="definition">
  <dfn data-lt="objecten">heeft entiteitrelatie</dfn>De binding van een Berichttype aan een Entiteittype uit het MUG middels een EntiteitRelatie.
</aside>

_Toelichting:_
Een Berichttype heeft een relatie naar een Entiteittype, de top level entiteit.

_Toepassing:_ Alle Entiteittype modelelementen uit het MUG en alle Berichttype modelelementen.
 
#### Metagegeven: verwijst naar supertype

Verkorte schrijfwijze: supertype

<aside class="definition">
  <dfn data-lt="objecten">verwijst naar supertype</dfn>De binding van een supertype aan een subtype middels een generalisatie.
</aside>

_Toelichting:_
Een subtype verwijst met een generalisatie naar een supertype en subtype verwijst met een generalisatie naar een supertype.

_Toepassing:_ Alle Berichttype en Interface modelelementen.

## Toegestane waarden voor (bepaalde) metagegevens

### Waardebereik metagegevens

Een aantal metagegevens hebben als datatype CharacterString. Aanvullend geldt:
*	Voor datums dat deze het volgende patroon volgen: jjjjmmdd

Voor de volgende metagegevens geldt een specifiek waardebereik.

| **Metagegeven** | **Waardenbereik** |
| --- | --- |
| berichtcode | Gr01, Gr02, Gc01, Po01, Pu01, Pa01, De01 |
| Grouping | resource, collection |
| Naam (bij EntiteitRelatie) | resource, request, requestbody |
| Naam (bij PadRelatie) | Pad |
| Is afgeleid (bij Koppelvlak) | Ja, Nee |
| Is afgeleid (bij andere elementen) | Ja, Nee, Zie package |
| Serialisatie | json, hal+json |
| Supplier-project | UGM |
| toelichting opnemen vanaf | SIM, UGM, BSM |

### Defaultwaarden voor metagegevens modelelementen

Er zijn metagegevens die een defaultwaarde hebben. Het is echter niet nodig om deze defaultwaarde expliciet aan te geven in het informatiemodel. 
De default staat hier aangegeven. Alleen wanneer er afgeweken wordt van deze default wordt dit in een BSM aangegeven.

| **Metagegeven** | **Defaultwaarde** |
| --- | --- |
| Is afgeleid (bij Koppelvlak) | Ja |
| Is afgeleid (bij andere elementen) | Ja |
| Serialisatie | hal+json  |
| toelichting opnemen vanaf | SIM |

Opmerking met betrekking tot de kardinaliteit van relaties: deze staat niet in de tabel. Deze kennen geen defaultwaarde. De kardinaliteit aan de doel kant moet 
altijd worden aangegeven. De kardinaliteit aan de bron/eigenaar kant van een relatie is optioneel om in te vullen, wanneer er niets is ingevuld dan wordt er 
niets over de kardinaliteit gezegd en kent deze geen default waarde (in de praktijk betekent dit dat een kardinaliteit aan de bron kant als 0..* geïmplementeerd 
wordt).
