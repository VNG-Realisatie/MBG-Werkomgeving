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

De volgende tabel bevat een mapping tussen de MIM stereotypes en de MUG stereotypes. Stereotypes die niet in het MIM aanwezig zijn maar 
wel in het MUG zijn niet opgenomen, stereotypes die wel aanwezig zijn in het MIM maar waarvoor geen MUG stereotype is opgenomen wel. 
Die laatste stereotypes hebben (nog) geen functie bij de berichtdefinitie.

| MIM stereotype | MUG stereotype |
| --- | --- |
| Informatiemodel | Basismodel |
| Gestructureerd | datatype	Complex datatype |
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
| Relatieklasse | Relatie-entiteit |
| Referentie element | Tabel Element |
| Referentielijst | Tabel-entiteit |
| Keuze | Union |
| View | View |
| Codelijst | Tabel-entiteit |
| Generalisatie | - |
| Relatierol | - |

### Metagegevens

De MUG stereotypes in de voorgaande paragraaf kennen een aantal metagegevens. In deze paragraaf worden deze per stereotype beschreven.
Metagegevens die zijn toegevoegd t.o.v. het MIM 1.1.1 zijn rood gemaakt.

Daarnaast zijn de metagegevens die wel voorkomen op de MIM stereotypes maar niet bij de gerelateerde MUG stereotypes in dezelfde tabellen opgenomen maar uitgegrijsd.

#### Metagegevens voor «Basismodel»

Basismodel packages hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="red">Afkorting</span> | 0..1 | Afkorting van dit model. Deze afkorting wordt o.a. gebruikt waar informatie over het model wordt gepubliceerd. |  | Tagged value |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment. | Notes |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| <span class="grey">Informatie-domein</span> | - | - | - | - |
| <span class="grey">Informatie-model type</span> | - | - | - | - |
| <span class="grey">MIM extensie</span> | - | - | - | - |
| <span class="grey">MIM taal</span> | - | - | - | - |
| <span class="grey">MIM versie</span> | - | - | - | - |
| <span class="grey">Relatie-modellerings-type</span> | - | - | - | - |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| <span class="red">Release</span> | 1..1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van het UGM. De releasedatum wordt mede gebruikt om het Basismodel uniek te identificeren in Imvertor. |  | Tagged value |
| <span class="red">Versie ID</span> | 0..1 | De identificatie van de versie/revisie van dit model in het gehanteerde versiebeheersysteem. |  | Tagged value |
<!--| <span class="red">Web locatie</span> | 0..1 | ???? |  | Tagged value | -->
 
#### Metagegevens voor «Complex datatype»

Complex datatype classes hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. De naam van het domein package. | name van de metaclass Namedelement | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | Notes |
| Formeel Patroon | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | Tagged value |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| Patroon | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | Tagged value |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| bevat data element | 0..* | Binding aan een data element, 2 of meer tenzij via generalisatie verkregen. |  | attribute |

#### Metagegevens voor «Data element»

Data elementen hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. | name van de metaclass Namedelement | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | Notes |
| Example | 0..1 | Voorbeeld waarde. |  | Tagged value |
| Formeel patroon | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | Tagged value |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| Kardinaliteit | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | Multiplicity |
| Lengte | 0..1 | De maximale lengte die een attribuut kan hebben. |  | Tagged value |
| <span class="red">Maximum waarde (inclusief)</span> | 0..1 | De maximale waarde (inclusief) dat een attribuut mag hebben. |  | Tagged value |
| <span class="red">Minimum lengte</span> | 0..1 | De minimale lengte die een attribuut moet hebben. |  | Tagged value |
| <span class="red">Minimum waarde (inclusief)</span> | 0..1 | De minimale waarde (inclusief) dat een attribuut moet hebben. |  | Tagged value |
| Patroon | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | Tagged value |
| Regels | 0..1 | Beschrijving van de niet in andere tagged values vast te leggen regels waaraan het element moet voldoen. |  | Tagged value |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| Heeft datatype | 1 | Binding aan een datatype. | datatype = UML-datatype | type = datatype |

#### Metagegevens voor «Domein»

