import {interpersonalSkill, Technologies , Profile } from '../interfaces/profile';

export const dataProfile: Profile = {
  profesionalProfile: {
    name:'José Manuel Martínez Antonio',
    data: {
      email: 'josema.k303@gmail.com',
      phoneNumber: '712 213 9696',
      address: 'El Oro, Estado de México',
      linkedin: 'https://www.linkedin.com/in/jos%C3%A9-manuel-mart%C3%ADnez-antonio-487a4813a/',
      github: 'https://github.com/Hikendo'
    },
    abstract:'Soy un desarrollador con más de 8 años de experiencia como Ingeniero en Computación especializado en Desarrollo Web, con especialización en tecnologías como JavaScript, HTML, CSS, Angular y React. Mi trayectoria me ha permitido participar en la planificación de sprints, definición de historias de usuario, análisis de requisitos y diseño de módulos. La codificación de componentes, módulos, servicios y su integración continua en sistemas de control de versiones ha sido una de mis principales responsabilidades. En mi último proyecto, como parte del equipo de Softtek, colaboré como Desarrollador Web utilizando la herramienta Business Automation Workflow (BAW) de IBM, lo que me permitió aprender sobre BPMN (Business Process Model Notation) para analizar componentes heredados, ejecutar pruebas y migrar servicios. Me caracterizo por ser proactivo, trabajar en equipo y estar comprometido con la excelencia en cada tarea. Mi enfoque se centra en encontrar soluciones efectivas ante cualquier desafío, seguido de un análisis exhaustivo para mejorar y optimizar procesos. Simplificar y hacer eficiente cada actividad es mi objetivo principal. Estoy convencido de que mi experiencia y habilidades pueden ser un valioso aporte para su equipo, donde puedo seguir creciendo y contribuyendo al éxito de los proyectos. "El éxito se construye con la proactividad de cada individuo y la fuerza del trabajo en equipo. Juntos, no solo alcanzamos nuestras metas, sino que las superamos." ',
    workExperience: [
      {
        jobTitle:'Web Developer',
        enterprise:'Softtek',
        startDate:'28/9/2022',
        endDate:'15/9/2023',
        activities:[
          'Analicé componentes con notación BPMN, evaluando scripts, dependencias, procesos y flujos de trabajo.',
          'Estimé los tiempos para cada fase del proyecto, garantizando un cronograma eficiente.',
          'Realicé pruebas unitarias en el Process Portal BAW para asegurar la calidad y el funcionamiento óptimo de los componentes.',
          'Gestioné ramas de desarrollo, manteniendo un control riguroso del código en evolución.',
          'Desarrollé y probé consultas en SOAP XML, integrándolas en los flujos del sistema.',
          'Elaboré Test Cases en BPM para validar los procesos implementados.',
          'Migré componentes de servicios integrados a web services, adoptando una arquitectura de microservicios.',
          'Modelé procesos de negocio en Process Designer BPM BAW de manera eficiente y precisa.',
          'Brindé soporte y actualicé scripts, coaches views e interfaces con HTML, CSS y JavaScript para mejorar la experiencia del usuario y la compatibilidad con estándares actuales.',
        ]
      },
      {
        jobTitle:'Administrador de servidores / Web Developer',
        enterprise:'CETED - FES Acatlán UNAM',
        startDate:'20/7/2019',
        endDate:'15/7/2022',
        activities:[
          'Analicé, desarrollé y actualicé componentes de plataformas Moodle para asegurar su funcionalidad y relevancia.',
          'Personalicé temas web basados en Moodle con JavaScript, HTML, CSS, Mustache y PHP para mejorar la experiencia del usuario.',
          'Documenté arquitecturas cliente-servidor, servidores espejo y planes de migración a AWS.',
          'Generé manuales de usuario y procedimientos de mantenimiento.',
          'Auxilié en la publicación de contenido web variado de autoría docente para alumnos.',
          'Integré APIs de AWS, Google y Microsoft Azure en Moodle.',
          'Desarrollé reportes en Excel para análisis estadísticos de usuarios.',
          'Optimicé procesos del servidor, como respaldos y procesos cron.',
          'Capacité y di soporte técnico al personal administrativo, docente y estudiantil de forma remota y presencial.',
          'Realicé tareas administrativas como el alta de sitios Moodle y la matriculación de usuarios.',
          'Analicé y personalicé usuarios, roles y permisos en Moodle para garantizar un entorno seguro.',
          'Modifiqué módulos PHP de Moodle según las necesidades del proyecto.',
          'Administré bases de datos SQL usando MariaDB, MySQL Workbench y terminales Linux.',
          'Generé transacciones SQL de altas de cuentas estudiantiles, actualizaciones y consultas.',
          'Generé reportes SQL usando procedimientos almacenados con parámetros.',
          'Programé respaldos periódicos.',
          'Optimicé configuraciones.',
          'Administré servidores Linux basados en CentOS y Ubuntu.',
          'Generé usuarios, roles y llaves de acceso SSH para usuarios Linux.',
          'Optimicé configuraciones.',
          'Configuré virtual hosts, dominios, certificados SSL, firewalls OWASP.',
          'Instalé desde cero plataformas Moodle.',
          'Migré servidores Linux',
          'Instalé desde cero servidores Linux Rocky Linux, servidores web y de base de datos.',
          'Configuré servidores de respaldo.',

        ]
      },
      {
        jobTitle:'Web Developer',
        enterprise:'ECA BUSINESS GROUP',
        startDate:'15/6/2017',
        endDate:'28/3/2018',
        activities:[
          'Generé componentes, módulos y servicios Angular reutilizables, mejorando la experiencia del usuario.',
          'Integré el consumo de servicios web API con Angular, integrando datos dinámicamente en el Front End.',
          'Implementé autenticación basada en JWT para asegurar datos y privacidad.',
          'Participé en el diseño de bases de datos relacionales en PostgreSQL para almacenar datos georreferenciados.',
          'Participé en la generación de un visor geográfico con Leaflet, Angular y PostgreSQL para visualizar datos geoespaciales interactivamente.',
          'Generé informes de estado, diagramas de flujo y modelos entidad-relación para una documentación clara del proyecto.',
          'Administré plataformas basadas en WordPress.',
          'Personalicé temas y componentes en WordPress con CSS, JS y PHP para adaptarlos a las necesidades de los proyectos.',
          'Creé servicios End Point API con Laravel para una comunicación eficiente y segura entre módulos del sistema.',
          'Implementé operaciones CRUD en MySQL y PHP Laravel.',
          'Desarrollé un módulo de proyección de datos con tablas, gráficos y mapas usando librerías JavaScript.',
        ]
      },

    ],
    education:[
      {
        academicDegree:'Ingeniería en Computación',
        institution:'Centro Universitario UAEM Atlacomulco',
        startDate:'2010',
        endDate:'2015'
      }
    ],
    technicalSkills:[
      {
        skill: Technologies.HTML5 ,
        level:85
      },
      {
        skill: Technologies.JavaScript ,
        level:95
      },
      {
        skill: Technologies.Angular ,
        level:85
      },
      {
        skill: Technologies.React ,
        level:75
      },
      {
        skill: Technologies.CSS3 ,
        level:70
      },
      {
        skill: Technologies.PHP ,
        level:70
      },
      {
        skill: Technologies.SQL ,
        level:80
      },
    ],
    interpersonalSkills:[
      interpersonalSkill.ADAPTABILIDAD,
      interpersonalSkill.ANALISIS,
      interpersonalSkill.COMUNICACION,
      interpersonalSkill.CONCENTRADO,
      interpersonalSkill.CREATIVIDAD,
      interpersonalSkill.EMPATIA,
      interpersonalSkill.LIDERAZGO,
      interpersonalSkill.NEGOCIACION,
      interpersonalSkill.PROACTIVO,
      interpersonalSkill.RESOLUCION_DE_CONFLICTOS,
      interpersonalSkill.TRABAJO_EN_EQUIPO
    ],
    languages:[
      {
        language:'Español',
        speechLevel:'Nativo',
        writingLevel:'Nativo',
        readingLevel:'Nativo',
      },
      {
        language:'Ingles',
        speechLevel:'Básico',
        writingLevel:'Avanzado',
        readingLevel:'Avanzado',
      },
    ],
    courses:[
      {
        name:'Angular desde cero',
        institution:'Udemy',
        endDate:'30/5/2024',
        url:''
      },
      {
        name:'React',
        institution:'Udemy',
        endDate:'current',
        url:''
      },
      {
        name:'Análisis de datos con Tableau',
        institution:'Udemy',
        endDate:'10/9/2024',
        url:''
      },
      {
        name:'JavaScript Moderno',
        institution:'Udemy',
        endDate:'20/9/2023',
        url:''
      },
      {
        name:'SQL Server',
        institution:'Udemy',
        endDate:'11/5/2024',
        url:''
      },
      {
        name:'Inglés ',
        institution:'ABA English',
        endDate:'current',
        url:''
      },

    ]
  },


}

