## Metamodel UitwisselingsGegevensmodel (MUG)

Het Bericht StructuurModel (BSM) is in feite een extensie op het UitwisselingsGegevensModel (UGM). Het BSM definieert het vehikel 
waarmee gegevens of een uit te voeren actie naar een endpoint wordt gecommuniceerd en het UGM voorziet in de gegevens die verstuurd 
dan wel ontvangen worden. Het UGM is gebaseerd op het Metamodel UitwisselingsGegevensmodel (MUG). 

Een UGM is in de basis een vertaling van een Conceptueel Informatie Model (CIM) naar een ander metamodel. De structuur van een UGM kan 
in principe gelijk zijn aan die van een CIM maar dat is over het algemeen niet het geval. Waar een CIM een beeld geeft van de 
informatiebehoefte binnen een domein op conceptueel niveau is het UGM een vertaling daarvan naar een technische structuur. 

De in een CIM gebruikte stereotypes kunnen 1 op 1 gemapt worden met de in een UGM gebruikte stereotypes. Om die reden zou een BSM in 
theorie ook als extensie op een op het MIM gebaseerd CIM kunnen worden gedefinieerd, al ontbreken er dan op de objecten en attributen 
nog wel diverse tagged values.

In de volgende paragraaf vind je de mapping tussen de stereotypes van het MIM en in de daarop volgende paragraaf per stereotype in het 
MUG de op de gerelateerde stereotype in het MIM ontbrekende maar voor het BSM bruikbare of zelfs noodzakelijke tagged values.

### Mapping MIM op MUG stereotypes

De volgende tabel bevat een mapping tussen de MIM stereotypes en de MUG stereotypes. Stereotypes die wel in het MIM aanwezig zijn maar 
niet in het MUG zijn opgenomen hebben geen functie bij de berichtdefinitie.

| **MIM stereotype** | **MUG stereotype** |
| --- | --- |
| Informatiemodel | Basismodel |
| Gestructureerd | Complex datatype |
| Data element | Data element |
| Domein | Domein |
| Attribuutsoort | Element |
| Objecttype | Entiteittype |
| Enumeratiewaarde | Enum |
| Enumeratie | Enumeration |
| Extern | Extern |
| Externe koppeling | Externe koppeling |
| Gegevensgroep | Gegevensgroep |
| Gegevensgroeptype | Groep |
| Primitief datatype | Primitief datatype |
| Relatiesoort | Relatie |
| Relatierol | - |
| Relatieklasse | Relatie-entiteit |
| Referentie element | Tabel Element |
| Referentielijst | Tabel-entiteit |
| Keuze | Union |
| - | Union element |
| View | View |
| Codelijst | Tabel-entiteit |
| - | Intern |
| Generalisatie | - |

### Metagegevens

De MUG stereotypes in de voorgaande paragraaf kennen een aantal metagegevens. In deze paragraaf worden deze per stereotype beschreven.
Metagegevens die zijn toegevoegd t.o.v. het MIM 1.1.1 zijn rood gemaakt behalve daar:
* waar het eigenlijk een naamswijziging betreft en de relatie met het metagegeven in het MIM erg voor de hand ligt;
* waar het stereotype waarvan het deel uitmaakt niet kan worden gemapt op een stereotype in het MIM.

Daarnaast zijn de metagegevens die wel voorkomen op de MIM stereotypes maar niet bij de gerelateerde MUG stereotypes in dezelfde tabellen opgenomen maar uitgegrijsd.

#### Metagegevens voor «Basismodel»