Domein packages hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. De naam van het domein package. | name van de metaclass Namedelement | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="red">Afkorting</span> | 0..1 | Afkorting van dit model. Deze afkorting wordt o.a. gebruikt waar informatie over het model wordt gepubliceerd. |  | Tagged value |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment | Notes |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| <span class="red">Release</span> | 1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van het Domein. Deze moet gelijk zijn aan of van recenter datum zijn dan de taggedvalue met dezelfde naam op «Basismodel». De releasedatum wordt mede gebruikt om het Domein uniek te identificeren in Imvertor. |  | Tagged value |
| <span class="red">Versie ID</span> | 0..1 | De identificatie van de versie/revisie van dit model in het gehanteerde versiebeheersysteem. |  | Tagged value |
<!-- | <span class="red">Ref-release</span> | 0..1 | ??? |  | Tagged value |
| <span class="red">Ref-version</span> | 0..1 | ??? |  | Tagged value | -->

#### Metagegevens voor «Element»

Elementen hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct | Body van de metaclass Comment | Notes |
| <span class="red">Example</span> | 0..1 | Voorbeeldwaarde van een property. |  | Tagged value |
| Formeel patroon | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | Tagged value |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| Identificerend | 0..1 | Algemeen metagegeven | isID bij de metaclass Property | isID |
| <span class="grey">Authentiek</span> | - | - | - | - |
| <span class="red">Indicatie authentiek</span> | 0..1 | Aanduiding of het een authentiek gegeven (element) betreft. |  | Tagged value |
| <span class="grey">Indicatie classificerend</span> | - | - | - | - |
| <span class="grey">Indicatie afleidbaar</span> | - | - | - | - |
| <span class="red">Indicatie in onderzoek</span> | 0..1 | De indicatie of te bevragen is dat er twijfel is of is geweest aan de juistheid van de attribuutwaarde en dat een onderzoek wordt of is uitgevoerd naar de juistheid van de attribuutwaarde. |  | Tagged value |
| Indicatie materiële historie | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | Tagged value |
| Indicatie formele historie | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | Tagged value |
| Kardinaliteit | 1 | Algemeen metagegeven | lowerValue en upperValue van de metaclass Multiplicity Element | Multiplicity |
| Lengte | 0..1 | De maximale lengte die een attribuut kan hebben. |  | Tagged value |
| <span class="red">Maximum waarde (inclusief)</span> | 0..1 | De maximale waarde (inclusief) dat een attribuut mag hebben. |  | Tagged value |
| <span class="red">Minimum lengte</span> | 0..1 | De minimale lengte die een attribuut moet hebben. |  | Tagged value |
| <span class="red">Minimum waarde (inclusief)</span> | 0..1 | De minimale waarde (inclusief) dat een attribuut moet hebben. |  | Tagged value |
| Mogelijk geen waarde | 0..1 | Indicatie waarmee wordt aangegeven dat het gegeven ook geen waarde kan hebben. |  | Tagged value |
| Patroon | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | Tagged value |
| Regels | 0..1 | Beschrijving van de niet in andere tagged values vast te leggen regels waaraan het element moet voldoen. |  | Tagged value |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| Heeft datatype | 1 | Binding aan een datatype. | datatype = UML-datatype | type = datatype |
 
#### Metagegevens voor «Entiteittype»

