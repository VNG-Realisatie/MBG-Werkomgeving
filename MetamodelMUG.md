## Metamodel UitwisselingsGegevensmodel (MUG)

Het Bericht StructuurModel (BSM) is in feite een extensie op het UitwisselingsGegevensModel (UGM) dat gebaseerd is op het Metamodel 
UitwisselingsGegevensmodel (MUG). Het BSM definieert het vehikel waarmee gegevens of een uit te voeren actie naar een endpoint wordt 
gecommuniceerd en het UGM voorziet in de gegevens die verstuurd dan wel ontvangen worden. Een BSM kan dan ook alle constructs  
van een UGM bevatten behalve 'Basismodel'. Daarvoor wordt in een BSM immers 'Koppelvlak' gebruikt.

Een UGM is in de basis een vertaling van een Conceptueel Informatie Model (CIM) naar een ander metamodel. De structuur van een UGM kan 
in principe gelijk zijn aan die van een CIM maar dat is over het algemeen niet het geval. Waar een CIM een beeld geeft van de 
informatiebehoefte binnen een domein op conceptueel niveau is het UGM een vertaling daarvan naar een technische structuur. 

De in een CIM gebruikte stereotypes kunnen nagenoeg 1 op 1 gemapt worden met de in een UGM gebruikte stereotypes. Om die reden zou een BSM in 
theorie ook als extensie op een op het MIM gebaseerd CIM kunnen worden gedefinieerd, al ontbreken er dan op de objecten en attributen 
nog wel diverse tagged values. 

In de volgende paragraaf vind je de mapping tussen de stereotypes van het MIM en die van het MUG. In de daarop volgende paragraaf worden per MUG 
stereotype de op de gerelateerde stereotype in het MIM ontbrekende maar voor het BSM bruikbare of zelfs noodzakelijke tagged values opgesomd.

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

Daarnaast zijn de namen van de metagegevens die wel voorkomen op de MIM stereotypes maar niet bij de gerelateerde MUG stereotypes cursief en niet vet in de eerste kolom van dezelfde tabellen opgenomen. De andere kolommen zijn niet daar niet gevuld.

#### Metagegevens voor «Basismodel»

Basismodel packages hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment. | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| _Informatie-model type_ | - | - | - | - |
| _Informatie-domein_ | - | - | - | - |
| _MIM versie_ | - | - | - | - |
| _MIM extensie_ | - | - | - | - |
| _MIM taal_ | - | - | - | - |
| _Relatie-modellerings-type_ | - | - | - | - |
| _heeft Constraint_ | - | - | - | - |
| _Basis-URI_ | - | - | - | - |
| <span class="new">Afkorting</span> | 0..1 | Afkorting van dit model. Deze afkorting wordt o.a. gebruikt waar informatie over het model wordt gepubliceerd. |  | _Tagged value_ |
| <span class="new">Release</span> | 1..1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van het UGM. De releasedatum wordt mede gebruikt om het Basismodel uniek te identificeren in Imvertor. |  | _Tagged value_ |
| <span class="new">Versie ID</span> | 0..1 | De identificatie van de versie/revisie van dit model in het gehanteerde versiebeheersysteem. |  | _Tagged value_ |
| <span class="new">Web locatie</span> | 0..1 | Url van de locatie waar het model te vinden is. |  | _Tagged value_ |
| <span class="new">Niveau</span> | 0..1 | Het niveau is een waarde uit een beperkte set:<br/>"algemeen" betekent dat het model een fundament is van een ander model en moet worden opgenomen. Het modelleert generieke constructies die deel uitmaken van de echte wereld. Dit omvat meestal abstracte object typen. Het kan andere constructen bevatten.<br/>"specifiek" betekent dat het model een bepaald domein beschrijft of een samenhangend deel ervan. |  | _Tagged value_ |

#### Metagegevens voor «Complex datatype»

Complex datatype classes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. De naam van het domein package. | name van de metaclass Namedelement | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| _Patroon_ | - | - | - | - |
| _Formeel patroon_ | - | - | - | - |
| bevat **data element** | 0..* | Binding aan een data element, 2 of meer tenzij via generalisatie verkregen. |  | _attribute_ |
| _heeft Constraint_ | - | - | - | - |
| <span class="new">Positie<span> | 0..1 | De positie van de construct binnen producten waarin deze opeenvolging een rol speelt. |  | _Tagged value_ |
<!-- 
| Formeel Patroon | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | _Tagged value_ |
| Patroon | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | _Tagged value_ |