Basismodel packages hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment. | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <span class="grey"><b>Informatie-model type</b></span> | - | - | - | - |
| <span class="grey"><b>Informatie-domein</b></span> | - | - | - | - |
| <span class="grey"><b>MIM versie</b></span> | - | - | - | - |
| <span class="grey"><b>MIM extensie</b></span> | - | - | - | - |
| <span class="grey"><b>MIM taal</b></span> | - | - | - | - |
| <span class="grey"><b>Relatie-modellerings-type</b></span> | - | - | - | - |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
| <span class="grey"><b>Basis-URI</b></span> | - | - | - | - |
| <span class="red"><b>Afkorting</b></span> | 0..1 | Afkorting van dit model. Deze afkorting wordt o.a. gebruikt waar informatie over het model wordt gepubliceerd. |  | _Tagged value_ |
| <span class="red"><b>Release</b></span> | 1..1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van het UGM. De releasedatum wordt mede gebruikt om het Basismodel uniek te identificeren in Imvertor. |  | _Tagged value_ |
| <span class="red"><b>Versie ID</b></span> | 0..1 | De identificatie van de versie/revisie van dit model in het gehanteerde versiebeheersysteem. |  | _Tagged value_ |
| <span class="red"><b>Web locatie</b></span> | 0..1 | Url van de locatie waar het model te vinden is. |  | _Tagged value_ |
| <span class="red"><b>Niveau</b></span> | 0..1 | Het niveau is een waarde uit een beperkte set:<br/>"algemeen" betekent dat het model een fundament is van een ander model en moet worden opgenomen. Het modelleert generieke constructies die deel uitmaken van de echte wereld. Dit omvat meestal abstracte object typen. Het kan andere constructen bevatten.<br/>"specifiek" betekent dat het model een bepaald domein beschrijft of een samenhangend deel ervan. |  | _Tagged value_ |

<!-- Waarom is er op «Informatiemodel» in het MIM het metatgegeven 'heeft Constraint' gedefinieerd? Wat moet ik me daarbij voorstellen? -->
 
#### Metagegevens voor «Complex datatype»

Complex datatype classes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. De naam van het domein package. | name van de metaclass Namedelement | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <span class="grey"><b>Patroon</b></span> | - | - | - | - |
| <span class="grey"><b>Formeel patroon</b></span> | - | - | - | - |
| bevat <b>data element</b> | 0..* | Binding aan een data element, 2 of meer tenzij via generalisatie verkregen. |  | _attribute_ |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
<!-- Waarom is er op het datatype «Gestructureerd datatype» in het MIM de metatgegevens 'Formeel Patroon' en 'Patroon' gedefinieerd?

| <b>Formeel Patroon | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | _Tagged value_ |
| <b>Patroon | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | _Tagged value_ |

-->

#### Metagegevens voor «Data element»

Data elementen hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. | name van de metaclass Namedelement | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <b>Lengte | 0..1 | De maximale lengte die een attribuut kan hebben. |  | _Tagged value_ |
| <b>Patroon</b> | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | _Tagged value_ |
| <b>Formeel patroon</b> | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | _Tagged value_ |
| <b>Kardinaliteit</b> | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | _Multiplicity_ |
| <b>Minimum waarde (inclusief)</b> | 0..1 | De minimale waarde (inclusief) dat een attribuut moet hebben. |  | _Tagged value_ |
| <span class="grey"><b>Minimum waarde (exclusief)</b></span> | - | - | - | - |
| <b>Maximum waarde (inclusief)</b>> | 0..1 | De maximale waarde (inclusief) dat een attribuut mag hebben. |  | _Tagged value_ |
| <span class="grey"><b>Maximum waarde (exclusief)</b></span> | - | - | - | - |
| heeft <b>datatype</b> | 1 | Binding aan een datatype. | datatype = UML-datatype | _type = datatype_ |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
| <span class="red"><b>Regels</b></span> | 0..1 | Beschrijving van de niet in andere tagged values vast te leggen regels waaraan het element moet voldoen. |  | _Tagged value_ |
| <span class="red"><b>Example</b></span> | 0..1 | Voorbeeld waarde. |  | _Tagged value_ |
| <span class="red"><b>Minimum lengte</b></span> | 0..1 | De minimale lengte die een attribuut moet hebben. |  | _Tagged value_ |
| <span class="red"><b>Positie</b></span> | 0..1 | De positie van de construct binnen producten waarin deze opeenvolging een rol speelt. |  | _Tagged value_ |

#### Metagegevens voor «Domein»