Entiteittype classes hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct | Body van de metaclass Comment | Notes |
| <span class="red">Endpoint beschikbaar</span> | 0..1 | Voorziening waarmee kan worden aangegeven dat er voor een entiteit al dan niet een resource endpoint beschikbaar is. |  | Tagged value |
| <span class="grey">Herkomst</span> | 0..1 | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| <span class="grey">Kwaliteit</span> | - | - | - | - |
| <span class="red">Naam in meervoud</span> | 0..1 | Voorziening om een entiteit een meervoudsnaam te kunnen geven. Deze wordt gebruikt als propertynaam van een entiteit in een yaml bestand. |  | Tagged value |
| <span class="grey">Populatie</span> | - | - | - | - |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| Unieke aanduiding | 1 | De identificerende kenmerken van een entiteit die een instantie van het entiteittype uniek identificeren. Deze kenmerken worden in UML gemodelleerd als element en/of relatie dus dit metagegeven hoeft niet apart te worden gespecificeerd bij een entiteittype, het is afleidbaar. Voor entiteittypen die deel uitmaken van een (basis)registratie betreft dit de wijze waarop daarin voorkomende entiteiten (van dit type) uniek in de registratie worden aangeduid. | UML isID | isId bij element, --- of --- stereotype «isId» bij target role relatie --- of --- een combinatie van deze twee, elk hiervan meer keren toepasbaar |
| <span class="grey">Indicatie abstract object</span> | - | - | - | - |
| heeft element | 0..* | Binding aan een element. | owned element = UML-property | attribute |
| heeft groep | 0..* | Binding aan een gegevensgroep. | owned element = UML-property | attribute |
| heeft relatie | 0..* | Binding aan een relatie of relatie-entiteit. | owned element = UML-Relationship | association |
| heeft externe koppeling | 0..* | Binding aan een externe koppeling. | owned element = UML-Relationship | association |
| verwijst naar supertype | 0..* | Binding aan een generalisatie (naar een ander objecttype). | owned element = UML-Relationship | association |

#### Metagegevens voor «Enum»

Enums hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. | name van de metaclass Named element | Name |
| Code | 0..1 | De in een registratie aan de enumeratiewaarde toegekend unieke code. | Alias van de metaclass Element Import | Alias |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct | Body van de metaclass Comment | Notes |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |

#### Metagegevens voor «Enumeration»

Enumeration classes hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct | Body van de metaclass Comment | Notes |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| bevat enumeratiewaarde | 1..* | Binding aan een enum | owned element = UML-EnumerationLiteral | EnumerationLiteral |

#### Metagegevens voor «Extern»

Extern packages hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. De naam van het domein package. | name van de metaclass Named element | Name |
| Alias | 0..1 | Algemeen metagegeven. | UML-Property | Alias |
| <span class="red">Beheerder</span> | 0..1 | Naam van de beheerder van het model. |  | Tagged value |
|<span class="grey"> Locatie</span> | - | - | - | - |
| Data locatie | 0..1 | De locatie waar informatie over de gegevens van een construct te vinden zijn. Wanneer het een external of view package betreft: De verwijzing naar de locatie van het bijbehorende informatiemodel waar dit package een representatie van is. In alle andere gevallen moet het een waardenlijst betreffen. Het gaat dan om de verwijzing naar de plek waar de waarden beschikbaar worden gesteld. De verwijzing heeft de vorm van een URI conform een gekozen URI strategie. |  | Tagged value |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment | Notes |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| <span class="red">Release</span> | 0..1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van het Externe package. Deze moet gelijk zijn aan of van recenter datum zijn dan de taggedvalue met dezelfde naam op «Basismodel». De releasedatum wordt mede gebruikt om het Externe package uniek te identificeren in Imvertor. |  | Tagged value |
| <span class="red">Versie ID</span> | 0..1 | De identificatie van de versie/revisie van dit model-element in het gehanteerde versiebeheersysteem. |  | Tagged value |
| <span class="red">Web locatie</span> | 0..1 | Url van de locatie waar het externe package te vinden is. |  | Tagged value |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
<!-- | <span class="red">Ref-release</span> | 0..1 | ??? |  | Tagged value |
| <span class="red">Ref-version</span> | 0..1 | ??? |  | Tagged value | -->

#### Metagegevens voor «Externe koppeling»