-->

#### Metagegevens voor «Data element»

Data elementen hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Namedelement | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| **Lengte** | 0..1 | De maximale lengte die een attribuut kan hebben. |  | _Tagged value_ |
| **Patroon** | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | _Tagged value_ |
| **Formeel patroon** | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | _Tagged value_ |
| **Kardinaliteit** | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | _Multiplicity_ |
| **Minimum waarde (inclusief)** | 0..1 | De minimale waarde (inclusief) dat een attribuut moet hebben. |  | _Tagged value_ |
| _Minimum waarde (exclusief)_ | - | - | - | - |
| **Maximum waarde (inclusief)**> | 0..1 | De maximale waarde (inclusief) dat een attribuut mag hebben. |  | _Tagged value_ |
| _Maximum waarde (exclusief)_ | - | - | - | - |
| heeft **datatype** | 1 | Binding aan een datatype. | datatype = UML-datatype | _type = datatype_ |
| _heeft Constraint_ | - | - | - | - |
| <span class="new">Regels</span> | 0..1 | Beschrijving van de niet in andere tagged values vast te leggen regels waaraan het element moet voldoen. |  | _Tagged value_ |
| <span class="new">Example</span> | 0..1 | Voorbeeld waarde. |  | _Tagged value_ |
| <span class="new">Minimum lengte</span> | 0..1 | De minimale lengte die een attribuut moet hebben. |  | _Tagged value_ |
| <span class="new">Positie</span> | 0..1 | De positie van de construct binnen producten waarin deze opeenvolging een rol speelt. |  | _Tagged value_ |

#### Metagegevens voor «Domein»

Domein packages hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. De naam van het domein package. | name van de metaclass Namedelement | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| _heeft Constraint_ | - | - | - | - |
| _Basis-URI_ | - | - | - | - |
| <span class="new">Afkorting</span> | 0..1 | Afkorting van dit model. Deze afkorting wordt o.a. gebruikt waar informatie over het model wordt gepubliceerd. |  | _Tagged value_ |
| <span class="new">Release</span> | 1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van het Domein. Deze moet gelijk zijn aan of van recenter datum zijn dan de taggedvalue met dezelfde naam op «Basismodel». De releasedatum wordt mede gebruikt om het Domein uniek te identificeren in Imvertor. |  | _Tagged value_ |
| <span class="new">Versie ID</span> | 0..1 | De identificatie van de versie/revisie van dit model in het gehanteerde versiebeheersysteem. |  | _Tagged value_ |
| <span class="new">Web locatie</span> | 0..1 | Url van de locatie waar het domein te vinden is. |  | _Tagged value_ |
<!-- Waarom is er op «Domein» in het MUG de metatgegevens 'Ref-release' en 'Ref-version' gedefinieerd? En trouwens ook 'Web locatie'. Kan een domein ook van extern gehaald worden?
     Zo ja, hoeveel constructs hebben we dan wel niet om externe modellen op te halen? Extern, View, Interface, ...

| <span class="new">Ref-release</span> | 0..1 | ??? |  | _Tagged value_ |
| <span class="new">Ref-version</span> | 0..1 | ??? |  | _Tagged value_ | -->

#### Metagegevens voor «Element»

