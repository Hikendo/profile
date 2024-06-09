export interface Profile {
  profesionalProfile: ProfesionalProfile;
}

export interface ProfesionalProfile {
  name:                string;
  data:                Data;
  abstract:            string;
  workExperience:      WorkExperience[];
  education:           Education[];
  technicalSkills:     TechnicalSkill[];
  interpersonalSkills: string[];
  languages:           Languages[];
  courses:             Course[];
}

export interface Course {
  name:        string;
  institution: string;
  endDate:     string;
  url:         string;
}

export interface Data {
  email:       string;
  phoneNumber: string;
  address:     string;
  linkedin:    string;
  github:      string;
  url:         string;
  imgUrl:      string;
}

export interface Education {
  academicDegree: string;
  institution:    string;
  startDate:      string;
  endDate:        string;
}

export interface Languages {
  language: string;
  level:    Level[];
}

export interface Level {
  speechLevel?:  string;
  writingLevel?: string;
  readingLevel?: string;
}

export interface TechnicalSkill {
  skill: string;
  level: number;
}

export interface WorkExperience {
  jobTitle:   string;
  enterprise: string;
  startDate:  string;
  endDate:    string;
  activities: string[];
}


 export enum Technologies  {
   BPM_IBM_BAW='BPM IBM BAW',
   JavaScript='JavaScript',
   HTML5='HTML5',
   CSS='CSS',
   SOAPUI='SOAPUI',
   Excel='Excel',
   Power_Point='Power Point',
   Word='Word',
   XML='XML',
   Bootstrap='Bootstrap',
   Mustache='Mustache',
   PHP='PHP',
   CSS3='CSS3',
   SASS='SASS',
   JQuery='JQuery',
   AWS='AWS',
   Google_APIs='Google API’s',
   Azure_APIs='Azure API’s',
   Shell='Shell',
   Linux='Linux',
   Laravel='Laravel',
   Angular='Angular',
   MySQL='MySQL',
   UML='UML',
   PostgreSQL='PostgreSQL',
   React='React',
   MariaDB='MariaDB',
   Microsoft_SQL_Server='Microsoft SQL server',
   Office='Office',
   Apache='Apache',
   Google_Cloud='Google Cloud',
   Microsoft_Azure='Microsoft Azure',
   Docker='Docker',
   Tableu='Tableu',
   SQL= 'SQL'
};

export enum interpersonalSkill {
  COMUNICACION = 'Comunicación efectiva',
  TRABAJO_EN_EQUIPO = 'Trabajo en equipo',
  LIDERAZGO = 'Liderazgo',
  RESOLUCION_DE_CONFLICTOS = 'Resolución de conflictos',
  EMPATIA = 'Empatía',
  NEGOCIACION = 'Negociación',
  ADAPTABILIDAD = 'Adaptabilidad',
  CREATIVIDAD = 'Creatividad',
  PROACTIVO= 'Proactivo',
  CONCENTRADO= 'Comprometido con los objetivos',
  ANALISIS= 'Analiza situaciones complejas para la toma de decisiones'
}