Domein packages hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. De naam van het domein package. | name van de metaclass Namedelement | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
| <span class="grey"><b>Basis-URI</b></span> | - | - | - | - |
| <span class="red"><b>Afkorting</b></span> | 0..1 | Afkorting van dit model. Deze afkorting wordt o.a. gebruikt waar informatie over het model wordt gepubliceerd. |  | _Tagged value_ |
| <span class="red"><b>Release</b></span> | 1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van het Domein. Deze moet gelijk zijn aan of van recenter datum zijn dan de taggedvalue met dezelfde naam op «Basismodel». De releasedatum wordt mede gebruikt om het Domein uniek te identificeren in Imvertor. |  | _Tagged value_ |
| <span class="red"><b>Versie ID</b></span> | 0..1 | De identificatie van de versie/revisie van dit model in het gehanteerde versiebeheersysteem. |  | _Tagged value_ |
| <span class="red"><b>Web locatie</b></span> | 0..1 | Url van de locatie waar het domein te vinden is. |  | _Tagged value_ |
<!-- Waarom is er op «Domein» in het MUG de metatgegevens 'Ref-release' en 'Ref-version' gedefinieerd? En trouwens ook 'Web locatie'. Kan een domein ook van extern gehaald worden?
     Zo ja, hoeveel constructs hebben we dan wel niet om externe modellen op te halen? Extern, View, Interface, ...

| <span class="red"><b>Ref-release</b></span> | 0..1 | ??? |  | _Tagged value_ |
| <span class="red"><b>Ref-version</b></span> | 0..1 | ??? |  | _Tagged value_ | -->

#### Metagegevens voor «Element»

Elementen hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <b>Lengte</b> | 0..1 | De maximale lengte die een attribuut kan hebben. |  | _Tagged value_ |
| <b>Patroon</b> | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | _Tagged value_ |
| <b>Formeel patroon</b> | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | _Tagged value_ |
| <span class="grey"><b>Heeft tijdlijn geldigheid</b></span> | - | - | - | - |
| <b>Indicatie materiële historie</b> | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | _Tagged value_ |
| <span class="grey"><b>Heeft tijdlijn registratie</b></span> | - | - | - | - |
| <b>Indicatie formele historie</b> | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | _Tagged value_ |
| <b>Kardinaliteit</b> | 1 | Algemeen metagegeven | lowerValue en upperValue van de metaclass Multiplicity Element | _Multiplicity_ |
| <b>Indicatie authentiek</b> | 0..1 | Aanduiding of het een authentiek gegeven (element) betreft. |  | _Tagged value_ |
| <span class="grey"><b>Indicatie classificerend</b></span> | - | - | - | - |
| <b>Mogelijk geen waarde</b> | 0..1 | Indicatie waarmee wordt aangegeven dat het gegeven ook geen waarde kan hebben. |  | _Tagged value_ |
| <b>Identificerend</b> | 0..1 | Algemeen metagegeven | isID bij de metaclass Property | _isID_ |
|<b>Minimum waarde (inclusief)</b> | 0..1 | De minimale waarde (inclusief) dat een attribuut moet hebben. |  | _Tagged value_ |
| <span class="grey"><b>Minimum waarde exclusief</b></span> | - | - | - | - |
| <b>Maximum waarde (inclusief)</b> | 0..1 | De maximale waarde (inclusief) dat een attribuut mag hebben. |  | _Tagged value_ |
| <span class="grey"><b>Maximum waarde exclusief</b></span> | - | - | - | - |
| <span class="grey"><b>Eenheid</b></span> | - | - | - | - |
| heeft <b>datatype</b> | 1 | Binding aan een datatype. | datatype = UML-datatype | _type = datatype_ |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
| <span class="grey"><b>Indicatie afleidbaar</b></span> | - | - | - | - |
| <span class="red"><b>Regels</b></span> | 0..1 | Beschrijving van de niet in andere tagged values vast te leggen regels waaraan het element moet voldoen. |  | _Tagged value_ |
| <span class="red"><b>Indicatie in onderzoek</b></span> | 0..1 | De indicatie of te bevragen is dat er twijfel is of is geweest aan de juistheid van de attribuutwaarde en dat een onderzoek wordt of is uitgevoerd naar de juistheid van de attribuutwaarde. |  | _Tagged value_ |
| <span class="red"><b>Minimum lengte</b></span> | 0..1 | De minimale lengte die een attribuut moet hebben. |  | _Tagged value_ |
| <span class="red"><b>Example</b></span> | 0..1 | Voorbeeldwaarde van een property. |  | _Tagged value_ |
| <span class="red"><b>Positie</b></span> | 0..1 | De positie van de construct binnen producten waarin deze opeenvolging een rol speelt. |  | _Tagged value_ |

