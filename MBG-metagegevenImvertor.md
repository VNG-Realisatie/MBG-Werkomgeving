## Specifieke MBG metagegevens voor Imvertor

In dit hoofdstuk worden specifiek voor Imvertor gedefinieerde metagegevens beschreven. Deze worden daartoe toegevoegd aan het MBG profiel voor Enterprise Architect.

### Specificatie metagegevens 

#### Metagegeven: Supplier-name

<aside class="definition">
  <dfn data-lt="objecten">Supplier-name</dfn>Naam van het model waar het BSM model van is afgeleid.
</aside>

_Toelichting:_

Een BSM kan worden afgeleid van maximaal één UGM model. Dit metadatagegeven bevat de naam van dat UGM model. Als dit metagegeven niet wordt gedefinieerd of als het geen waarde heeft dan moet het metagegeven ‘Is afgeleid’ de waarde ‘Nee’ hebben.
Als dit metagegeven van een waarde is voorzien moeten de metagegevens ‘Supplier-project’ en ‘Supplier-release’ ook van een waarde worden voorzien. Gezamenlijk moeten deze een met Imvertor verwerkt model identificeren.

_Toepassing:_ Koppelvlak (optioneel)

#### Metagegeven: Supplier-project

<aside class="definition">
  <dfn data-lt="objecten">Supplier-project</dfn>DProjecttype van het model waar het BSM model van is afgeleid.
</aside>

_Toelichting:_

Een BSM kan worden afgeleid van maximaal één UGM model. Dit metadatagegeven krijgt daarom normaliter de waarde ‘UGM’. Als dit metagegeven niet wordt gedefinieerd of als het geen waarde heeft dan moet het metagegeven ‘Is afgeleid’ de waarde ‘Nee’ hebben.
Als dit metagegeven van een waarde is voorzien moeten de metagegevens ‘Supplier-name’ en ‘Supplier-release’ ook van een waarde worden voorzien. Gezamenlijk moeten deze een met Imvertor verwerkt model identificeren.

_Toepassing:_ Koppelvlak (optioneel)

#### Metagegeven: Supplier-release

<aside class="definition">
  <dfn data-lt="objecten">Supplier-release</dfn>Waarde van het metadatgegeven ‘release’ van het model waar het BSM model van is afgeleid.
</aside>

_Toelichting:_

Een BSM kan worden afgeleid van maximaal één UGM model. Dit metadatagegeven krijgt daarom normaliter de waarde van het metagegeven ‘release’ van dat ‘UGM’ model.De datum wordt uitgedrukt in het volgende formaat ‘jjjjmmdd’. Als dit metagegeven niet wordt gedefinieerd of als het geen waarde heeft dan moet het metagegeven ‘Is afgeleid’ de waarde ‘Nee’ hebben.

Als dit metagegeven van een waarde is voorzien moeten de metagegevens ‘Supplier-name’ en ‘Supplier-project’ ook van een waarde worden voorzien. Gezamenlijk moeten deze een met Imvertor verwerkt model identificeren.

_Bijvoorbeeld:_ 20230404

_Toepassing:_ Koppelvlak (optioneel)

#### Metagegeven: Is afgeleid

<aside class="definition">
  <dfn data-lt="objecten">Is afgeleid</dfn>Metagegeven waarmee wordt aangegeven of er een

1.	model is waarvan het Berichtstructuurmodel is afgeleid;
2.	modelelement in een ander model is waarvan het modelelement in het Berichtstructuurmodel is afgeleid.
</aside>

_Toelichting op 1:_

Een Berichtstructuurmodel kan van één UGM worden afgeleid. Indien dit niet het geval is dan heeft dit metagegeven de waarde ‘Nee’. Indien dit de waarde ‘Ja’ heeft, leeg is of niet aanwezig is dan dienen de metagegevens ‘Supplier-name’, ‘Supplier-project’ en ‘Supplier-release’ een waarde te hebben.

_Toepassing:_ Koppelvlak (optioneel)

_Toelichting op 2:_

De MBG modelelementen worden zelf nooit afgeleid van elementen uit een UGM. Dit metagegeven heeft daarom altijd de waarde ‘Nee’.

_Toepassing:_ alle modelelementen uitgezonderd Koppelvlak en Interface (verplicht).

#### Metagegeven: toelichting opnemen vanaf

<aside class="definition">
  <dfn data-lt="objecten">toelichting opnemen vanaf</dfn>Het hoogste modelniveau op basis waarvan de documentatie wordt gegenereerd.
</aside>

_Toelichting:_

Een BSM kan worden afgeleid van een UGM en via dat UGM van een SIM. Beide modelniveau’s evenals een BSM zelf bevatten documentatie. Bij het genereren van specificaties kunnen de documentatie properties gevuld worden met de documentatie vanuit alle drie de modellen. Dit metagegeven bepaald welke niveaus daarin meegenomen worden.

Bij de waarde ‘SIM’ wordt de documentatie betrokken van alle modelniveau’s. Als alleen modellen op het niveau van UGM en BSM moeten worden meegenomen bij het genereren van documentatie krijgt dit metagegeven de waarde ‘UGM’ en als alleen documentatie in het BSM moet worden meegenomen de waarde ‘BSM’.

Als dit metagegeven niet wordt gedefinieerd of als het leeg is dan wordt er vanuit gegaan dat het de waarde ‘SIM’ heeft.

_Toepassing:_ Koppelvlak (optioneel)

### Nadere specificatie metagegevens in UML

#### Specificatie voor «Berichttype»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | _Tagged value_ |

#### Specificatie voor «Padtype»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | _Tagged value_ |

#### Specificatie voor « EntiteitRelatie »

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | _Tagged value_ |

#### Specificatie voor «PadRelatie»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | _Tagged value_ |

#### Specificatie voor «Koppelvlak»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Supplier-name** | 0..1 | Naam van het model waar het BSM model van is afgeleid. |  | _Tagged value_ |
| **Supplier-project** | 0..1 | Projecttype van het model waar het BSM model van is afgeleid. |  | _Tagged value_ |
| **Supplier-release** | 0..1 | Waarde van het metadatgegeven ‘release’ van het model waar het BSM model van is afgeleid. |  | _Tagged value_ |
| **toelichting opnemen vanaf** | 0..1 | Het hoogste modelniveau op basis waarvan de documentatie wordt gegenereerd. |  | _Tagged value_ |
| **Is afgeleid** | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | _Tagged value_ |
