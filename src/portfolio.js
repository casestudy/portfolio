const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: `${process.env.PUBLIC_URL}/`,
  title: 'Home',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Femencha Azombo Fabrice',
  role: {
    en: 'Senior Full Stack Developer',
    fr: 'Développeur Full Stack Senior',
  },
  picture: 'fabrice.png',

  description: {
    en: 'Senior full stack developer with 9+ years of experience delivering reliable, user-focused web applications and DevOps-friendly solutions. Bilingual in English and French, I enjoy turning complex requirements into practical, scalable systems and working closely with cross-functional teams to ship meaningful results.',
    fr: "Développeur full stack senior avec plus de 9 ans d'expérience, spécialisé dans la création d'applications web fiables, centrées sur l'utilisateur et pensées pour les pratiques DevOps. Bilingue en anglais et en français, j'aime transformer des besoins complexes en solutions pratiques et évolutives, tout en collaborant étroitement avec des équipes multidisciplinaires pour livrer des résultats concrets.",
  },
  resume: {
    en: `${process.env.PUBLIC_URL}/cv/Femencha_Azombo_Fabrice_CV_Fullstack_developer.pdf`,
    fr: `${process.env.PUBLIC_URL}/cv/Femencha_Azombo_Fabrice_CV_Developeur_Fullstack.pdf`,
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/femencha/',
    github: 'https://github.com/casestudy',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Mora Health',
    description: {
      en: 'Mora is a high-trust health platform designed for the Canadian market. It provides a "Life-Stage" tracking system (Cycles, Pregnancy, Postpartum, Menopause) and a community space for peer support and family-building education.',
      fr: "Mora est une plateforme de santé de haute confiance conçue pour le marché canadien. Elle propose un système de suivi par « étape de vie » (Cycles, Grossesse, Post-partum, Ménopause) ainsi qu'un espace communautaire dédié au soutien entre pairs et à l'éducation sur la construction familiale.",
    },
    stack: ['TypeScript', 'React', 'Next.js', 'NestJS', 'S3', 'K8S', 'Helm', 'PostgreSQL', 'Drupal', 'PHP', 'GitHub Actions', 'GitOps', 'ArgoCD', 'Docker', 'Kubernetes', 'AWS', 'Capacitor', 'Composer', 'Nginx'],
    sourceCode: 'https://github.com/casestudy/mora',
    livePreview: 'https://github.com/casestudy',
    image: 'mora.png',
  },
  {
    name: 'Smart School',
    description: {
      en: 'Smart School is a comprehensive school management system that streamlines administrative tasks, enhances communication, and fosters a collaborative learning environment for students, teachers, and parents.',
      fr: "Smart School est un système de gestion scolaire complet qui rationalise les tâches administratives, améliore la communication et favorise un environnement d'apprentissage collaboratif pour les élèves, les enseignants et les parents.",
    },
    stack: ['TypeScript', 'React', 'React PDF', 'PostgreSQL', 'Ant Design', 'Node.js', 'Docker', 'Express.js', 'Webpack'],
    sourceCode: 'https://github.com/casestudy/smartschool-fe',
    livePreview: 'https://github.com',
    image: 'smartschool.png',
  },
]