#### Metagegevens voor «Entiteittype»

Entiteittype classes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | 0..1 | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <b>Unieke aanduiding</b> | 1 | De identificerende kenmerken van een entiteit die een instantie van het entiteittype uniek identificeren. Deze kenmerken worden in UML gemodelleerd als element en/of relatie dus dit metagegeven hoeft niet apart te worden gespecificeerd bij een entiteittype, het is afleidbaar. Voor entiteittypen die deel uitmaken van een (basis)registratie betreft dit de wijze waarop daarin voorkomende entiteiten (van dit type) uniek in de registratie worden aangeduid. | UML isID | _isId bij element, --- of --- stereotype «isId» bij target role relatie --- of --- een combinatie van deze twee, elk hiervan meer keren toepasbaar_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <span class="grey"><b>Populatie</b></span> | - | - | - | - |
| <span class="grey"><b>Kwaliteit</b></span> | - | - | - | - |
| <span class="grey"><b>Indicatie abstract object</b></span> | - | - | - | - |
| heeft <b>element</b> | 0..* | Binding aan een element. | owned element = UML-property | _attribute_ |
| heeft <b>groep</b> | 0..* | Binding aan een gegevensgroep. | owned element = UML-property | _attribute_ |
| heeft <b>relatie</b> | 0..* | Binding aan een relatie of relatie-entiteit. | owned element = UML-Relationship | _association_ |
| heeft <b>externe koppeling</b> | 0..* | Binding aan een externe koppeling. | owned element = UML-Relationship | _association_ |
| verwijst naar <b>supertype</b> | 0..* | Binding aan een generalisatie (naar een ander objecttype). | owned element = UML-Relationship | _association_ |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
| <span class="red"><b>Endpoint beschikbaar</b></span> | 0..1 | Voorziening waarmee kan worden aangegeven dat er voor een entiteit al dan niet een resource endpoint beschikbaar is. |  | _Tagged value_ |
| <span class="red"><b>Naam in meervoud</b></span> | 0..1 | Voorziening om een entiteit een meervoudsnaam te kunnen geven. Deze wordt gebruikt als propertynaam van een entiteit in een yaml bestand. |  | _Tagged value_ |

#### Metagegevens voor «Enum»

Enums hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| <b>Code</b> | 0..1 | De in een registratie aan de enumeratiewaarde toegekend unieke code. | Alias van de metaclass Element Import | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
| <span class="red"><b>Positie</b></span> | 0..1 | De positie van de construct binnen producten waarin deze opeenvolging een rol speelt. |  | _Tagged value_ |

#### Metagegevens voor «Enumeration»

Enumeration classes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <span class="grey">bevat <b>enumeratiewaarde</b></span> | - | - | - | - |
| bevat <b>enum</b> | 1..* | Binding aan een enum | owned element = UML-EnumerationLiteral | _EnumerationLiteral_ |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |

#### Metagegevens voor «Extern»

Extern packages hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. De naam van het domein package. | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <span class="grey"><b>Locatie</b></span> | - | - | - | - |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
| <span class="grey"><b>Basis-URI</b></span> | - | - | - | - |
| <span class="red"><b>Beheerder</b></span> | 0..1 | Naam van de beheerder van het model. |  | _Tagged value_ |
| <span class="red"><b>Data locatie</b></span> | 0..1 | De locatie waar informatie over de gegevens van een construct te vinden zijn. Wanneer het een external of view package betreft: De verwijzing naar de locatie van het bijbehorende informatiemodel waar dit package een representatie van is. In alle andere gevallen moet het een waardenlijst betreffen. Het gaat dan om de verwijzing naar de plek waar de waarden beschikbaar worden gesteld. De verwijzing heeft de vorm van een URI conform een gekozen URI strategie. |  | _Tagged value_ |
| <span class="red"><b>Release</b></span> | 0..1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van het Externe package. Deze moet gelijk zijn aan of van recenter datum zijn dan de taggedvalue met dezelfde naam op «Basismodel». De releasedatum wordt mede gebruikt om het Externe package uniek te identificeren in Imvertor. |  | _Tagged value_ |
| <span class="red"><b>Versie ID</b></span> | 0..1 | De identificatie van de versie/revisie van dit model-element in het gehanteerde versiebeheersysteem. |  | _Tagged value_ |
| <span class="red"><b>Web locatie</b></span> | 0..1 | Url van de locatie waar het externe package te vinden is. |  | _Tagged value_ |
<!-- | <span class="red"><b>Ref-release</b></span> | 0..1 | ??? |  | _Tagged value_ |
| <span class="red"><b>Ref-version</b></span> | 0..1 | ??? |  | _Tagged value_ | -->