Elementen hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| **Lengte** | 0..1 | De maximale lengte die een attribuut kan hebben. |  | _Tagged value_ |
| **Patroon** | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | _Tagged value_ |
| **Formeel patroon** | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | _Tagged value_ |
| _Heeft tijdlijn geldigheid_ | - | - | - | - |
| **Indicatie materiële historie** | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | _Tagged value_ |
| _Heeft tijdlijn registratie_ | - | - | - | - |
| **Indicatie formele historie** | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | _Tagged value_ |
| **Kardinaliteit** | 1 | Algemeen metagegeven | lowerValue en upperValue van de metaclass Multiplicity Element | _Multiplicity_ |
| **Indicatie authentiek** | 0..1 | Aanduiding of het een authentiek gegeven (element) betreft. |  | _Tagged value_ |
| _Indicatie classificerend_ | - | - | - | - |
| **Mogelijk geen waarde** | 0..1 | Indicatie waarmee wordt aangegeven dat het gegeven ook geen waarde kan hebben. |  | _Tagged value_ |
| **Identificerend** | 0..1 | Algemeen metagegeven | isID bij de metaclass Property | _isID_ |
|**Minimum waarde (inclusief)** | 0..1 | De minimale waarde (inclusief) dat een attribuut moet hebben. |  | _Tagged value_ |
| _Minimum waarde exclusief_ | - | - | - | - |
| **Maximum waarde (inclusief)** | 0..1 | De maximale waarde (inclusief) dat een attribuut mag hebben. |  | _Tagged value_ |
| _Maximum waarde exclusief_ | - | - | - | - |
| _Eenheid_ | - | - | - | - |
| heeft **datatype** | 1 | Binding aan een datatype. | datatype = UML-datatype | _type = datatype_ |
| _heeft Constraint_ | - | - | - | - |
| _Indicatie afleidbaar_ | - | - | - | - |
| <span class="new">Regels</span> | 0..1 | Beschrijving van de niet in andere tagged values vast te leggen regels waaraan het element moet voldoen. |  | _Tagged value_ |
| <span class="new">Indicatie in onderzoek</span> | 0..1 | De indicatie of te bevragen is dat er twijfel is of is geweest aan de juistheid van de attribuutwaarde en dat een onderzoek wordt of is uitgevoerd naar de juistheid van de attribuutwaarde. |  | _Tagged value_ |
| <span class="new">Minimum lengte</span> | 0..1 | De minimale lengte die een attribuut moet hebben. |  | _Tagged value_ |
| <span class="new">Example</span> | 0..1 | Voorbeeldwaarde van een property. |  | _Tagged value_ |
| <span class="new">Positie</span> | 0..1 | De positie van de construct binnen producten waarin deze opeenvolging een rol speelt. |  | _Tagged value_ |

#### Metagegevens voor «Entiteittype»

Entiteittype classes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | 0..1 | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| **Unieke aanduiding** | 1 | De identificerende kenmerken van een entiteit die een instantie van het entiteittype uniek identificeren. Deze kenmerken worden in UML gemodelleerd als element en/of relatie dus dit metagegeven hoeft niet apart te worden gespecificeerd bij een entiteittype, het is afleidbaar. Voor entiteittypen die deel uitmaken van een (basis)registratie betreft dit de wijze waarop daarin voorkomende entiteiten (van dit type) uniek in de registratie worden aangeduid. | UML isID | _isId bij element, --- of --- stereotype «isId» bij target role relatie --- of --- een combinatie van deze twee, elk hiervan meer keren toepasbaar_ |
| _Datum opname_ | - | - | - | - |
| _Populatie_ | - | - | - | - |
| _Kwaliteit_ | - | - | - | - |
| _Indicatie abstract object_ | - | - | - | - |
| heeft **element** | 0..* | Binding aan een element. | owned element = UML-property | _attribute_ |
| heeft **groep** | 0..* | Binding aan een gegevensgroep. | owned element = UML-property | _attribute_ |
| heeft **relatie** | 0..* | Binding aan een relatie of relatie-entiteit. | owned element = UML-Relationship | _association_ |
| heeft **externe koppeling** | 0..* | Binding aan een externe koppeling. | owned element = UML-Relationship | _association_ |
| verwijst naar **supertype** | 0..* | Binding aan een generalisatie (naar een ander objecttype). | owned element = UML-Relationship | _association_ |
| _heeft Constraint_ | - | - | - | - |
| <span class="new">Endpoint beschikbaar</span> | 0..1 | Voorziening waarmee kan worden aangegeven dat er voor een entiteit al dan niet een resource endpoint beschikbaar is. |  | _Tagged value_ |
| <span class="new">Naam in meervoud</span> | 0..1 | Voorziening om een entiteit een meervoudsnaam te kunnen geven. Deze wordt gebruikt als propertynaam van een entiteit in een yaml bestand. |  | _Tagged value_ |

#### Metagegevens voor «Enum»

Enums hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| **Code** | 0..1 | De in een registratie aan de enumeratiewaarde toegekend unieke code. | Alias van de metaclass Element Import | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| _heeft Constraint_ | - | - | - | - |
| <span class="new">Positie</span> | 0..1 | De positie van de construct binnen producten waarin deze opeenvolging een rol speelt. |  | _Tagged value_ |