const experience = [
  // experience can be added or removed
  // if there are no experience, Experience section won't show up
  {
    name: 'Allo Prof',
    position: {
      en: 'Full Stack Developer',
      fr: 'Développeur Full Stack',
    },
    startDate: 'Sep 2024',
    endDate: 'Present',
    tasks: {
      en: [
        'Worked on an educational platform providing assistance to students across Quebec and Canada using TypeScript, Angular, and NodeJS with a Drupal CMS.',
        'Led the integration of an interactive vocabulary exercise game developed in ReactJS with the Angular Standalone library using polyfills.',
        'Migrated the functionality managing game words to the Squidex CMS platform for better performance.',
        'Implemented key features such as Multi Level Sheets (MLS) and Group accounts for classroom teachers, leading to a 70% increase in engagement from students and teachers.',
        'Peer reviewed code on GitHub and managed deployments to the staging environment.',
        'Created test cases and performed End-to-End QA testing for all tickets to ensure proper functionality.',
        'In charge of data management for my team and ensuring proper data is collected for analytics and reporting purposes.',
      ],
      fr: [
        'Travaillé sur une plateforme éducative fournissant de l\'aide aux élèves du Québec et du Canada en utilisant TypeScript, Angular et NodeJS avec un CMS Drupal.',
        'Dirigé l\'intégration d\'un jeu de vocabulaire interactif développé en ReactJS avec la bibliothèque Angular Standalone à l\'aide de polyfills.',
        'Migré la gestion des mots du jeu vers la plateforme CMS Squidex pour de meilleures performances.',
        'Implémenté des fonctionnalités clés telles que les fiches multi-niveaux (MLS) et les comptes de groupe pour les enseignants, entraînant une augmentation de 70% de l\'engagement.',
        'Revue de code sur GitHub et gestion des déploiements en environnement de staging.',
        'Créé des cas de test et effectué des tests QA de bout en bout pour tous les tickets afin de garantir le bon fonctionnement.',
        'Intendant de données pour mon équipe et de la collecte correcte des données à des fins d\'analyse et de reporting.',
      ],
    },
    stack: ['TypeScript', 'Angular', 'NodeJS', 'ReactJS', 'Drupal', 'Squidex', 'Docker', 'GCP', 'Cloudbuild', 'Terraform', 'Firebase', 'Kubernetes', 'NginX', 'SSR', 'Composer', 'Git', 'JIRA'],
  },
  {
    name: 'Blue Window LTD',
    position: {
      en: 'Full Stack Developer',
      fr: 'Développeur Full Stack',
    },
    startDate: 'Dec 2022',
    endDate: 'Jun 2024',
    tasks: {
      en: [
        'Developed SEO/Marketing platforms for iGaming labels across Europe and North America using JavaScript/TypeScript, NodeJS, and Angular.',
        'Led the RBO team, managing a PBN developed in PHP, JavaScript, and CSS for content creation, management, and deployment across 8000+ websites.',
        'Implemented CI/CD pipelines using Cloud Build to automate code deployment from GitHub to GCP. Configured JIRA pipeline for direct PR viewing from GitHub.',
        'Led the landing page project using Hugo and Wrangler to create 5000+ pages for traffic redirection, resulting in a 30% increase in traffic towards affiliate brands within one month.',
        'Developed widgets for Athena, a React project integrating CTA elements across 3000+ websites as Cloudflare workers.',
        'Optimized Core Web Vitals (CWV) metrics from below 40% to above 98% on multiple pages and sites.',
        'Led Toolkit project, writing Python scripts to configure features on 5000+ sites via the Cloudflare API and crawl 3000+ websites to disable Google indexation for external links.',
        'Managed code reviews and approvals; held weekly catch-up meetings to discuss performance.',
      ],
      fr: [
        'Développé des plateformes SEO/Marketing pour des labels iGaming en Europe et en Amérique du Nord avec JavaScript/TypeScript, NodeJS et Angular.',
        'Dirigé l\'équipe RBO, gérant un PBN développé en PHP, JavaScript et CSS pour la création, la gestion et le déploiement de contenu sur plus de 8000 sites.',
        'Implémenté des pipelines CI/CD via Cloud Build pour automatiser le déploiement de GitHub vers GCP. Configuré le pipeline JIRA pour la visualisation directe des PRs depuis GitHub.',
        'Dirigé le projet de pages d\'atterrissage avec Hugo et Wrangler pour créer plus de 5000 pages, entraînant une augmentation de 30% du trafic vers les marques affiliées en un mois.',
        'Développé des widgets pour Athena, un projet React intégrant des éléments CTA sur plus de 3000 sites en tant que Cloudflare workers.',
        'Optimisé les métriques Core Web Vitals (CWV) de moins de 40% à plus de 98% sur plusieurs pages et sites.',
        'Dirigé le projet Toolkit en écrivant des scripts Python pour configurer des fonctionnalités sur plus de 5000 sites via l\'API Cloudflare et explorer plus de 3000 sites.',
        'Géré les revues de code et les approbations ; tenu des réunions hebdomadaires de suivi des performances.',
      ],
    },
    stack: ['TypeScript', 'JavaScript', 'Angular', 'NodeJS', 'PHP', 'React', 'Hugo', 'Python', 'Cloudflare', 'Docker', 'GCP', 'Cloudbuild', 'Terraform', 'Firebase', 'Kubernetes', 'Composer', 'WAMP', 'XDebug', 'Git', 'JIRA'],
  },
  {
    name: 'Data Tellers Inc.',
    position: {
      en: 'Frontend Developer',
      fr: 'Développeur Frontend',
    },
    startDate: 'Jun 2022',
    endDate: 'Nov 2022',
    tasks: {
      en: [
        'Developed a TypeScript-based logistics management platform using React and Ant Design, enabling electronic management of client operations and contracts.',
        'Used Figma to create high-quality mock-ups for a consistent style guide and responsive design across all pages.',
        'Collaborated with product owners to ensure business needs were met during product development.',
        'Designed and implemented a system-wide notification and time usage microservice enabling users to send notifications while maintaining the current state.',
      ],
      fr: [
        'Développé une plateforme de gestion logistique en TypeScript avec React et Ant Design, permettant la gestion électronique des opérations et contrats clients.',
        'Utilisé Figma pour créer des maquettes de haute qualité assurant un guide de style cohérent et un design responsive sur toutes les pages.',
        'Collaboré avec les product owners pour s\'assurer que les besoins métier étaient respectés lors du développement.',
        'Conçu et implémenté un microservice de notification système et de suivi du temps permettant aux utilisateurs d\'envoyer des notifications tout en maintenant l\'état courant.',
      ],
    },
    stack: ['TypeScript', 'React', 'Ant Design', 'Express.js', 'Webpack', 'Jest', 'AWS', 'Cloudrun', 'Figma', 'GraphiQL', 'Git', 'JIRA'],
  },
  {
    name: 'Smart Systems Corp',
    position: {
      en: 'Lead Software Developer',
      fr: 'Développeur Logiciel Principal',
    },
    startDate: 'Nov 2018',
    endDate: 'May 2022',
    tasks: {
      en: [
        'Led a web development team of five developers, overseeing SCRUM meetings, user story creation, mockups, code reviews, and tool selection.',
        'Migrated the database infrastructure from MySQL to PostgreSQL, resulting in a 75% increase in database query speed.',
        'Re-designed the backend from PHP to NodeJS, increasing server request speed by 35%.',
        'Created a NodeJS and Express API to connect the front-end (mobile and desktop) with the database for seamless data exchange.',
        'Designed and developed reusable React components, resulting in an 80% increase in development speed.',
        'Conducted Quality Assurance and Test-Driven Development by writing manual and automated test cases using Jest.',
        'Held weekly catch-up and performance review meetings for effective ticket assignment and workflow updates.',
      ],
      fr: [
        'Dirigé une équipe de cinq développeurs web, supervisant les réunions SCRUM, la création de user stories, les maquettes, les revues de code et la sélection des outils.',
        'Migré l\'infrastructure de base de données de MySQL vers PostgreSQL, entraînant une augmentation de 75% de la vitesse des requêtes.',
        'Refactorisé le backend de PHP vers NodeJS, augmentant la vitesse des requêtes serveur de 35%.',
        'Créé une API NodeJS et Express pour connecter le front-end (mobile et desktop) à la base de données.',
        'Conçu et développé des composants React réutilisables, entraînant une augmentation de 80% de la vitesse de développement.',
        'Effectué des tests de qualité et du développement piloté par les tests (TDD) avec Jest.',
        'Tenu des réunions hebdomadaires de suivi et de revue des performances pour l\'attribution des tickets.',
      ],
    },
    stack: ['React', 'NodeJS', 'Express.js', 'PostgreSQL', 'PHP', 'Jest', 'GraphiQL', 'Docker', 'GCP', 'Cloudbuild', 'Git', 'JIRA', 'Slack'],
  },
  {
    name: 'Pether Solutions Corp',
    position: {
      en: 'Junior Software Developer',
      fr: 'Développeur Logiciel Junior',
    },
    startDate: 'Jul 2016',
    endDate: 'Aug 2018',
    tasks: {
      en: [
        'Built an Insurance Health Claim Application using JavaScript, PHP, CSS, and Java/JavaFX, reducing claim waiting time from over 7 days to just 2 days.',
        'Documented platforms using Confluence to ensure seamless installations and device compatibility.',
        'Tested software and performed manual Quality Assurance and Unit Testing to ascertain software quality.',
      ],
      fr: [
        'Développé une application de gestion des demandes d\'assurance santé en JavaScript, PHP, CSS et Java/JavaFX, réduisant le délai de traitement de plus de 7 jours à seulement 2 jours.',
        'Documenté les plateformes avec Confluence pour garantir des installations fluides et la compatibilité des appareils.',
        'Testé les logiciels et effectué des tests de qualité manuels et des tests unitaires.',
      ],
    },
    stack: ['JavaScript', 'PHP', 'CSS', 'Java', 'JavaFX', 'Jenkins', 'Composer', 'WAMP', 'XDebug', 'Jasper', 'Confluence', 'Git', 'JIRA'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Angular',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
  'Next.js',
  'NestJS',
  'Node.js',
  'Express.js',
  'S3',
  'K8S',
  'Helm',
  'PostgreSQL',
  'MySQL',
  'Drupal',
  'Squidex',
  'PHP',
  'Java',
  'JavaFX',
  'Python',
  'Hugo',
  'Wrangler',
  'Cloudflare',
  'Cloud Run',
  'Cloudbuild',
  'GCP',
  'Google Analytics',
  'Figma',
  'JIRA',
  'Slack',
  'Confluence',
  'Jenkins',
  'GitHub Actions',
  'GitOps',
  'ArgoCD',
  'Docker',
  'Kubernetes',
  'AWS',
  'Terraform',
  'Firebase',
  'GraphiQL',
  'JSON',
  'WAMP',
  'XDebug',
  'Capacitor',
  'Composer',
  'Nginx',
  'React PDF',
  'Ant Design',
  'Webpack',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ffmencha@gmail.com',
}

const education = [
  // education can be added or removed
  // if there are no education entries, Education section won't show up
  {
    school: 'Montreal College of Information Technology (MCIT), Quebec, Canada',
    degree: {
      en: 'Attestation of Collegiate Studies in Cyber Security',
      fr: 'Attestation d\'études collégiales en cybersécurité',
    },
    startDate: '2025',
    endDate: '2026',
  },
  {
    school: 'University of Buea, Cameroon',
    degree: {
      en: 'Master Degree in Computer Science',
      fr: 'Master en Informatique',
    },
    startDate: '2019',
    endDate: '2021',    
    credential: {
      en: 'Assessed as equivalent to a Master\'s Degree from a Canadian University by WES and MIFI du Québec',
      fr: 'Évalué comme équivalent à un Master d\'une université canadienne par WES et MIFI du Québec',
    },  
  },
  {
    school: 'University of Buea, Cameroon',
    degree: {
      en: 'Bachelor Degree in Computer Science',
      fr: 'Licence en Informatique',
    },
    startDate: '2012',
    endDate: '2016',    
    credential: {
      en: 'Assessed as equivalent to a Bachelor\'s Degree from a Canadian University by WES and MIFI du Québec',
      fr: 'Évalué comme équivalent à une Baccalauréat d\'une université canadienne par WES et MIFI du Québec',
    },  
  }
]

export { header, about, projects, experience, education, skills, contact }