#### Metagegevens voor «Externe koppeling»

Externe koppeling packages hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <b>Unidirectioneel</b> | 1 | Algemeen metagegeven. |  | _Direction van de betreffende assiciation (van source naar target)_ |
| <b>Relatie eigenaar</b> | 1 | Algemeen metagegeven. | /source: related Element bij Relationship Element | _Source_ |
| <b>Relatie doel</b> | 1 | Algemeen metagegeven. | /target: related Element bij Relationship Element | _Target_ |
| <b>Aggregatietype</b> | 1 | Algemeen metagegeven. | AggregationKind bij metaclass Property | _Aggregation van de source role met waarde composite of shared_ |
| <b>Kardinaliteit</b> | 1 | Algemeen metagegeven | lowerValue en upperValue van de metaclass MultiplicityElement | M_ultiplicity van de target role_ |
| <b>Kardinaliteit relatie bron</b> | 1 | Algemeen metagegeven | lowerValue en upperValue van de metaclass MultiplicityElement | _/source	Multiplicity van de source role_ |
| <b>Indicatie materiële historie</b> | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | _Tagged value_ |
| <b>Indicatie formele historie</b> | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | _Tagged value_ |
| <b>Indicatie authentiek</b> | 0..1 | Aanduiding of het een authentiek gegeven betreft. |  | _Tagged value_ |
| <span class="grey"><b>Indicatie afleidbaar</b></span> | - | - | - | - |
| <span class="grey"><b>Mogelijk geen waarde</b></span> | - | - | - | - |
| <span class="grey">verwijst naar <b>relatiedoel | 0..* | Binding aan een entiteittype | /target: related Element bij Relationship Element = UML-Class | _association target = Class_ |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |

#### Metagegevens voor «Gegevensgroep»

Gegevensgroep classes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <b>Kardinaliteit</b> | 1 | Algemeen metagegeven | lowerValue en upperValue van de --metaclass Multiplicity | _Element	Multiplicity_ |
| <b>Indicatie authentiek</b> | 0..1 | Aanduiding of het een authentiek gegeven (attribuutsoort) betreft. |  | _Tagged value_ |
| heeft <b>groep</b> | 1 | Binding aan een gegevensgroeptype | owned element = UML-Class | _type = Class_ |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
| <span class="grey"><b>Eenheid</b></span> | - | - | - | - |
| <span class="red"><b>Indicatie in onderzoek</b></span> | 0..1 | De indicatie of te bevragen is dat er twijfel is of is geweest aan de juistheid van de attribuutwaarde en dat een onderzoek wordt of is uitgevoerd naar de juistheid van de attribuutwaarde. |  | _Tagged value_ |
| <span class="red"><b>Mogelijk geen waarde</b></span> | 0..1 | Indicatie waarmee wordt aangegeven dat het gegeven ook geen waarde kan hebben. |  | _Tagged value_ |
| <span class="red"><b>Indicatie formele historie</b></span> | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | _Tagged value_ |
| <span class="red"><b>Indicatie materiële historie</b></span> | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | _Tagged value_ |

#### Metagegevens voor «Groep»

Groepen hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <b>Indicatie authentiek</b> | 0..1 | Aanduiding of het een authentiek gegeven betreft. |  | _Tagged value_ |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
| <span class="red"><b>Groepnaam</b></span> | 0..1 | Voorziening om een groep aangepaste naam te kunnen geven. | _Tagged value_ |
| <span class="red"><b>Mogelijk geen waarde</b></span> | 0..1 | Indicatie waarmee wordt aangegeven dat het gegeven ook geen waarde kan hebben. |  | _Tagged value_ |
| <span class="red"><b>Regels</b></span> | 0..1 | Beschrijving van de niet in andere tagged values vast te leggen regels waaraan het construct moet voldoen. |  | _Tagged value_ |