#### Metagegevens voor «Enumeration»

Enumeration classes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| _bevat enumeratiewaarde_ | - | - | - | - |
| bevat **enum** | 1..* | Binding aan een enum | owned element = UML-EnumerationLiteral | _EnumerationLiteral_ |
| _heeft Constraint_ | - | - | - | - |

#### Metagegevens voor «Extern»

Extern packages hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. De naam van het domein package. | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property | _Alias_ |
| _Herkomst_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| _Locatie_ | - | - | - | - |
| _heeft Constraint_ | - | - | - | - |
| _Basis-URI_ | - | - | - | - |
| <span class="new">Beheerder</span> | 0..1 | Naam van de beheerder van het model. |  | _Tagged value_ |
| <span class="new">Data locatie</span> | 0..1 | De locatie waar informatie over de gegevens van een construct te vinden zijn. Wanneer het een external of view package betreft: De verwijzing naar de locatie van het bijbehorende informatiemodel waar dit package een representatie van is. In alle andere gevallen moet het een waardenlijst betreffen. Het gaat dan om de verwijzing naar de plek waar de waarden beschikbaar worden gesteld. De verwijzing heeft de vorm van een URI conform een gekozen URI strategie. |  | _Tagged value_ |
| <span class="new">Release</span> | 0..1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van het Externe package. Deze moet gelijk zijn aan of van recenter datum zijn dan de taggedvalue met dezelfde naam op «Basismodel». De releasedatum wordt mede gebruikt om het Externe package uniek te identificeren in Imvertor. |  | _Tagged value_ |
| <span class="new">Versie ID</span> | 0..1 | De identificatie van de versie/revisie van dit model-element in het gehanteerde versiebeheersysteem. |  | _Tagged value_ |
| <span class="new">Web locatie</span> | 0..1 | Url van de locatie waar het externe package te vinden is. |  | _Tagged value_ |

#### Metagegevens voor «Externe koppeling»

Externe koppeling packages hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| **Unidirectioneel** | 1 | Algemeen metagegeven. |  | _Direction van de betreffende assiciation (van source naar target)_ |
| **Relatie eigenaar** | 1 | Algemeen metagegeven. | /source: related Element bij Relationship Element | _Source_ |
| **Relatie doel** | 1 | Algemeen metagegeven. | /target: related Element bij Relationship Element | _Target_ |
| **Aggregatietype** | 1 | Algemeen metagegeven. | AggregationKind bij metaclass Property | _Aggregation van de source role met waarde composite of shanew_ |
| **Kardinaliteit** | 1 | Algemeen metagegeven | lowerValue en upperValue van de metaclass MultiplicityElement | M_ultiplicity van de target role_ |
| **Kardinaliteit relatie bron** | 1 | Algemeen metagegeven | lowerValue en upperValue van de metaclass MultiplicityElement | _/source	Multiplicity van de source role_ |
| **Indicatie materiële historie** | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | _Tagged value_ |
| **Indicatie formele historie** | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | _Tagged value_ |
| **Indicatie authentiek** | 0..1 | Aanduiding of het een authentiek gegeven betreft. |  | _Tagged value_ |
| _Indicatie afleidbaar_ | - | - | - | - |
| _Mogelijk geen waarde_ | - | - | - | - |
| verwijst naar _relatiedoel | 0..* | Binding aan een entiteittype | /target: related Element bij Relationship Element = UML-Class | _association target = Class_ |
| _heeft Constraint_ | - | - | - | - |

#### Metagegevens voor «Gegevensgroep»

Gegevensgroep classes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| **Kardinaliteit** | 1 | Algemeen metagegeven | lowerValue en upperValue van de --metaclass Multiplicity | _Element	Multiplicity_ |
| **Indicatie authentiek** | 0..1 | Aanduiding of het een authentiek gegeven (attribuutsoort) betreft. |  | _Tagged value_ |
| heeft **groep** | 1 | Binding aan een gegevensgroeptype | owned element = UML-Class | _type = Class_ |
| _heeft Constraint_ | - | - | - | - |
| _Eenheid_ | - | - | - | - |
| <span class="new">Indicatie in onderzoek</span> | 0..1 | De indicatie of te bevragen is dat er twijfel is of is geweest aan de juistheid van de attribuutwaarde en dat een onderzoek wordt of is uitgevoerd naar de juistheid van de attribuutwaarde. |  | _Tagged value_ |
| <span class="new">Mogelijk geen waarde</span> | 0..1 | Indicatie waarmee wordt aangegeven dat het gegeven ook geen waarde kan hebben. |  | _Tagged value_ |
| <span class="new">Indicatie formele historie</span> | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | _Tagged value_ |
| <span class="new">Indicatie materiële historie</span> | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | _Tagged value_ |