Externe koppeling packages hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | Notes |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| Unidirectioneel | 1 | Algemeen metagegeven. |  | Direction van de betreffende assiciation (van source naar target) |
| Relatie eigenaar | 1 | Algemeen metagegeven. | /source: related Element bij Relationship Element | Source |
| Relatie doel | 1 | Algemeen metagegeven. | /target: related Element bij Relationship Element | Target |
| Aggregatietype | 1 | Algemeen metagegeven. | AggregationKind bij metaclass Property | Aggregation van de source role met waarde composite of shared |
| Kardinaliteit | 1 | Algemeen metagegeven | lowerValue en upperValue van de metaclass MultiplicityElement | Multiplicity van de target role |
| Kardinaliteit relatie bron | 1 | Algemeen metagegeven | lowerValue en upperValue van de metaclass MultiplicityElement | /source	Multiplicity van de source role |
| Indicatie materiële historie | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | Tagged value |
| Indicatie formele historie | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | Tagged value |
| <span class="grey">Authentiek</span> | - | - | - | - |
| <span class="red">Indicatie authentiek</span> | 0..1 | Aanduiding of het een authentiek gegeven betreft. |  | Tagged value |
| <span class="grey">Indicatie afleidbaar</span> | - | - | - | - |
| <span class="grey">Mogelijk geen waarde</span> | - | - | - | - |
| <span class="grey">verwijst naar relatiedoel | 0..* | Binding aan een entiteittype | /target: related Element bij Relationship Element = UML-Class | association target = Class |

#### Metagegevens voor «Gegevensgroep»

Gegevensgroep classes hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="red">Indicatie in onderzoek</span> | 0..1 | De indicatie of te bevragen is dat er twijfel is of is geweest aan de juistheid van de attribuutwaarde en dat een onderzoek wordt of is uitgevoerd naar de juistheid van de attribuutwaarde. |  | Tagged value |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | Notes |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| <span class="grey">Authentiek</span> | - | - | - | - |
| <span class="red">Indicatie authentiek</span> | 0..1 | Aanduiding of het een authentiek gegeven (attribuutsoort) betreft. |  | Tagged value |
| Indicatie formele historie | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | Tagged value |
| Indicatie materiële historie | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | Tagged value |
| Kardinaliteit | 1 | Algemeen metagegeven | lowerValue en upperValue van de --metaclass Multiplicity | Element	Multiplicity |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. | Tagged value |
| heeft groep | 1 | Binding aan een gegevensgroeptype | owned element = UML-Class | type = Class |

#### Metagegevens voor «Groep»

Groepen hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | Notes |
| <span class="red">Groepnaam</span> | 0..1 | Voorziening om een groep aangepaste naam te kunnen geven. | Tagged value |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| <span class="red">Indicatie formele historie</span> | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | Tagged value |
| <span class="red">Indicatie materiële historie</span> | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | Tagged value |
| <span class="red">Mogelijk geen waarde</span> | 0..1 | Indicatie waarmee wordt aangegeven dat het gegeven ook geen waarde kan hebben. |  | Tagged value |
| <span class="red">Regels</span> | 0..1 | Beschrijving van de niet in andere tagged values vast te leggen regels waaraan het element moet voldoen. |  | Tagged value |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| heeft attribuut | 0..* | Binding aan een attribuutsoort. | owned element = UML-property | attribute |
| heeft gegevensgroep | 0..* | Binding aan een gegevensgroep | owned element = UML-property | attribute |
| heeft relatie | 0..* | Binding aan een relatiesoort of relatieklasse. | owned element = UML-Relationship | association |
| heeft externe koppeling | 0..* | Binding aan een externe koppeling. | owned element = UML-Relationship | association |
| verwijst naar supertype | 0..* | Binding aan een generalisatie (naar een ander gegevensgroeptype). | owned element = UML-Relationship | association |

#### Metagegevens voor «Primitief datatype»

Primitieve datatypes hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | Notes |
| Formeel patroon | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. |  | Tagged value |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| <span class="red">Maximum waarde (inclusief)</span> | 0..1 | De maximale waarde (inclusief) dat een attribuut mag hebben. |  | Tagged value |
| Lengte | 0..1 | De maximale lengte die een attribuut kan hebben. |  | Tagged value |
| <span class="red">Minimum lengte</span> | 0..1 | De minimale lengte die een attribuut moet hebben. | Tagged value |
| <span class="red">Minimum waarde (inclusief)</span> | 0..1 | De minimale waarde (inclusief) dat een attribuut moet hebben |  | Tagged value |
| Patroon | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | Tagged value |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |

#### Metagegevens voor «Relatie»