<!-- Waarom is er op «Gegevensgroeptype» in het MIM het metadatagegeven 'Kardinaliteit' gedefinieerd? Dat is op «Groep» toch al gedefinieerd waar het n.m.m. ook thuis hoort. 
     Waarom is daar ook metadatagegeven 'heeft gegevensgroeptype' gedefinieerd? Waarom zou je op een 'Gegevensgroeptype' het datatype 'Gegevensgroeptype' willen definiëren? -->

#### Metagegevens voor «Intern»

Interne packages hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <b>Naam</b> | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment. | _Notes_ |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <b>Release</b> | 1..1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van het Interne package. De releasedatum wordt mede gebruikt om het Interne package uniek te identificeren in Imvertor. |  | _Tagged value_ |
 
#### Metagegevens voor «Primitief datatype»

Primitieve datatypes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <b>Lengte</b> | 0..1 | De maximale lengte die een attribuut kan hebben. |  | _Tagged value_ |
| <b>Patroon</b> | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | _Tagged value_ |
| <b>Formeel patroon</b> | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | _Tagged value_ |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
| <span class="red"><b>Maximum waarde (inclusief)</b></span> | 0..1 | De maximale waarde (inclusief) dat een attribuut mag hebben. |  | _Tagged value_ |
| <span class="red"><b>Minimum lengte</b></span> | 0..1 | De minimale lengte die een attribuut moet hebben. | _Tagged value_ |
| <span class="red"><b>Minimum waarde (inclusief)</b></span> | 0..1 | De minimale waarde (inclusief) dat een attribuut moet hebben |  | _Tagged value_ |

#### Metagegevens voor «Relatie»

De Relatie associaties hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <b>Identificerend</b> | 0..1 | Algemeen metagegeven | isID bij de metaclass Property | _isId_ |
| <b>Unidirectioneel</b> | 1 | Algemeen metagegeven. |  | _Direction van de betreffende association (van source naar target)_ |
| <b>Relatie eigenaar</b> | 1 | Algemeen metagegeven. | /source: related Element bij Relationship Element | _Source_ |
| <b>Relatie doel</b> | 1 | Algemeen metagegeven. | /target: related Element bij Relationship Element | _Target_ |
| <b>Aggregatietype</b> | 1 | Algemeen metagegeven. | AggregationKind bij metaclass Property | _Aggregation van de source role met waarde composite of shared_ |
| <b>Kardinaliteit</b> | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | _/target	Multiplicity van de target role_ |
| <b>Kardinaliteit relatie bron</b> | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | _/source	Multiplicity van de source role_ |
| <span class="grey"><b>heeft tijdlijn geldigheid</b></span> | - | - | - | - |
| <b>Indicatie materiële historie</b> | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | _Tagged value_ |
| <span class="grey"><b>heeft tijdlijn registratie</b></span> | - | - | - | - |
| <b>Indicatie formele historie</b> | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | _Tagged value_ |
| <b>Indicatie authentiek</b> | 0..1 | Aanduiding of het een authentiek gegeven (attribuutsoort) betreft. |  | _Tagged value_ |
| <b>Indicatie afleidbaar</b> | 1 | Algemeen metagegeven. | isDerived bij UML metaclass Assocation | _isDerived_ |
| <span class="grey"><b>Mogelijk geen waarde</b></span> | - | - | - | - |
| verwijst naar <b>relatiedoel</b> | 0..* | Binding aan een objecttype. | /target: related Element bij Relationship Element = UML-Class | _association target = Class_ |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
| <b>Regels</b> | 0..1 | Beschrijving van de niet in andere tagged values vast te leggen regels waaraan het element moet voldoen. |  | _Tagged value_ |
| <span class="red"><b>Indicatie in onderzoek</b></span> | 0..1 | De indicatie of te bevragen is dat er twijfel is of is geweest aan de juistheid van de attribuutwaarde en dat een onderzoek wordt of is uitgevoerd naar de juistheid van de attribuutwaarde. |  | _Tagged value_ |
| <span class="red"><b>Target role in meervoud</b></span> | 0..1 | Voorziening om de target role een meervoudsnaam te kunnen geven. Deze wordt gebruikt als propertynaam van een relatie in een yaml bestand. |  | _Tagged value_ |
| <span class="red"><b>Positie</b></span> | 0..1 | De positie van de construct binnen producten waarin deze opeenvolging een rol speelt. |  | _Tagged value_ |