#### Metagegevens voor «Groep»

Groepen hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| **Indicatie authentiek** | 0..1 | Aanduiding of het een authentiek gegeven betreft. |  | _Tagged value_ |
| heeft _Constraint_ | - | - | - | - |
| <span class="new">Groepnaam</span> | 0..1 | Voorziening om een groep aangepaste naam te kunnen geven. | _Tagged value_ |
| <span class="new">Mogelijk geen waarde</span> | 0..1 | Indicatie waarmee wordt aangegeven dat het gegeven ook geen waarde kan hebben. |  | _Tagged value_ |
| <span class="new">Regels</span> | 0..1 | Beschrijving van de niet in andere tagged values vast te leggen regels waaraan het construct moet voldoen. |  | _Tagged value_ |

#### Metagegevens voor «Intern»

Interne packages hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment. | _Notes_ |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| **Release** | 1..1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van het Interne package. De releasedatum wordt mede gebruikt om het Interne package uniek te identificeren in Imvertor. |  | _Tagged value_ |
 
#### Metagegevens voor «Primitief datatype»

Primitieve datatypes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| **Lengte** | 0..1 | De maximale lengte die een attribuut kan hebben. |  | _Tagged value_ |
| **Patroon** | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | _Tagged value_ |
| **Formeel patroon** | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | _Tagged value_ |
| _heeft Constraint_ | - | - | - | - |
| <span class="new">Maximum waarde (inclusief)</span> | 0..1 | De maximale waarde (inclusief) dat een attribuut mag hebben. |  | _Tagged value_ |
| <span class="new">Minimum lengte</span> | 0..1 | De minimale lengte die een attribuut moet hebben. | _Tagged value_ |
| <span class="new">Minimum waarde (inclusief)</span> | 0..1 | De minimale waarde (inclusief) dat een attribuut moet hebben |  | _Tagged value_ |

#### Metagegevens voor «Relatie»

De Relatie associaties hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| **Identificerend** | 0..1 | Algemeen metagegeven | isID bij de metaclass Property | _isId_ |
| **Unidirectioneel** | 1 | Algemeen metagegeven. |  | _Direction van de betreffende association (van source naar target)_ |
| **Relatie eigenaar** | 1 | Algemeen metagegeven. | /source: related Element bij Relationship Element | _Source_ |
| **Relatie doel** | 1 | Algemeen metagegeven. | /target: related Element bij Relationship Element | _Target_ |
| **Aggregatietype** | 1 | Algemeen metagegeven. | AggregationKind bij metaclass Property | _Aggregation van de source role met waarde composite of shanew_ |
| **Kardinaliteit** | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | _/target	Multiplicity van de target role_ |
| **Kardinaliteit relatie bron** | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | _/source	Multiplicity van de source role_ |
| _heeft tijdlijn geldigheid_ | - | - | - | - |
| **Indicatie materiële historie** | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | _Tagged value_ |
| _heeft tijdlijn registratie_ | - | - | - | - |
| **Indicatie formele historie** | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | _Tagged value_ |
| **Indicatie authentiek** | 0..1 | Aanduiding of het een authentiek gegeven (attribuutsoort) betreft. |  | _Tagged value_ |
| **Indicatie afleidbaar** | 1 | Algemeen metagegeven. | isDerived bij UML metaclass Assocation | _isDerived_ |
| **Mogelijk geen waarde** | 0..1 | Indicatie waarmee wordt aangegeven dat het gegeven ook geen waarde kan hebben. |  | _Tagged value_ |
| verwijst naar **relatiedoel** | 0..* | Binding aan een objecttype. | /target: related Element bij Relationship Element = UML-Class | _association target = Class_ |
| _heeft Constraint_ | - | - | - | - |
| **Regels** | 0..1 | Beschrijving van de niet in andere tagged values vast te leggen regels waaraan het element moet voldoen. |  | _Tagged value_ |
| <span class="new">Indicatie in onderzoek</span> | 0..1 | De indicatie of te bevragen is dat er twijfel is of is geweest aan de juistheid van de attribuutwaarde en dat een onderzoek wordt of is uitgevoerd naar de juistheid van de attribuutwaarde. |  | _Tagged value_ |
| <span class="new">Target role in meervoud</span> | 0..1 | Voorziening om de target role een meervoudsnaam te kunnen geven. Deze wordt gebruikt als propertynaam van een relatie in een yaml bestand. |  | _Tagged value_ |
| <span class="new">Positie</span> | 0..1 | De positie van de construct binnen producten waarin deze opeenvolging een rol speelt. |  | _Tagged value_ |

