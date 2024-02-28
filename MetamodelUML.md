# Metamodel in UML

## Structuur metamodel in UML

Dit hoofdstuk beschrijft hoe je een BSM kan maken in UML, oftewel hoe de modelelementen uit het hoofdstuk Algemeen worden uitgedrukt in UML.

De eerste paragraaf bevat diagrammen, in UML. Elk diagram geeft een aantal modelelementen weer. 
<!--Het geheel van diagrammen, in samenhang, is opgenomen in de bijlage Template naamgeving conventies. -->

Uitgangspunten voor het metamodel in UML zijn:

*	UML 2.5 vormt de basis voor de conceptuele beschrijving.
*	Er wordt gebruik gemaakt van de bestaande UML-modelelementen conform UML van OMG. OMG noemt dit een UML metaclass. Een voorbeeld hiervan is
UML-Class.
*	Daar waar (semantisch) nodig worden extensiemechanismen toegepast met behoud van de betekenis van de UML-metaclasses. Het modelelement is dan
een MBG metaclass. Hoe deze zich verhouden tot UML is weergegeven in bijlage A.1.
*	Modelelementen hebben één stereotype. Daarnaast hebben twee verschillende stereotypen nooit dezelfde betekenis. Stereotypes worden toegepast
als er een verbijzondering van een UML constructie nodig is met behoud van de betekenis van de UML-metaclass.

Elk modelelement heeft een MIM metaclass. Deze wordt in UML in een BSM gemodelleerd als een extensie van een Metaclass van UML 2.5 en een bijbehorende 
stereotype.

**VOORBEELD**

Het MBG modelelement Padtype wordt gemodelleerd als een UML-Class met stereotype «Padtype».

| **MIM metaclass** | **Stereotype** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- |
| **Padtype** | «Padtype» | (UML) Class | _Class_ |

