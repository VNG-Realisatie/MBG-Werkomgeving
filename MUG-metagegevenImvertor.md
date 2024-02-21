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
  <dfn data-lt="objecten">Supplier-release</dfn>Waarde van het metadatgegeven ‘release’ van het model waar het UGM model van is afgeleid.
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

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Supplier-name | 0..1 | Naam van het model waar het UGM model van is afgeleid. |  | Tagged value |
| Supplier-project | 0..1 | Projecttype van het model waar het UGM model van is afgeleid. |  | Tagged value |
| Supplier-release | 0..1 | Waarde van het metadatgegeven ‘release’ van het model waar het UGM model van is afgeleid. |  | Tagged value |
| Is afgeleid | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | Tagged value |

#### Metagegevens voor «Complex datatype»

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Is afgeleid | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | Tagged value |

#### Metagegevens voor «Groep»

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Is afgeleid | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | Tagged value |

#### Metagegevens voor «Primitief datatype»

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Is afgeleid | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | Tagged value |

#### Metagegevens voor «Relatie»

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Is afgeleid | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | Tagged value |

#### Metagegevens voor «Relatie-entiteit»

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Is afgeleid | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | Tagged value |

#### Metagegevens voor «Tabel Element»

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Is afgeleid | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | Tagged value |

#### Metagegevens voor «Tabel-entiteit»

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Is afgeleid | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | Tagged value |

#### Metagegevens voor «Union»

| Aspect | Kardinaliteit | Toelichting | Metaclass UML 2.5 | In EA |
| --- | --- | --- | --- | --- |
| Is afgeleid | 0..1 | Geeft aan of de constructie al dan niet is afgeleid van een construct in een ‘supplier model’. |  | Tagged value |