De Relatie associaties hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | Notes |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| <span class="grey">Authentiek</span> | - | - | - | - |
| Identificerend | 0..1 | Algemeen metagegeven | isID bij de metaclass Property | isId |
| <span class="red">Indicatie authentiek</span> | 0..1 | Aanduiding of het een authentiek gegeven (attribuutsoort) betreft. |  | Tagged value |
| <span class="red">Indicatie in onderzoek</span> | 0..1 | De indicatie of te bevragen is dat er twijfel is of is geweest aan de juistheid van de attribuutwaarde en dat een onderzoek wordt of is uitgevoerd naar de juistheid van de attribuutwaarde. |  | Tagged value |
| Indicatie formele historie | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | Tagged value |
| Indicatie materiële historie | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | Tagged value |
| Regels | 0..1 | Beschrijving van de niet in andere tagged values vast te leggen regels waaraan het element moet voldoen. |  | Tagged value |
| <span class="red">Target role in meervoud</span> | 0..1 | Voorziening om de target role een meervoudsnaam te kunnen geven. Deze wordt gebruikt als propertynaam van een relatie in een yaml bestand. |  | Tagged value |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| Unidirectioneel | 1 | Algemeen metagegeven. |  | Direction van de betreffende assiciation (van source naar target) |
| Relatie eigenaar | 1 | Algemeen metagegeven. | /source: related Element bij Relationship Element | Source |
| Relatie doel | 1 | Algemeen metagegeven. | /target: related Element bij Relationship Element | Target |
| Aggregatietype | 1 | Algemeen metagegeven. | AggregationKind bij metaclass Property | Aggregation van de source role met waarde composite of shared |
| Kardinaliteit | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | /target	Multiplicity van de target role |
| Kardinaliteit relatie bron | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | /source	Multiplicity van de source role |
| Indicatie afleidbaar | 1 | Algemeen metagegeven. | isDerived bij UML metaclass Assocation | isDerived |
| verwijst naar relatiedoel | 0..* | Binding aan een objecttype. | /target: related Element bij Relationship Element = UML-Class | association target = Class |

#### Metagegevens voor «Relatie-entiteit»

De Relatie-entiteit classes hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct.	Body van de metaclass Comment	Notes |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| Unidirectioneel | 1 | Algemeen metagegeven. |  | Direction van de betreffende assiciation (van source naar target) |
| Relatie eigenaar | 1 | Algemeen metagegeven. | /source: related Element bij Relationship Element | Source
| Relatie doel | 1 | Algemeen metagegeven. | /target: related Element bij Relationship Element | Target |
| Aggregatietype | 1 | Algemeen metagegeven. | AggregationKind bij metaclass Property | Aggregation van de source role met waarde composite of shared |
| Kardinaliteit | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | /target	Multiplicity van de target role |
| Kardinaliteit relatie bron | 1 | Algemeen metagegeven. | lowerValue en upperValue van de metaclass MultiplicityElement | /source	Multiplicity van de source role |
| Indicatie afleidbaar | 1 | Algemeen metagegeven. | isDerived bij UML metaclass Assocation | isDerived |
| Mogelijk geen waarde | 0..1 | Indicatie waarmee wordt aangegeven dat het gegeven ook geen waarde kan hebben. |  | Tagged value |
| <span class="grey">Authentiek</span> | - | - | - | - |
| Indicatie authentiek | 0..1 | Aanduiding of het een authentiek gegeven (attribuutsoort) betreft. |  | Tagged value |
| Indicatie formele historie | 0..1 | Voorziening waarmee aangegeven kan worden of formele historie van toepassing is op de constructie. |  | Tagged value |
| Indicatie materiële historie | 0..1 | Voorziening waarmee aangegeven kan worden of materiële historie van toepassing is op de constructie. |  | Tagged value |
| heeft attribute | 0..* | Binding aan een attribuutsoort | owned element = UML-property | attribute |
| verwijst naar relatiedoel | 0..* | Binding aan een objecttype. | /target: related Element bij Relationship Element = UML-Class | association target = Class |

#### Metagegevens voor «Tabel Element»