De meest linkse kolom bevat het MBG modelelement, zoals bedoeld in het hoofdstuk [Metamodel Algemeen](#metamodel-algemeen). De 2e en 3e kolom bevatten 
de uitdrukking van het MBG in UML, versie 2.5. De 2e en 5e kolom bevatten de uitdrukking van het MIM in Sparx Enterprise Architect. Deze gebruikt Class 
(i.p.v. UML-Class). Deze UML tool is (uiteraard) geen onderdeel van de MBG specificatie. Het is zeker niet verplicht om deze te gebruiken, u kunt uw 
eigen tool gebruiken. Deze kolom staat erbij om illustratief aan te geven dat het soms nodig kan zijn om, afhankelijk van de tool, net iets specifieker 
aan te geven hoe het MBG in de tool exact uitgedrukt wordt.

Alle modelelementen hebben een UML-metaclass (UML 2.5) als basis, deze is aangegeven als ‘blauw gekleurde’ metaclass.

### Kern

<figure id="MBGKernzonderdetailsenMUG">
  <img src="media/MBG Kern zonder details en MUG.jpg" alt="" />
  <figcaption>Diagram: Kern zonder Metagegevens</figcaption>
</figure>

| **MIM metaclass** | **Stereotype** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- |
| **Getberichttype** | «Getberichttype» | (UML) Class | _Class_ |
| **Postberichttype** | «Postberichttype» | (UML) Class | _Class_ |
| **Putberichttype** | «Putberichttype» | (UML) Class | _Class_ |
| **Patchberichttype** | «Patchberichttype» | (UML) Class | _Class_ |
| **Deleteberichttype** | «Deleteberichttype» | (UML) Class | _Class_ |
| **EntiteitRelatie** | «EntiteitRelatie» | (UML) Association | _Association_ |
| **PadRelatie** | «PadRelatie» | (UML) Association | _Association_ |
| **Padtype** | «Padtype» | (UML) Class | _Class_ |
| **Generalisatie** | «Generalisatie» | (UML) Association | _Association_ |
| **Interface** | «Interface» | (UML) Class | _Class_ |

### Groepering
 
<figure id="MBGPackageszonderdetails2">
  <img src="media/MBG Packages zonder details 2.jpg" alt="" />
  <figcaption>Diagram: Groepering</figcaption>
</figure>

| **MIM metaclass** | **Stereotype** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- |
| **Koppelvlak** | «Koppelvlak» | (UML) Package | _Package_ |
| **Domein** | «Domein» | (UML) Package | _Package_ |
| **Bericht** | «Bericht» | (UML) Package | _Package_ |

## Nadere specificatie metagegevens in UML

Deze paragraaf is een aanvulling op de paragraaf 'Specificatie metagegevens' in het hoofdstuk [Metamodel Algemeen](#metamodel-algemeen).

<aside class='note' title="">
In de hierna volgende paragrafen worden de metagegevens per modelelement gespecificeerd in tabellen. Per metagegeven zijn de volgende onderdelen gespecificeerd:

**Aspect**: Het benoemde metagegeven.

**Kardinaliteit**: Aantal maal dat een metagegeven opgenomen kan worden bij dit modelelement.

**Toelichting**: Nadere uitleg over het metagegeven.

**In UML 2.5**: De naam waarmee het metagegeven in UML2.5 is benoemd. Het betreft veelal overerving van een metagegeven van een UML metaclass die niet in dit document is benoemd.

**In EA**: Aanduiding hoe het metagegeven in Sparx Enterprise Architect (EA) is aangegeven.
</aside>

### Modellering metagegevens voor objecten en attributen in UML

#### Specificatie voor «Berichttype»
Alle classes die overerven van de Berichttype class worden naar de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Naam** | 1 | Algemeen metagegeven.<br/>Heeft altijd de waarde ‘request’, ‘requestbody’ of ‘response’ | name van de metaclass Named element | _Name_ |
| **Definitie** | 0..1 | Algemeen metagegeven. | Body van de metaclass Comment | _Notes_ |
| heeft **entiteitrelatie** | 1..2 | Binding aan een EntiteitRelatie. | owned element = UML-Relationship | _association_ |
| heeft **padrelatie** | 1 | Binding aan een PadRelatie. | owned element = UML-Relationship | _association_ |
| **berichtcode** | 1 | Uniek id voor het typeren van berichten. |  | _Tagged value_ |
| **tag** | 0..1 | Voorziening ter groepering van endpoints. |  | _Tagged value_ |
| **servicename** | 0..1 | Technisch operationid	 |  | _Tagged value_ |
| verwijst naar **supertype** | 0..1 | Binding aan een generalisatie (naar een Interface). | owned element = UML-Relationship | _association_	|

#### Specificatie voor «Getberichttype»

De Getberichttype classes wordt naast de aspecten in de voorgaande tabel ook nog naar de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Grouping** | 0..1 | Indicatie waarmee wordt aangegeven of de response meerdere resultaten kan teruggeven (collection) of slechts 1 resultaat (resource). |  | _Tagged value_ |
| **Page** | 0..1 | Indicatie waarmee wordt aangegeven of de response geschikt moet zijn voor hal+json pagination. Natuurlijk alleen van toepassing als de serialisatie ook hal+json is. |  | _Tagged value_ |
| **Sort** | 0..1 | Indicatie waarmee wordt aangegeven of de request parameter 'Sort' moet worden opgenomen in het bericht. |  | _Tagged value_ |

#### Specificatie voor «Padtype»
De Padtype classes worden naar de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| heeft **padrelatie** | 1 | Binding aan een PadRelatie. | owned element = UML-Relationship | _association_ |
| **custom_path_facet** | 0..1 | Het deel van de messagepath dat niet uit het model afgeleid kan worden. |  | _Tagged value_ |

#### Specificatie voor «Interface»

Interface classes worden naar de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |

### Specificatie metagegevens voor relaties

#### Specificatie voor «EntiteitRelatie»

De EntiteitRelatie associaties worden naar de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| **Positie** | 0..1 | Indien het voor de serialisatie van belang is kan hiermee de positie van het modelelement in de serialisatie gestuurd worden. |  | _Tagged value_ |

#### Specificatie voor «PadRelatie»

Voor PadRelatie associaties worden naar de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Naam** | 1 | Algemeen metagegeven.<br/>Heeft altijd de waarde ‘pad’. | name van de metaclass Named element | _Name_ |

#### Specificatie voor «Generalisatie» tussen berichttypes en interfaces

De generalisaties worden naar het volgende aspect gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Subtype** | 1 | De generalisatie relatie kent twee kanten, de bron kant (source) van de relatie en de doel kant (target) van de relatie. De bron kant van deze generalisatie relatie specificeert een berichttype die een subtype/specialisatie is van het via deze generalisatie relatie aangegeven supertype (zie verwijst naar supertype). Kortweg, het subtype is een specialisatie van het supertype. Het berichttype dat het subtype is van deze generalisatie is verbonden met deze generalisatie. | /source: related Element bij Relationship Element | _Source_ |
| verwijst naar **supertype** | 1 | Binding van deze generalisatie aan een interface. De generalisatie relatie kent twee kanten, de bron kant (source) van de relatie en de doel kant (target) van de relatie. De doel kant van deze generalisatie relatie specificeert een interface die het supertype de generalisatie is van het via deze generalisatie aangegeven subtype. Kortweg, het supertype is een generalisatie van het subtype. | /target: related Element bij Relationship Element = UML-Class | _Target_ |

### Specificatie metagegevens voor packages

#### Specificatie voor «Koppelvlak»

Koppelvlak packages worden naar de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
| **Definitie** | 0..1 | Algemeen metagegeven. | Body van de metaclass Comment | _Notes_ |
| **beheerder-email** | 0..1 | Het e-Mailadres van de persoon of organisatie die het koppelvlak beheert. |  | _Tagged value_ |
| **Koppelvlak-naam** | 0..1 | Volledige naam van het koppelvlak |  | _Tagged value_ |
| **project_url** | 0..1 | Url van de bij het koppelvlak horende project repository |  | _Tagged value_ |
| **release** | 1 | Datum waarop begonnen is met het realiseren van de betreffende versie van het koppelvlak. |  | _Tagged value_ |
| **Serialisatie** | 1 | Definieert de vorm waarnaar het koppelvlak geserialiseerd moet worden. |  | _Tagged value_ |

#### Specificatie voor «Domein»

Domein packages worden naar de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |
 
#### Specificatie voor «Bericht»

Bericht packages worden naar de volgende aspecten gespecificeerd:

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Naam** | 1 | Algemeen metagegeven. | name van de metaclass Named element | _Name_ |

## UML Tooling

### MBG-toolbox

Er is door de MBG beheerder een metamodel profiel gemaakt voor Sparx Enterprise Architect, dat gebruikt kan worden bij het modelleren van een informatiemodel. Dit profiel kan je inladen en daarna kan je kiezen uit de metamodel elementen. Het profiel is faciliterend en zorgt dat (de meeste) modelelementen van een BSM automatisch voldoen aan dit metamodel. Dit profiel is te vinden op [MBG profiel - toolbox voor EA](https://vng-realisatie.github.io/Model-Driven-Design-Documentatie/bestanden/VNGR MBG+Grouping NL-1.0-1.65.2.ea-toolbox.xml).

### Extensie op MBG-toolbox

Het is niet vereist om dit profiel te gebruiken en het is ook toegestaan om het profiel naar de behoefte van de eigen organisatie uit te breiden. Het is echter niet toegestaan het profiel te wijzigen, dan wordt niet meer aan MBG voldaan. De reden hiervoor is dat een dergelijk aanpassing niet beheerd kan worden door de MBG-beheerder en er ambiguïteit zal ontstaan bij de interpretatie van het model.

### Imvertor

Er is een tool Imvertor, die kan controleren of een BSM voldoet aan dit metamodel en zo niet, wat de reden daarvan is. Deze tool is open source en is te vinden op www.imvertor.org.
