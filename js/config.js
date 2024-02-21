let respecConfig = {
//  useLogo: true,
//  useLabel: true,
//  license: "eupl",
  shortName: "mbg",

  // Zie de globale property 'localizationStrings/nl' voor de lijst met toegestane specificatie-types
  specType: "ST",
  
  // Zie de globale property 'localizationStrings/nl' voor de lijst met toegestane specificatie-statussen
  specStatus: "CV",
  publishDate: "2024-02-20",
  publishVersion: "0.9.0",
  
  // Zie de globale property 'localizationStrings/nl' voor de lijst met toegestane maturities
//  previousMaturity: "IG",
//  previousPublishDate: "2022-06-24",
//  previousPublishVersion: "0.0.4",
  
  title: "MBG - Metamodel BerichtstructuurGegevens",
//  subtitle: "",
  authors:
    [
      {
        name: "Robert Melskens",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      }
    ],
  editors:
    [
      {
        name: "Robert Melskens",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      },
      {
        name: "Johan Boer",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      }
    ],
  github: "https://github.com/VNG-Realisatie/MBG-Werkomgeving",

//  maxTocLevel: 2,
  
  // Creëer PDF en link deze aan de file in de header van het html document (optioneel). Het is (nog) niet mogelijk hier een globale property van te maken:
  alternateFormats: [
      {
          label: "pdf",
          uri: "MBG.pdf",
      },
    ],
  localBiblio: {
        "MIM": {
           "href": "https://docs.geostandaarden.nl/mim/def-st-mim-20220217/",
           "publisher": "Geonovum",
           "title": "MIM - Metamodel Informatie Modellering",
            date: "17 Februari 2022",
            rawDate: "2022"
        },
        "OMG": {
            title: "Object Management Group Unified Modeling Language TM",
            href: "http://www.omg.org/spec/UML/2.5",
            version: "2.5",
            status: "BG-FINAL",
            publisher: "Object Management Group (OMG)",
        },
        "UML": {
            title: "Unified Modeling Language (UML).",
            href: "http://uml.org",
        },
    },
};