#### Metagegevens voor «Relatie-entiteit»

De Relatie-entiteit classes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct. | _Body van de metaclass Comment	Notes_ |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Unidirectioneel</b> | 1 | Algemeen metagegeven. |  | _Direction van de betreffende assiciation (van source naar target)_ |
| <b>Relatie eigenaar</b> | 1 | Algemeen metagegeven. | /source: related Element bij Relationship Element | _Source_ |
| <b>Relatie doel</b> | 1 | Algemeen metagegeven. | /target: related Element bij Relationship Element | _Target_ |
| <b>Aggregatietype</b> | 1 | Algemeen metagegeven. | AggregationKind bij metaclass Property | _Aggregation van de source role met waarde composite of shared._ |
| <b>Kardinaliteit</b> | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | _/target	Multiplicity van de target role._ |
| <b>Kardinaliteit relatie bron</b> | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | _/source	Multiplicity van de source role_ |
| <b>Indicatie materiële historie</b> | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | _Tagged value_ |
| <b>Indicatie formele historie</b> | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | _Tagged value_ |
| <b>Indicatie authentiek</b> | 0..1 | Aanduiding of het een authentiek gegeven (attribuutsoort) betreft. |  | _Tagged value_ |
| <b>Indicatie afleidbaar</b> | 1 | Algemeen metagegeven. | isDerived bij UML metaclass Assocation | _isDerived_ |
| <b>Mogelijk geen waarde</b> | 0..1 | Indicatie waarmee wordt aangegeven dat het gegeven ook geen waarde kan hebben. |  | _Tagged value_ |
| heeft <b>attribute</b> | 0..* | Binding aan een attribuutsoort | owned element = UML-property | _attribute_ |
| verwijst naar <b>relatiedoel</b> | 0..* | Binding aan een objecttype. | /target: related Element bij Relationship Element = UML-Class | _association target = Class_ |
| heeft <b>gegevensgroep</b> | 0..* | Binding aan een gegevensgroep | owned element = UML-property | _attribute_ |

#### Metagegevens voor «Tabel Element»

Tabel elementen hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <b>Lengte</b> | 0..1 | De maximale lengte die een attribuut kan hebben. |  | _Tagged value_ |
| <b>Patroon</b> | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | _Tagged value_ |
| <b>Formeel patroon</b> | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. | _Tagged value_ |
| <b>Kardinaliteit</b> | 1 | Algemeen metagegeven | lowerValue en upperValue van de --metaclass Multiplicity | _Element	Multiplicity_ |		
| <b>Identificerend</b> | 0..1 | Algemeen metagegeven | isID bij de metaclass Property | _isID_ |
| <span class="grey"><b>Minimumwaarde inclusief</b></span> | - | - | - | - |
| <span class="grey"><b>Minimumwaarde exclusief</b></span> | - | - | - | - |
| <span class="grey"><b>Maximumwaarde inclusief</b></span> | - | - | - | - |
| <span class="grey"><b>Maximumwaarde exclusief</b></span> | - | - | - | - |
| <span class="grey"><b>Eenheid</b></span> | - | - | - | - |
| heeft <b>datatype</b> | 1 | Binding aan een datatype. | datatype = UML-datatype | _type = datatype_ |
| <span class="red"><b>Minimum lengte</b></span> | 0..1 | De minimale lengte die een attribuut moet hebben. |  | _Tagged value_ |
| <span class="red"><b>Positie</b></span> | 0..1 | De positie van de construct binnen producten waarin deze opeenvolging een rol speelt. |  | _Tagged value_ |

#### Metagegevens voor «Tabel-entiteit»