#### Metagegevens voor «Relatie-entiteit»

De Relatie-entiteit classes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct. | _Body van de metaclass Comment	Notes_ |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| _Herkomst definitie_ | - | - | - | - |
| **Unidirectioneel** | 1 | Algemeen metagegeven. |  | _Direction van de betreffende assiciation (van source naar target)_ |
| **Relatie eigenaar** | 1 | Algemeen metagegeven. | /source: related Element bij Relationship Element | _Source_ |
| **Relatie doel** | 1 | Algemeen metagegeven. | /target: related Element bij Relationship Element | _Target_ |
| **Aggregatietype** | 1 | Algemeen metagegeven. | AggregationKind bij metaclass Property | _Aggregation van de source role met waarde composite of shanew._ |
| **Kardinaliteit** | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | _/target	Multiplicity van de target role._ |
| **Kardinaliteit relatie bron** | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | _/source	Multiplicity van de source role_ |
| **Indicatie materiële historie** | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | _Tagged value_ |
| **Indicatie formele historie** | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | _Tagged value_ |
| **Indicatie authentiek** | 0..1 | Aanduiding of het een authentiek gegeven (attribuutsoort) betreft. |  | _Tagged value_ |
| **Indicatie afleidbaar** | 1 | Algemeen metagegeven. | isDerived bij UML metaclass Assocation | _isDerived_ |
| **Mogelijk geen waarde** | 0..1 | Indicatie waarmee wordt aangegeven dat het gegeven ook geen waarde kan hebben. |  | _Tagged value_ |
| heeft **attribute** | 0..* | Binding aan een attribuutsoort | owned element = UML-property | _attribute_ |
| verwijst naar **relatiedoel** | 0..* | Binding aan een objecttype. | /target: related Element bij Relationship Element = UML-Class | _association target = Class_ |
| heeft **gegevensgroep** | 0..* | Binding aan een gegevensgroep | owned element = UML-property | _attribute_ |

#### Metagegevens voor «Tabel Element»

Tabel elementen hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| **Lengte** | 0..1 | De maximale lengte die een attribuut kan hebben. |  | _Tagged value_ |
| **Patroon** | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | _Tagged value_ |
| **Formeel patroon** | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. | _Tagged value_ |
| **Kardinaliteit** | 1 | Algemeen metagegeven | lowerValue en upperValue van de --metaclass Multiplicity | _Element	Multiplicity_ |		
| **Identificerend** | 0..1 | Algemeen metagegeven | isID bij de metaclass Property | _isID_ |
| _Minimumwaarde inclusief_ | - | - | - | - |
| _Minimumwaarde exclusief_ | - | - | - | - |
| _Maximumwaarde inclusief_ | - | - | - | - |
| _Maximumwaarde exclusief_ | - | - | - | - |
| _Eenheid_ | - | - | - | - |
| heeft **datatype** | 1 | Binding aan een datatype. | datatype = UML-datatype | _type = datatype_ |
| <span class="new">Minimum lengte</span> | 0..1 | De minimale lengte die een attribuut moet hebben. |  | _Tagged value_ |
| <span class="new">Positie</span> | 0..1 | De positie van de construct binnen producten waarin deze opeenvolging een rol speelt. |  | _Tagged value_ |

#### Metagegevens voor «Tabel-entiteit»

