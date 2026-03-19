export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      clients: "Clientes",
      contact: "Contacto",
      lang: "EN",
      servicesDropdown: [
        { label: "Fabricación", path: "/servicios/fabricacion" },
        { label: "Alquiler y Venta", path: "/servicios/alquiler" },
        { label: "Piping & Estructuras", path: "/servicios/piping" },
        { label: "Arenado y Pintura Industrial", path: "/servicios/arenado" },
      ],
    },
    hero: {
      overline: "OIL & GAS — SERVICIOS INTEGRALES",
      line1: "SOLUCIONES",
      line2: "INTEGRALES",
      line3: "OIL & GAS",
      subtitle:
        "Especializada en ofrecer soluciones integrales para la industria petrolera. Metalúrgica propia, equipos certificados y operación ininterrumpida desde 2013.",
      ctaQuote: "Contactanos",
      ctaServices: "Ver Servicios",
      since: "Desde",
      base: "Base",
      zone: "Zona",
    },
    services: {
      overline: "Unidades de Negocio",
      title: "NUESTROS SERVICIOS",
      subtitle:
        "Fabricación metalmecánica, alquiler y venta de equipos, y tratamiento superficial para la industria Oil & Gas en la Cuenca Neuquina.",
      items: [
        {
          num: "01",
          title: "FABRICACIÓN DE EQUIPOS METALÚRGICOS",
          hook: "Metalúrgica propia — Equipos a medida para Oil & Gas",
          desc: "Somos especialistas en diseñar y fabricar equipos metalmecánicos para el sector Oil & Gas, desde piletas de lodo hasta tanques y estructuras a medida, con metalúrgica propia y control de calidad interno.",
          detail: "PILETAS · CISTERNAS · TANQUES · ESTRUCTURAS · SKIDS",
          tag: "Fabricación",
          path: "/servicios/fabricacion",
        },
        {
          num: "02",
          title: "ALQUILER Y VENTA DE EQUIPOS",
          hook: "Piletas certificadas · Bombas centrífugas · Cisternas",
          desc: "Ofrecemos alquiler y venta de piletas de acumulación/agitación, bombas centrífugas y cisternas con certificación técnica y operativa para proyectos de perforación, terminación, flowback, entre otros.",
          detail: "PERFORACIÓN · TERMINACIÓN · FLOWBACK",
          tag: "Alquiler",
          path: "/servicios/alquiler",
        },
        {
          num: "03",
          title: "PIPING & ESTRUCTURAS INDUSTRIALES",
          hook: "Ingeniería propia — Estructuras, skids y piping a medida",
          desc: "Desarrollamos estructuras metálicas, skids y piping con ingeniería propia, asegurando robustez y cumplimiento de especificaciones de obra para instalaciones industriales Oil & Gas.",
          detail: "ESTRUCTURAS · SKIDS · PIPING · TRAILERS · PLATAFORMAS",
          tag: "Piping",
          path: "/servicios/piping",
        },
        {
          num: "04",
          title: "ARENADO Y PINTURA INDUSTRIAL",
          hook: "Tratamiento superficial industrial certificado",
          desc: "Arenado industrial y pintura anticorrosiva de piezas y equipos del sector Oil & Gas. Preparación y protección de superficies metálicas con calidad de industria. Servicio en planta o en campo.",
          detail: "ARENADO · PINTURA ANTICORROSIVA · ACABADO · EN PLANTA O EN CAMPO",
          tag: "Arenado",
          path: "/servicios/arenado",
        },
      ],
      learnMore: "Ver más",
    },
    stats: {
      overline: "Capacidad Operativa",
      title: "NÚMEROS QUE HABLAN",
      items: [
        { value: 2013, label: "Año de Fundación", suffix: "" },
        { value: 17, label: "Piletas Fabricadas", suffix: "+" },
        { value: 18, label: "Clientes Activos", suffix: "+" },
        { value: 3, label: "Misiones Internacionales", suffix: "" },
      ],
      intlLabel: "Presencia Internacional",
      intlMissions: "OTC Houston · Midland TX · CIPPE China",
    },
    clients: {
      overline: "La Empresa",
      title: "NUESTRA EMPRESA",
      lead: "Somos un Equipo de Profesionales especialistas comprometidos con el desarrollo industrial, social y ambiental del sector Oil & Gas. Aportamos nuestros conocimientos al crecimiento de cada empresa que comparte nuestros valores y nuestra pasión por lo que realizamos día a día.",
      misionLabel: "Misión",
      mision:
        "Como empresa de servicio integral del sector Oil & Gas, nuestro objetivo es la satisfacción del cliente de manera eficiente y eficaz, generando un impacto positivo en lo económico, social y ambiental.",
      visionLabel: "Visión",
      vision:
        "Ser líderes en el sector Oil & Gas brindando una solución integral a nivel nacional e internacional.",
    },
    cta: {
      overline: "Iniciemos",
      title: "¿LISTO PARA OPERAR?",
      subtitle:
        "Seleccioná la forma de contacto que mejor se adapte a tu operación.",
      options: [
        {
          icon: "form",
          label: "Consulta Técnica",
          desc: "Contanos tu requerimiento de equipos, capacidad o proyecto. Te respondemos con la solución más adecuada.",
          action: "Iniciar Consulta",
          href: "/contacto",
        },
        {
          icon: "pdf",
          label: "Brochure Técnico",
          desc: "Fichas de equipos, certificaciones y especificaciones técnicas en PDF descargable.",
          action: "Descargar PDF",
          href: "#brochure",
        },
        {
          icon: "phone",
          label: "Llamá / WhatsApp",
          desc: "Consulta rápida de disponibilidad y equipos. Respuesta inmediata.",
          action: "Contactar Ahora",
          href: "https://wa.me/5492993323446",
        },
        {
          icon: "visit",
          label: "Visita a Planta",
          desc: "Agenda una reunión técnica en nuestras instalaciones en el Parque Industrial Neuquén.",
          action: "Agendar Visita",
          href: "/contacto",
        },
      ],
    },
    about: {
      overline: "Quiénes Somos",
      title: "EQUIPO DE",
      titleHighlight: "ESPECIALISTAS",
      subtitle:
        "Aportamos conocimiento técnico y ejecución confiable al crecimiento de cada empresa que comparte nuestros valores y nuestra pasión por lo que realizamos día a día.",
      historyLabel: "Trayectoria",
      historyText:
        "ROLCKA opera en la Cuenca Neuquina desde 2013, especializándose en soluciones integrales para Oil & Gas con metalúrgica propia en el Parque Industrial de Neuquén. Con foco regional y expansión técnica a todo el país y el exterior en un futuro cercano.",
      missionLabel: "Misión",
      missionText:
        "Como empresa de servicio integral del Sector Oil & Gas, nuestro objetivo es la satisfacción del cliente de manera eficiente y eficaz, generando un impacto positivo en lo económico, social y ambiental.",
      visionLabel: "Visión",
      visionText:
        "Ser líderes en el sector Oil & Gas brindando una solución integral a nivel nacional e internacional.",
      valuesLabel: "Nuestros Valores",
      valuesTitle: "LO QUE NOS DEFINE",
      values: [
        {
          title: "Calidad",
          desc: "Procedimientos y soldadores certificados. Control interno en cada etapa del proceso.",
        },
        {
          title: "Rapidez",
          desc: "Operamos contra cronograma. Entregamos en tiempo y forma, sin justificaciones.",
        },
        {
          title: "Certificaciones",
          desc: "ISO 9001, 14001 y 45001 en proceso. Estanqueidad activa. Miembros del Cluster Vaca Muerta.",
        },
        {
          title: "Seguridad",
          desc: "QHSE como estándar interno, no como requerimiento externo.",
        },
        {
          title: "Soluciones Integrales",
          desc: "Alquiler, fabricación, arenado y pintura. Todo bajo un mismo techo.",
        },
      ],
      certsLabel: "Certificaciones",
      certsTitle: "NORMAS Y CERTIFICACIONES",
      certs: [
        {
          title: "ISO 9001",
          desc: "Gestión de Calidad",
          status: "En proceso de certificación",
          active: false,
        },
        {
          title: "ISO 14001",
          desc: "Gestión Ambiental",
          status: "En proceso de certificación",
          active: false,
        },
        {
          title: "ISO 45001",
          desc: "Seguridad y Salud Ocupacional",
          status: "En proceso de certificación",
          active: false,
        },
        {
          title: "Estanqueidad",
          desc: "Certificado Piletas de Acumulación",
          status: "Certificado Activo",
          active: true,
        },
        {
          title: "Cluster VM",
          desc: "Cluster Vaca Muerta",
          status: "Miembro Activo",
          active: true,
        },
      ],
      intlLabel: "Presencia Internacional",
      intlTitle: "PROYECCIÓN GLOBAL",
      intlMissions: [
        {
          event: "OTC Houston",
          desc: "Offshore Technology Conference — Houston, TX",
        },
        { event: "Midland Texas", desc: "Misión Comercial — Permian Basin" },
        {
          event: "CIPPE China",
          desc: "China Int'l Petroleum & Petrochemical Tech — Pekín",
        },
      ],
    },
    whyRolcka: {
      overline: "¿Por qué ROLCKA?",
      headlineLines: ["PLANTA PROPIA.", "DESDE 2013."],
      subtitle:
        "Planta con metalúrgica propia en el Parque Industrial de Neuquén. Más de diez años operando en la Cuenca Neuquina, con enfoque en construcción, fabricación y mantenimiento de equipos para Oil & Gas.",
      pillars: [
        {
          tag: "METALÚRGICA",
          title: "Planta Industrial Propia",
          desc: "Taller propio en el Parque Industrial de Neuquén. Fabricación, reparación y acabado sin tercerizar. Control total del proceso y la calidad.",
        },
        {
          tag: "TRAYECTORIA",
          title: "Más de 10 años en la Cuenca",
          desc: "Operando ininterrumpidamente desde 2013 en la Cuenca Neuquina. Experiencia comprobada en perforación, terminación y flowback.",
        },
        {
          tag: "INTEGRAL",
          title: "Todo Bajo un Mismo Techo",
          desc: "Alquiler, fabricación, arenado y pintura. Sin intermediarios. Sin derivaciones. Una sola empresa que resuelve.",
        },
      ],
      stats: [
        { value: 2013, label: "Fundación", suffix: "" },
        { value: 17, label: "Piletas Fabricadas", suffix: "+" },
        { value: 18, label: "Clientes Activos", suffix: "+" },
        { value: 3, label: "Misiones Internacionales", suffix: "" },
      ],
    },
    equipment: {
      overline: "Alquiler de Equipos",
      title: "EQUIPOS",
      titleHighlight: "DISPONIBLES",
      subtitle:
        "Vidriera de equipos certificados para Oil & Gas. Disponibles para alquiler en la Cuenca Neuquina. Consultanos por disponibilidad.",
      groupPiletas: "PILETAS",
      groupBombas: "BOMBAS CENTRÍFUGAS",
      groupCisternas: "CISTERNAS",
      groupTanques: "TANQUES DE AGUA",
      groupTableros: "TABLEROS ELÉCTRICOS",
      capLabel: "CAPACIDAD",
      techLabel: "TECNOLOGÍA",
      specLabel: "ESPECIFICACIONES",
      certLabel: "CERTIFICACIÓN",
      estanqueidad: "ESTANQUEIDAD",
      sipco: "SIPCO HOUSTON",
      ctaLabel: "Consultar Disponibilidad",
    },
    fabrication: {
      overline: "Fabricación & Metalmecánica",
      title: "METALÚRGICA",
      titleLine2: "PROPIA",
      subtitle:
        "Si tenés un plano, lo fabricamos. Trabajamos con estándares propios y también a medida del cliente. Soldadores y procedimientos certificados. Planta propia en el Parque Industrial Neuquén.",
      qualityLabel: "Calidad Garantizada",
      qualityDesc:
        "Soldadores certificados y procedimientos homologados para cada proceso productivo.",
      groups: [
        {
          tag: "PILETAS",
          title: "Piletas",
          desc: "Acumulación, agitación de lodo, desfogue y piletas con zaranda. Diseño estándar o a medida según las necesidades del cliente.",
          specs: ["Acumulación y agitación de lodo", "Con o sin zaranda incorporada", "Capacidades hasta 80m³", "Diseño estándar o a medida"],
        },
        {
          tag: "CISTERNAS",
          title: "Cisternas y Tanques",
          desc: "Para gasoil y agua. Distintas capacidades, fabricadas según requerimientos del cliente con certificación de estanqueidad.",
          specs: ["Para gasoil y agua potable", "Capacidad hasta 36.000 lts", "Bund de contención incluido", "Bomba y medidor incorporables"],
        },
        {
          tag: "ESTRUCTURAS",
          title: "Estructuras y Plataformas",
          desc: "Estructuras metálicas, soportes industriales y accesos seguros para trabajo en altura. Fabricación conforme a plano del cliente.",
          specs: ["Acero estructural certificado", "Plataformas y accesos en altura", "Soportes y bastidores industriales", "Fabricación conforme a plano"],
        },
        {
          tag: "PIPING",
          title: "Piping Industrial",
          desc: "Sistemas de tuberías para transporte de fluidos y lodos de perforación. Prefabricados, manifolds y conexiones para campo y planta.",
          specs: ["Transporte de fluidos y lodos", "Prefabricados y manifolds", "Instalación en campo y planta", "Procedimientos certificados"],
        },
      ],
    },
    sandblasting: {
      overline: "Arenado y Pintura Industrial",
      title: "ARENADO",
      titleLine2: "Y PINTURA",
      subtitle:
        "Tratamiento superficial para piezas y equipos del sector Oil & Gas. Preparación de superficies con estándares de industria. Servicio en planta propia o en campo.",
      items: [
        {
          tag: "ARENADO",
          title: "Arenado Industrial",
          desc: "Limpieza abrasiva de superficies metálicas. Eliminación de óxido, escamas y recubrimientos anteriores. Preparación para pintura.",
        },
        {
          tag: "PINTURA",
          title: "Pintura Anticorrosiva",
          desc: "Aplicación de recubrimientos anticorrosivos para entornos agresivos de Oil & Gas. Protección de largo plazo.",
        },
        {
          tag: "EQUIPOS",
          title: "Equipos Oil & Gas",
          desc: "Especialización en piezas y equipos metálicos del sector: piletas, cisternas, estructuras, tanques y componentes de campo.",
        },
      ],
    },
    piping: {
      overline: "Piping & Estructuras Industriales",
      title: "ESTRUCTURAS",
      titleLine2: "E INGENIERÍA",
      subtitle:
        "Desarrollamos estructuras metálicas, skids y piping con ingeniería propia. Fabricación e instalación de sistemas modulares para operaciones industriales Oil & Gas.",
      items: [
        {
          tag: "ESTRUCTURAS",
          title: "Estructuras y Plataformas",
          desc: "Estructuras metálicas y plataformas industriales para soporte de equipos, accesos seguros y trabajo en altura. Fabricación a medida según requerimientos de campo.",
        },
        {
          tag: "SKIDS",
          title: "Skids Modulares",
          desc: "Plataformas modulares para montaje de equipos mecánicos, eléctricos e instrumentación. Diseño para instalación y desinstalación rápida en campo.",
        },
        {
          tag: "PIPING",
          title: "Piping Industrial",
          desc: "Sistemas de tuberías para transporte de fluidos y lodos de perforación. Prefabricados, manifolds y conexiones según especificaciones de obra.",
        },
        {
          tag: "TRAILERS",
          title: "Trailers y Módulos",
          desc: "Módulos habitacionales y de servicio para sitios remotos. Oficinas móviles, dormitorios e instalaciones temporales para operaciones en campo.",
        },
      ],
    },
    bombas: {
      overline: "Bombas, Cisternas y Tanques",
      title: "TRANSFERENCIA",
      titleLine2: "Y ALMACENAMIENTO",
      subtitle:
        "Suministramos equipos para el manejo seguro de fluidos y combustibles. Bombas de alta eficiencia, cisternas certificadas y tanques con componentes de seguridad para industria Oil & Gas.",
      items: [
        {
          tag: "BOMBAS",
          title: "Bombas Centrífugas",
          desc: "Bombas Mission 4×3 25HP y 8×6 100HP para manejo de agua, lodos y fluidos corrosivos. Diseño centrífugo para transferencia eficiente en operaciones de perforación y terminación.",
        },
        {
          tag: "CISTERNAS GASOIL",
          title: "Cisternas de Gasoil",
          desc: "Cisterna de 20m3 con batea de seguridad, bomba surtidora con caudalímetro y filtro, y tablero antiexplosivo. Almacenamiento seguro de combustible en operaciones de campo.",
        },
        {
          tag: "CISTERNAS AGUA",
          title: "Cisternas y Tanques de Agua",
          desc: "Desde 3.500 lts hasta 36.000 lts. Cisterna de 3.500 lts con bomba surtidora, tanques 3×9 (27m3) y 3×12 (36m3) con batea de seguridad.",
        },
        {
          tag: "TABLEROS",
          title: "Tableros Antiexplosivos",
          desc: "Tableros eléctricos antiexplosivos certificados para entornos con presencia de gases y vapores inflamables. Componentes seguros para zona clasificada.",
        },
      ],
    },
    technology: {
      overline: "Proyectos Destacados",
      title: "17 PILETAS",
      titleHighlight: "EN 3 MESES",
      partner: "Caso de Éxito",
      sipcotitle: "FABRICACIÓN",
      sipcohighlight: "A MEDIDA",
      sipcoDesc:
        "17 piletas de acumulación de 70m3 y 80m3 diseñadas y fabricadas en planta propia. Entregadas en plazo para operaciones de perforación y terminación en la Cuenca Neuquina.",
      funcLabel: "Unidades Entregadas",
      funcValue: "17 Piletas de Acumulación",
      appLabel: "Capacidad Unitaria",
      appValue: "70m3 — 80m3 c/u",
      sysLabel: "Plazo de Ejecución",
      sysValue: "3 Meses — Nov.25 / Feb.26",
      partnerTag: "CUENCA NEUQUINA — PERFORACIÓN · TERMINACIÓN · FLOWBACK",
    },
    contact: {
      overline: "Contacto",
      title: "HABLEMOS",
      namePh: "Nombre",
      emailPh: "Email",
      companyPh: "Empresa",
      serviceLabel: "Servicio de Interés",
      messagePh: "Mensaje / Requerimiento Técnico",
      submitBtn: "Enviar Consulta",
      serviceOptions: [
        "Alquiler de Equipos",
        "Fabricación y Construcción",
        "Arenado y Pintura Industrial",
        "Consulta General",
      ],
      infoTitle: "INFORMACIÓN",
      locLabel: "Ubicación",
      locValue: "Parque Industrial Neuquén (PIN)",
      locSub: "Neuquén, Argentina",
      phonesLabel: "Teléfonos",
      emailLabel: "Email",
      webLabel: "Web",
      statusLine: "STATUS: OPERATIVO",
    },
    footer: {
      rights: "© 2026 ROLCKA SRL",
      location: "Parque Industrial Neuquén, Argentina",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      clients: "Clientes",
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      clients: "Clients",
      contact: "Contact",
      lang: "ES",
      servicesDropdown: [
        { label: "Fabrication", path: "/servicios/fabricacion" },
        { label: "Rental & Sales", path: "/servicios/alquiler" },
        { label: "Piping & Structures", path: "/servicios/piping" },
        { label: "Sandblasting & Industrial Painting", path: "/servicios/arenado" },
      ],
    },
    hero: {
      overline: "OIL & GAS — INTEGRAL SERVICES",
      line1: "INTEGRAL",
      line2: "SOLUTIONS",
      line3: "OIL & GAS",
      subtitle:
        "Specialized in providing integral solutions for the oil industry. Own metallurgical plant, certified equipment and uninterrupted operations since 2013.",
      ctaQuote: "Contact Us",
      ctaServices: "View Services",
      since: "Since",
      base: "Base",
      zone: "Zone",
    },
    services: {
      overline: "Business Units",
      title: "OUR SERVICES",
      subtitle:
        "Metalworking fabrication, equipment rental & sales, and surface treatment for the Oil & Gas industry in the Neuquén Basin.",
      items: [
        {
          num: "01",
          title: "METALWORKING EQUIPMENT FABRICATION",
          hook: "Own plant — Custom-built equipment for Oil & Gas",
          desc: "We specialize in designing and fabricating metalworking equipment for the Oil & Gas sector, from mud tanks to custom structures, with our own plant and in-house quality control.",
          detail: "TANKS · CISTERNS · STRUCTURES · PIPING · SKIDS",
          tag: "Fabrication",
          path: "/servicios/fabricacion",
        },
        {
          num: "02",
          title: "EQUIPMENT RENTAL & SALES",
          hook: "Certified tanks · Centrifugal pumps · Cisterns",
          desc: "We offer rental and sales of accumulation/agitation tanks, centrifugal pumps and cisterns with technical and operational certification for drilling, completion and flowback operations.",
          detail: "DRILLING · COMPLETION · FLOWBACK",
          tag: "Rental",
          path: "/servicios/alquiler",
        },
        {
          num: "03",
          title: "PIPING & INDUSTRIAL STRUCTURES",
          hook: "Own engineering — Structures, skids and piping to spec",
          desc: "We develop metal structures, skids and piping with our own engineering, ensuring robustness and compliance with job specifications for Oil & Gas industrial installations.",
          detail: "STRUCTURES · SKIDS · PIPING · TRAILERS · PLATFORMS",
          tag: "Piping",
          path: "/servicios/piping",
        },
        {
          num: "04",
          title: "SANDBLASTING & INDUSTRIAL PAINTING",
          hook: "Certified industrial surface treatment",
          desc: "Industrial sandblasting and anti-corrosion painting for Oil & Gas equipment and components. Surface preparation and metal protection to industry standards. On-site or at our plant.",
          detail: "SANDBLASTING · ANTI-CORROSION · FINISHING · ON-SITE OR IN-PLANT",
          tag: "Sandblasting",
          path: "/servicios/arenado",
        },
      ],
      learnMore: "Learn more",
    },
    stats: {
      overline: "Operational Capacity",
      title: "NUMBERS THAT SPEAK",
      items: [
        { value: 2013, label: "Founded", suffix: "" },
        { value: 17, label: "Tanks Manufactured", suffix: "+" },
        { value: 15, label: "Active Clients", suffix: "+" },
        { value: 3, label: "International Missions", suffix: "" },
      ],
      intlLabel: "International Presence",
      intlMissions: "OTC Houston · Midland TX · CIPPE China",
    },
    clients: {
      overline: "The Company",
      title: "OUR COMPANY",
      lead: "We are a Team of specialist Professionals committed to the industrial, social and environmental development of the Oil & Gas sector. We contribute our knowledge to the growth of every company that shares our values and our passion for what we do every day.",
      misionLabel: "Mission",
      mision:
        "As a full-service company in the Oil & Gas sector, our goal is client satisfaction in an efficient and effective manner, generating a positive impact on the economic, social and environmental level.",
      visionLabel: "Vision",
      vision:
        "To be leaders in the Oil & Gas sector by providing an integral solution at national and international level.",
    },
    cta: {
      overline: "Get Started",
      title: "READY TO OPERATE?",
      subtitle: "Choose the contact method that best fits your operation.",
      options: [
        {
          icon: "form",
          label: "Technical Inquiry",
          desc: "Tell us your equipment, capacity or project requirements. We'll respond with the best solution.",
          action: "Start Inquiry",
          href: "/contact",
        },
        {
          icon: "pdf",
          label: "Technical Brochure",
          desc: "Equipment sheets, certifications and technical specifications in downloadable PDF.",
          action: "Download PDF",
          href: "#brochure",
        },
        {
          icon: "phone",
          label: "Call / WhatsApp",
          desc: "Quick equipment and availability inquiry. Immediate response.",
          action: "Contact Now",
          href: "https://wa.me/5492993323446",
        },
        {
          icon: "visit",
          label: "Plant Visit",
          desc: "Schedule a technical meeting at our facilities at Parque Industrial Neuquén.",
          action: "Schedule Visit",
          href: "/contact",
        },
      ],
    },
    about: {
      overline: "Who We Are",
      title: "TEAM OF",
      titleHighlight: "SPECIALISTS",
      subtitle:
        "We bring technical expertise and reliable execution to the growth of every company that shares our values and our passion for what we do every day.",
      historyLabel: "History",
      historyText:
        "ROLCKA has been operating in the Neuquén Basin since 2013, specializing in integral Oil & Gas solutions with its own metallurgical plant at the Neuquén Industrial Park. Regional focus with technical expansion toward the whole country and abroad.",
      missionLabel: "Mission",
      missionText:
        "As an integral service company in the Oil & Gas sector, our objective is customer satisfaction in an efficient and effective manner, generating a positive economic, social and environmental impact.",
      visionLabel: "Vision",
      visionText:
        "To be leaders in the Oil & Gas sector by providing an integral solution at the national and international level.",
      valuesLabel: "Our Values",
      valuesTitle: "WHAT DEFINES US",
      values: [
        {
          title: "Quality",
          desc: "Certified welders and procedures. Internal quality control at every stage of the process.",
        },
        {
          title: "Speed",
          desc: "We operate against schedule. On-time delivery, without exceptions.",
        },
        {
          title: "Certifications",
          desc: "ISO 9001, 14001 and 45001 in progress. Active leak-tightness cert. Vaca Muerta Cluster member.",
        },
        {
          title: "Safety",
          desc: "QHSE as an internal standard, not an external requirement.",
        },
        {
          title: "Integral Solutions",
          desc: "Rental, fabrication, sandblasting and painting. All under one roof.",
        },
      ],
      certsLabel: "Certifications",
      certsTitle: "STANDARDS & CERTIFICATIONS",
      certs: [
        {
          title: "ISO 9001",
          desc: "Quality Management",
          status: "Certification in progress",
          active: false,
        },
        {
          title: "ISO 14001",
          desc: "Environmental Management",
          status: "Certification in progress",
          active: false,
        },
        {
          title: "ISO 45001",
          desc: "Occupational Safety & Health",
          status: "Certification in progress",
          active: false,
        },
        {
          title: "Leak Tightness",
          desc: "Accumulation Tank Certificate",
          status: "Active Certificate",
          active: true,
        },
        {
          title: "VM Cluster",
          desc: "Vaca Muerta Cluster",
          status: "Active Member",
          active: true,
        },
      ],
      intlLabel: "International Presence",
      intlTitle: "GLOBAL REACH",
      intlMissions: [
        {
          event: "OTC Houston",
          desc: "Offshore Technology Conference — Houston, TX",
        },
        { event: "Midland Texas", desc: "Commercial Mission — Permian Basin" },
        {
          event: "CIPPE China",
          desc: "China Int'l Petroleum & Petrochemical Tech — Beijing",
        },
      ],
    },
    whyRolcka: {
      overline: "Why ROLCKA?",
      headlineLines: ["OWN PLANT.", "SINCE 2013."],
      subtitle:
        "Own metallurgical plant at the Neuquén Industrial Park. Over ten years operating in the Neuquén Basin, focused on construction, fabrication and maintenance of Oil & Gas equipment.",
      pillars: [
        {
          tag: "METALLURGICAL",
          title: "Own Industrial Plant",
          desc: "Own workshop at the Neuquén Industrial Park. Fabrication, repair and finishing without outsourcing. Full process and quality control.",
        },
        {
          tag: "TRACK RECORD",
          title: "10+ Years in the Basin",
          desc: "Operating uninterruptedly since 2013 in the Neuquén Basin. Proven experience in drilling, completion and flowback.",
        },
        {
          tag: "INTEGRAL",
          title: "Everything Under One Roof",
          desc: "Rental, fabrication, sandblasting and painting. No middlemen. No referrals. One company that delivers.",
        },
      ],
      stats: [
        { value: 2013, label: "Founded", suffix: "" },
        { value: 17, label: "Tanks Manufactured", suffix: "+" },
        { value: 15, label: "Active Clients", suffix: "+" },
        { value: 3, label: "International Missions", suffix: "" },
      ],
    },
    equipment: {
      overline: "Equipment Rental",
      title: "AVAILABLE",
      titleHighlight: "EQUIPMENT",
      subtitle:
        "Certified Oil & Gas equipment showcase. Available for rental in the Neuquén Basin. Contact us for availability.",
      groupPiletas: "TANKS",
      groupBombas: "CENTRIFUGAL PUMPS",
      groupCisternas: "CISTERNS",
      groupTanques: "WATER TANKS",
      groupTableros: "ELECTRICAL PANELS",
      capLabel: "CAPACITY",
      techLabel: "TECHNOLOGY",
      specLabel: "SPECIFICATIONS",
      certLabel: "CERTIFICATION",
      estanqueidad: "LEAK-TIGHT",
      sipco: "SIPCO HOUSTON",
      ctaLabel: "Check Availability",
    },
    fabrication: {
      overline: "Fabrication & Metalworking",
      title: "OWN",
      titleLine2: "METALLURGICAL PLANT",
      subtitle:
        "If you have a blueprint, we build it. We work with our own standards and also custom builds for each client. Certified welders and procedures. Own plant at the Neuquén Industrial Park.",
      qualityLabel: "Guaranteed Quality",
      qualityDesc:
        "Certified welders and approved procedures for every production process.",
      groups: [
        {
          tag: "TANKS",
          title: "Tanks",
          desc: "Accumulation, mud agitation, flare and shaker tanks. Standard or custom design to client specifications.",
          specs: ["Accumulation & mud agitation", "With or without shaker", "Capacity up to 80m³", "Standard or custom design"],
        },
        {
          tag: "CISTERNS",
          title: "Cisterns & Storage Tanks",
          desc: "For fuel and water. Various capacities, built to client specifications with leak-tightness certification.",
          specs: ["Fuel and potable water", "Capacity up to 36,000 lts", "Containment bund included", "Pump and meter optional"],
        },
        {
          tag: "STRUCTURES",
          title: "Structures & Platforms",
          desc: "Metal structures, industrial supports and safe access for elevated work. Fabrication to client drawings.",
          specs: ["Certified structural steel", "Elevated platforms & access", "Industrial supports & frames", "Built to drawing"],
        },
        {
          tag: "PIPING",
          title: "Industrial Piping",
          desc: "Pipe systems for fluid and drilling mud transport. Prefabricated components, manifolds and connections for field and plant.",
          specs: ["Fluid and drilling mud transport", "Prefabricated & manifolds", "Field and plant installation", "Certified procedures"],
        },
      ],
    },
    sandblasting: {
      overline: "Sandblasting & Industrial Painting",
      title: "SANDBLASTING",
      titleLine2: "& PAINTING",
      subtitle:
        "Surface treatment for Oil & Gas equipment and components. Surface preparation to industry standards. Service at our plant or on-site.",
      items: [
        {
          tag: "SANDBLASTING",
          title: "Industrial Sandblasting",
          desc: "Abrasive cleaning of metal surfaces. Removal of rust, scale and previous coatings. Surface preparation for painting.",
        },
        {
          tag: "PAINTING",
          title: "Anti-Corrosion Painting",
          desc: "Application of anti-corrosion coatings for aggressive Oil & Gas environments. Long-term protection.",
        },
        {
          tag: "EQUIPMENT",
          title: "Oil & Gas Equipment",
          desc: "Specialization in metal components: tanks, cisterns, structures, storage tanks and field components.",
        },
      ],
    },
    piping: {
      overline: "Piping & Industrial Structures",
      title: "STRUCTURES",
      titleLine2: "& ENGINEERING",
      subtitle:
        "We develop metal structures, skids and piping with our own engineering. Fabrication and installation of modular systems for Oil & Gas industrial operations.",
      items: [
        {
          tag: "STRUCTURES",
          title: "Structures & Platforms",
          desc: "Metal structures and industrial platforms for equipment support, safe access and elevated work. Custom fabrication to field specifications.",
        },
        {
          tag: "SKIDS",
          title: "Modular Skids",
          desc: "Modular platforms for mounting mechanical, electrical and instrumentation equipment. Designed for fast on-site installation and removal.",
        },
        {
          tag: "PIPING",
          title: "Industrial Piping",
          desc: "Pipe systems for fluid and drilling mud transport. Prefabricated components, manifolds and connections to job specifications.",
        },
        {
          tag: "TRAILERS",
          title: "Trailers & Modules",
          desc: "Accommodation and service modules for remote sites. Mobile offices, dormitories and temporary facilities for field operations.",
        },
      ],
    },
    bombas: {
      overline: "Pumps, Cisterns & Tanks",
      title: "TRANSFER",
      titleLine2: "& STORAGE",
      subtitle:
        "We supply equipment for the safe handling of fluids and fuels. High-efficiency pumps, certified cisterns and storage tanks with safety components for the Oil & Gas industry.",
      items: [
        {
          tag: "PUMPS",
          title: "Centrifugal Pumps",
          desc: "Mission 4×3 25HP and 8×6 100HP pumps for water, mud and corrosive fluid handling. Centrifugal design for efficient transfer in drilling and completion operations.",
        },
        {
          tag: "FUEL CISTERNS",
          title: "Fuel Cisterns",
          desc: "20m3 cistern with safety bund, fuel pump with flow meter and filter, and explosion-proof panel. Safe fuel storage for field operations.",
        },
        {
          tag: "WATER TANKS",
          title: "Water Cisterns & Tanks",
          desc: "From 3,500 lts to 36,000 lts. 3,500 lt cisterns with supply pump, 3×9 (27m3) and 3×12 (36m3) tanks with safety bund.",
        },
        {
          tag: "PANELS",
          title: "Explosion-Proof Panels",
          desc: "Certified explosion-proof electrical panels for environments with flammable gases and vapors. Safe components for classified zones.",
        },
      ],
    },
    technology: {
      overline: "Featured Projects",
      title: "17 TANKS",
      titleHighlight: "IN 3 MONTHS",
      partner: "Case Study",
      sipcotitle: "CUSTOM",
      sipcohighlight: "FABRICATION",
      sipcoDesc:
        "17 accumulation tanks (70m3 and 80m3) designed and built at our own plant. Delivered on schedule for drilling and completion operations in the Neuquén Basin.",
      funcLabel: "Units Delivered",
      funcValue: "17 Accumulation Tanks",
      appLabel: "Unit Capacity",
      appValue: "70m3 — 80m3 each",
      sysLabel: "Execution Timeframe",
      sysValue: "3 Months — Nov.25 / Feb.26",
      partnerTag: "NEUQUÉN BASIN — DRILLING · COMPLETION · FLOWBACK",
    },
    contact: {
      overline: "Contact",
      title: "LET'S TALK",
      namePh: "Name",
      emailPh: "Email",
      companyPh: "Company",
      serviceLabel: "Service of Interest",
      messagePh: "Message / Technical Requirements",
      submitBtn: "Send Inquiry",
      serviceOptions: [
        "Equipment Rental",
        "Fabrication & Construction",
        "Sandblasting & Industrial Painting",
        "General Inquiry",
      ],
      infoTitle: "INFORMATION",
      locLabel: "Location",
      locValue: "Parque Industrial Neuquén (PIN)",
      locSub: "Neuquén, Argentina",
      phonesLabel: "Phones",
      emailLabel: "Email",
      webLabel: "Web",
      statusLine: "STATUS: OPERATIONAL",
    },
    footer: {
      rights: "© 2026 ROLCKA SRL",
      location: "Parque Industrial Neuquén, Argentina",
      services: "Services",
      about: "About",
      contact: "Contact",
      clients: "Clients",
    },
  },
};

export type Translations = (typeof translations)["es"];
