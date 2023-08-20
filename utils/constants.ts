type ContentType = Array<{
  title: string;
  description: string;
  img: string;
  link: string;
}>;

const EDUCATION: ContentType = [
  {
    title: 'Education',
    description: `Currenly a student in the University of Massachusetts Lowell. I am pursuing a bachelors of 
      science in computer science. Expected - May 2025`,
    img: '/assets/UML-Logo.png',
    link: 'https://www.uml.edu/',
  },
];
const EXPERIENCES: ContentType = [
  {
    title: 'Athenahealth Intern',
    description: `Interned at Athenahealth from June 2023 - August 2023. I used a comprehensive tech stack, 
      which consists of Typescript, React, and GraphQL Apollo Client for the front-end, while relying on Java 
      Spring Boot for the back-end, all supported by an Oracle database. I also adapted to Athenahealth's agile
      workflow making use of Atlassian Jira, Confluence, and Bitbucket for efficient project management, and collaboration.`,
    img: '/assets/athenahealth-icon.png',
    link: 'https://www.athenahealth.com/',
  },
  {
    title: 'Research Intern',
    description: `Researched linked scheduling in relation to networks to try to improve throughput and privacy. 
      Used Python to create algorithms and display data in a efficient and organized manner`,
    img: '/assets/UML-Logo.png',
    link: 'https://submit.petsymposium.org/2024.1/paper/54?cap=hcav54svgRTisvnBsTLSowtQwwTayc',
  },
];

const PROJECTS: ContentType = [
  {
    title: 'Track My Projects',
    description: `A webapp created using Mongodb, Express, React, and Node.js. Users can use this application to keep track of 
      your personal and professional projects and make use of tickets to work efficiently with thier team.`,
    img: '/assets/MERN Stack img.png',
    link: 'https://www.trackmyprojects.org/',
  },
  {
    title: 'IGN Video Player',
    description: `A fully responsive custom video player made using react. Fetching video data form the IGN api, users can interact 
      with this custom video player and with the video playlist.`,
    img: '/assets/ignVideoPlayer.png',
    link: 'https://jeffreychancodefoo2022.netlify.app/',
  },
];

const ALL_CONTENT: ContentType = [...EDUCATION, ...EXPERIENCES, ...PROJECTS];
const RESUME_PATH: string = '/assets/7_31_2023 Resume Jeffrey Chan.pdf';

export { ALL_CONTENT, RESUME_PATH };