Tabel-entiteit classes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| _Locatie_ | - | - | - | - |
| bevat **tabel element** | 1..* | Binding aan een tabel element. | owned element = UML-property | _attribute_ |
| verwijst naar **supertype** | 0..* | Binding aan een generalisatie (naar een andere referentie lijst). | owned element = UML-Relationship | _association_ |
| _heeft Constraint_ | - | - | - | - |
| <span class="new">Web locatie</span> | 0..1 | Url van de locatie waar de tabel is opgeslagen of geraadpleegd kan worden. |  | _Tagged value_ |

#### Metagegevens voor «Union»

Union datatypes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Naam** | 1 | Algemeen metagegeven | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| _Is gedefinieerd in_ | - | - | - | - |
| _Begrip_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| heeft **datatypekeuze** | 0..* | Binding van een datatype, in UML via een additionale UML-property met stereotype keuze | owned element = UML-property en deze heeft en datatype | _type_ |
| heeft **attribuutkeuze** | 0..* | Binding aan een attribuutsoort. | owned element = UML-Property | _attribute_ |
| heeft **relatiedoelkeuze** | 0..* | Binding aan een relatiesoort. | owned element = UML-Relationship | _association_ |
| _heeft Constraint_ | - | - | - | - |

#### Metagegevens voor «Union element»

Union datatypes hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Naam** | 1 | Algemeen metagegeven | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | _Notes_ |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| **Patroon** | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | _Tagged value_ |
| **Formeel patroon** | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | _Tagged value_ |
| **Positie** | 0..1 | De positie van de construct binnen producten waarin deze opeenvolging een rol speelt. |  | _Tagged value_ |
 
#### Metagegevens voor «View»

View packages hebben de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| _URI_ | - | - | - | - |
| **Naam** | 1 | Algemeen metagegeven. Deze is, indien mogelijk, analoog aan de naamgeving in het externe schema waar de view over gaat, eventueel met een prefix. | name van de metaclass Named element | _Name_ |
| **Alias** | 0..1 | Algemeen metagegeven. | UML-Property	 | _Alias_ |
| _Herkomst_ | - | - | - | - |
| **Definitie** | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment | _Notes_ |
| _Herkomst definitie_ | - | - | - | - |
| **Toelichting** | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | _Tagged value_ |
| _Datum opname_ | - | - | - | - |
| _Locatie_ | - | - | - | - |
| _heeft Constraint_ | - | - | - | - |
| _Basis-URI_ | - | - | - | - |
| <span class="new">Afkorting</span> | 0..1 | Afkorting van dit model. Deze afkorting wordt o.a. gebruikt waar informatie over het model wordt gepubliceerd.	 |  | _Tagged value_ |
| <span class="new">Data locatie</span> | 1 | De locatie waar informatie over de gegevens van een construct te vinden zijn. Wanneer het een external of view package betreft: De verwijzing naar de locatie van het bijbehorende informatiemodel waar dit package een representatie van is. In alle andere gevallen moet het een waardenlijst betreffen. Het gaat dan om de verwijzing naar de plek waar de waarden beschikbaar worden gesteld. De verwijzing heeft de vorm van een URI conform een gekozen URI strategie. |  | _Tagged value_ |
| <span class="new">Versie ID*/span> | 0..1 | De identificatie van de versie/revisie van dit model in het gehanteerde versiebeheersysteem. |  | _Tagged value_ |
| <span class="new">Release</span> | 1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van de View. Deze moet gelijk zijn aan of van recenter datum zijn dan de taggedvalue met dezelfde naam op «Basismodel». De releasedatum wordt mede gebruikt om de View uniek te identificeren in Imvertor. |  | _Tagged value_ |
| <span class="new">Web locatie</span> | 0..1 | Url van de locatie waar de view te vinden is. |  | _Tagged value_ |

### MUG-toolbox

Er is door de MUG beheerder een metamodel profiel gemaakt voor Sparx Enterprise Architect, dat gebruikt kan worden bij het modelleren van een Uitwisselings GegevensModel (UGM) en dus ook bij het modelleren van de UGM modelelementen in een BSM. Dit profiel kan je inladen en daarna kan je kiezen uit de metamodel elementen. Het profiel is faciliterend en zorgt dat (de meeste) UGM modelelementen automatisch voldoen aan dit metamodel. Dit profiel is te vinden op [MUG profiel - toolbox voor EA](https://vng-realisatie.github.io/Model-Driven-Design-Documentatie/bestanden/VNGR%20MUG+Grouping%20NL-1.0-1.65.2.ea-toolbox.xml).
