## Specifieke MUG metagegevens voor Imvertor

In dit hoofdstuk worden specifiek voor Imvertor gedefinieerde metagegevens beschreven. Deze worden daartoe toegevoegd aan het MUG profiel voor Enterprise Architect.

### Specificatie metagegevens 

#### Metagegeven: Supplier-name

<aside class="definition">
  <dfn data-lt="objecten">Supplier-name</dfn>Naam van het model waar het UGM model van is afgeleid.
</aside>

_Toelichting:_

Een UGM kan worden afgeleid van maximaal één SIM model. Dit metadatagegeven bevat de naam van dat SIM model. Als dit metagegeven niet wordt gedefinieerd of als het geen waarde heeft dan moet het metagegeven ‘Is afgeleid’ de waarde ‘Nee’ hebben.

Als dit metagegeven van een waarde is voorzien moeten de metagegevens ‘Supplier-project’ en ‘Supplier-release’ ook van een waarde worden voorzien. Gezamenlijk moeten deze een met Imvertor verwerkt model identificeren.

_Toepassing:_ Basismodel (optioneel)

#### Metagegeven: Supplier-project

<aside class="definition">
  <dfn data-lt="objecten">Supplier-project</dfn>Projecttype van het model waar het UGM model van is afgeleid.
</aside>

_Toelichting:_

Een UGM kan worden afgeleid van maximaal één SIM model. Dit metadatagegeven krijgt daarom normaliter de waarde ‘SIM’. Als dit metagegeven niet wordt gedefinieerd of als het geen waarde heeft dan moet het metagegeven ‘Is afgeleid’ de waarde ‘Nee’ hebben.

Als dit metagegeven van een waarde is voorzien moeten de metagegevens ‘Supplier-name’ en ‘Supplier-release’ ook van een waarde worden voorzien. Gezamenlijk moeten deze een met Imvertor verwerkt model identificeren.

_Toepassing:_ Basismodel (optioneel)

#### Metagegeven: Supplier-release

<aside class="definition">
  <dfn data-lt="objecten">Supplier-release</dfn>Waarde van het metadatagegeven ‘release’ van het model waar het UGM model van is afgeleid.
</aside>

_Toelichting:_

Een UGM kan worden afgeleid van maximaal één SIM model. Dit metadatagegeven krijgt daarom normaliter de waarde van het metagegeven ‘release’ van dat ‘SIM’ model.De datum wordt uitgedrukt in het volgende formaat ‘jjjjmmdd’. Als dit metagegeven niet wordt gedefinieerd of als het geen waarde heeft dan moet het metagegeven ‘Is afgeleid’ de waarde ‘Nee’ hebben.

Als dit metagegeven van een waarde is voorzien moeten de metagegevens ‘Supplier-name’ en ‘Supplier-project’ ook van een waarde worden voorzien. Gezamenlijk moeten deze een met Imvertor verwerkt model identificeren.

_Bijvoorbeeld:_ 20230404

_Toepassing:_ Basismodel (optioneel)

#### Metagegeven: Is afgeleid

<aside class="definition">
  <dfn data-lt="objecten">Is afgeleid</dfn>Metagegeven waarmee wordt aangegeven of er een
  
1.	model is waarvan het Berichtstructuurmodel is afgeleid;
2.	modelelement in een ander model is waarvan het modelelement in het Berichtstructuurmodel is afgeleid.
</aside>

_Toelichting:_

Een UitwisselingsGegevensmodel kan van één SIM worden afgeleid. Indien dit niet het geval is dan heeft dit metagegeven de waarde ‘Nee’. Indien dit de waarde ‘Ja’ heeft, leeg is of niet aanwezig is dan dienen de metagegevens ‘Supplier-name’, ‘Supplier-project’ en ‘Supplier-release’ een waarde te hebben

Toepassing: alle modelelementen (optioneel).
 
### Metagegevens

#### Metagegevens voor «Basismodel»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Imvertor** | 0..1 | De (default) waarde 'model' voor deze property geeft aan dat het pakket een volledig model is dat kan worden verwerkt door de Imvertor-software. Deze waarde is vereist door de Imvertor add-in op Enterprise Architect. |  | _Tagged value_ |
| **Supplier-name** | 0..1 | Naam van het model waar het UGM model van is afgeleid. |  | _Tagged value_ |
| **Supplier-project** | 0..1 | Projecttype van het model waar het UGM model van is afgeleid. |  | _Tagged value_ |
| **Supplier-release** | 0..1 | Waarde van het metadatagegeven ‘release’ van het model waar het UGM model van is afgeleid. |  | _Tagged value_ |
| **Is afgeleid** | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | _Tagged value_ |

#### Metagegevens voor «Complex datatype»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | _Tagged value_ |

#### Metagegevens voor «Data element»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | _Tagged value_ |

#### Metagegevens voor «Element»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | _Tagged value_ |

#### Metagegevens voor «Entiteittype»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | _Tagged value_ |

#### Metagegevens voor «Enumeration»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | _Tagged value_ |

#### Metagegevens voor «Enum»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | _Tagged value_ |

#### Metagegevens voor «Extern»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Ref-release** | 0..1 | Waarde van het metadatagegeven ‘release’ van het model waar het Extern package naar verwijst. |  | _Tagged value_ |
| **Ref-version** | 0..1 | Waarde van het metadatagegeven ‘Version’ van het model waar het Extern package naar verwijst. |  | _Tagged value_ |
| **Is afgeleid** | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | _Tagged value_ |

#### Metagegevens voor «Gegevensgroep»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | _Tagged value_ |

#### Metagegevens voor «Groep»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | _Tagged value_ |

#### Metagegevens voor «Intern»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Interne naam** | 1 | Naam van het interne model. |  | _Tagged value_ |
| **Intern project** | 1 | Projecttype van het interne model. |  | _Tagged value_ |
| **Interne release** | 1 | Waarde van het metadatagegeven ‘release’ van het interne model. |  | _Tagged value_ |
| **Is afgeleid** | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | _Tagged value_ |

#### Metagegevens voor «Primitief datatype»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | _Tagged value_ |

#### Metagegevens voor «Relatie»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | _Tagged value_ |

#### Metagegevens voor «Relatie-entiteit»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | _Tagged value_ |

#### Metagegevens voor «Tabel Element»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | _Tagged value_ |

#### Metagegevens voor «Tabel-entiteit»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Is afgeleid** | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | _Tagged value_ |

#### Metagegevens voor «Union»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| Is afgeleid | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | Tagged value |

#### Metagegevens voor «Union element»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| Is afgeleid | 0..1 | Deze constructie is al dan niet afgeleid van een construct in een "supplier model". Wanneer je niks opgeeft wordt afleiding vastgesteld op basis van het package waarin het voorkomt. |  | Tagged value |

#### Metagegevens voor «View»

| **Aspect** | **Kardinaliteit** | **Toelichting** | **Metaclass UML 2.5** | **In EA** |
| --- | --- | --- | --- | --- |
| **Ref-release** | 0..1 | Waarde van het metadatagegeven ‘release’ van het model waar het View package naar verwijst. |  | _Tagged value_ |
| **Ref-version** | 0..1 | Waarde van het metadatagegeven ‘Version’ van het model waar het View package naar verwijst. |  | _Tagged value_ |
| **Supplier-package-name** | 0..1 | De naam van het model waar het View package naar verwijst. Deze naam wordt opgegeven als deze niet gelijk is aan de naam van het package waar deze tagged value op geplaatst is. |  | _Tagged value_ |