Tabel elementen hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | Notes |
| Formeel patroon | 0..1 | Formele notatie in de vorm van een reguliere expressie van het gegevenspatroon van een element. | Tagged value |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| Identificerend | 0..1 | Algemeen metagegeven | isID bij de metaclass Property | isID |
| Kardinaliteit | 1 | Algemeen metagegeven | lowerValue en upperValue van de --metaclass Multiplicity | Element	Multiplicity |		
| <span class="grey">Lengte</span> | - | - | - | - |
| Patroon | 0..1 | Beschrijving van het gegevenspatroon van een element. Dit kan de basis zijn voor een reguliere expressie. |  | Tagged value |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| heeft datatype | 1 | Binding aan een datatype. | datatype = UML-datatype | type = datatype |

#### Metagegevens voor «Tabel-entiteit»

Tabel-entiteit classes hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | Notes |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| <span class="grey">Locatie</span> | - | - | - | - |
| Web locatie | 0..1 | Url van de locatie waar de tabel is opgeslagen of geraadpleegd kan worden. |  | Tagged value |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| bevat referentie element | 1..* | Binding aan een referentie element. | owned element = UML-property | attribute |
| verwijst naar supertype | 0..* | Binding aan een generalisatie (naar een andere referentie lijst). | owned element = UML-Relationship | association |

#### Metagegevens voor «Union»

Union datatypes hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="grey">Begrip</span> | - | - | - | - |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct. | Body van de metaclass Comment | Notes |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| heeft datatypekeuze | 0..* | Binding van een datatype, in UML via een additionale UML-property met stereotype keuze | owned element = UML-property en deze heeft en datatype | type |
| heeft attribuutkeuze | 0..* | Binding aan een attribuutsoort. | owned element = UML-Property | attribute |
| heeft relatiedoelkeuze | 0..* | Binding aan een relatiesoort. | owned element = UML-Relationship | association |
 
#### Metagegevens voor «View»

View packages hebben de volgende aspecten gespecificeerd:

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Naam | 1 | Algemeen metagegeven. Deze is, indien mogelijk, analoog aan de naamgeving in het externe schema waar de view over gaat, eventueel met een prefix. | name van de metaclass Named element | Name |
| <span class="grey">Alias</span> | - | - | - | - |
| <span class="red">Afkorting</span> | 0..1 | Afkorting van dit model. Deze afkorting wordt o.a. gebruikt waar informatie over het model wordt gepubliceerd.	 |  | Tagged value |
| <span class="red">Data locatie</span> | 1 | De locatie waar informatie over de gegevens van een construct te vinden zijn. Wanneer het een external of view package betreft: De verwijzing naar de locatie van het bijbehorende informatiemodel waar dit package een representatie van is. In alle andere gevallen moet het een waardenlijst betreffen. Het gaat dan om de verwijzing naar de plek waar de waarden beschikbaar worden gesteld. De verwijzing heeft de vorm van een URI conform een gekozen URI strategie. |  | Tagged value |
| <span class="grey">Datum opname</span> | - | - | - | - |
| Definitie | 0..1 | De beschrijving van de betekenis van de construct zoals gespecificeerd in de catalogus van de desbetreffende (basis)registratie of informatiemodel. | Body van de metaclass Comment | Notes |
| <span class="grey">Herkomst</span> | - | - | - | - |
| <span class="grey">Herkomst definitie</span> | - | - | - | - |
| <span class="grey">Locatie</span> | - | - | - | - |
| Toelichting | 0..1 | Aanvullende beschrijving van het construct met de bedoeling dat te verduidelijken. |  | Tagged value |
| <span class="red">Versie ID</span> | 0..1 | De identificatie van de versie/revisie van dit model in het gehanteerde versiebeheersysteem. |  | Tagged value |
| <span class="red">Release</span> | 1 | Datum (in het format yyyymmdd) waarop begonnen is met het realiseren van de betreffende versie van de View. Deze moet gelijk zijn aan of van recenter datum zijn dan de taggedvalue met dezelfde naam op «Basismodel». De releasedatum wordt mede gebruikt om de View uniek te identificeren in Imvertor. |  | Tagged value |
<!--| <span class="red">Ref-release</span> | 0..1 | ??? |  | Tagged value |
| <span class="red">Ref-version</span> | 0..1 | ??? |  | Tagged value | -->