Tabel-entiteit classes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <span class="grey"><b>Locatie</b></span> | - | - | - | - |
| bevat <b>tabel element</b> | 1..* | Binding aan een tabel element. | owned element = UML-property | _attribute_ |
| verwijst naar <b>supertype</b> | 0..* | Binding aan een generalisatie (naar een andere referentie lijst). | owned element = UML-Relationship | _association_ |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
| <span class="red"><b>Web locatie</b></span> | 0..1 | Url van de locatie waar de tabel is opgeslagen of geraadpleegd kan worden. |  | _Tagged value_ |

#### Metagegevens voor «Union»

Union datatypes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <b>Naam</b> | 1 | Algemeen metagegeven | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <span class="grey"><b>Is gedefinieerd in</b></span> | - | - | - | - |
| <span class="grey"><b>Begrip</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| heeft <b>datatypekeuze</b> | 0..* | Binding van een datatype, in UML via een additionale UML-property met stereotype keuze | owned element = UML-property en deze heeft en datatype | _type_ |
| heeft <b>attribuutkeuze </b>| 0..* | Binding aan een attribuutsoort. | owned element = UML-Property | _attribute_ |
| heeft <b>relatiedoelkeuze</b> | 0..* | Binding aan een relatiesoort. | owned element = UML-Relationship | _association_ |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |

<!-- Waarom is er op «Keuze» in het MIM niet het metadatagegeven 'URI' gedefinieerd? -->

#### Metagegevens voor «Union element»

Union datatypes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <b>Naam</b> | 1 | Algemeen metagegeven | name van de metaclass Named element | _Name_ |
| <b>Alias | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <b>Patroon</b> | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | _Tagged value_ |
| <b>Formeel patroon</b> | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | _Tagged value_ |
 
#### Metagegevens voor «View»

View packages hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| <span class="grey"><b>URI</b></span> | - | - | - | - |
| <b>Naam</b> | 1 | Algemeen metagegeven. Deze is, indien mogelijk, analoog aan de naamgeving in het externe schema waar de view over gaat, eventueel met een prefix. | name van de metaclass Named element | _Name_ |
| <b>Alias</b> | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| <span class="grey"><b>Herkomst</b></span> | - | - | - | - |
| <b>Definitie</b> | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment | _Notes_ |
| <span class="grey"><b>Herkomst definitie</b></span> | - | - | - | - |
| <b>Toelichting</b> | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| <span class="grey"><b>Datum opname</b></span> | - | - | - | - |
| <span class="grey"><b>Locatie</b></span> | - | - | - | - |
| <span class="grey">heeft <b>Constraint</b></span> | - | - | - | - |
| <span class="grey"><b>Basis-URI</b></span> | - | - | - | - |
| <span class="red"><b>Afkorting</b></span> | 0..1 | Afkorting van dit model. Deze afkorting wordt o.a. gebruikt waar informatie over het model wordt gepubliceerd.	 |  | _Tagged value_ |
| <span class="red"><b>Data locatie</b></span> | 1 | De locatie waar informatie over de gegevens van een construct te vinden zijn. Wanneer het een external of view package betreft: De verwijzing naar de locatie van het bijbehorende informatiemodel waar dit package een representatie van is. In alle andere gevallen moet het een waardenlijst betreffen. Het gaat dan om de verwijzing naar de plek waar de waarden beschikbaar worden gesteld. De verwijzing heeft de vorm van een URI conform een gekozen URI strategie. |  | _Tagged value_ |
| <span class="red"><b>Versie ID</b></span> | 0..1 | De identificatie van de versie/revisie van dit model in het gehanteerde versiebeheersysteem. |  | _Tagged value_ |
| <span class="red"><b>Release</b></span> | 1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van de View. Deze moet gelijk zijn aan of van recenter datum zijn dan de taggedvalue met dezelfde naam op «Basismodel». De releasedatum wordt mede gebruikt om de View uniek te identificeren in Imvertor. |  | _Tagged value_ |
| <span class="red"><b>Web locatie</b></span> | 0..1 | Url van de locatie waar de view te vinden is. |  | _Tagged value_ |
<!--| <span class="red"><b>Ref-release</b></span> | 0..1 | ??? |  | _Tagged value_ |
| <span class="red"><b>Ref-version</b></span> | 0..1 | ??? |  | _Tagged value_ | -->
