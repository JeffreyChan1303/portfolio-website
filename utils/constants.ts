type ContentType = Array<{
  title: string;
  description: string;
  img: string;
}>;

const EDUCATION: ContentType = [
  {
    title: 'Education',
    description:
      'Currenly a student in the University of Massachusetts Lowell. I am pursuing a bachelors of science in computer science. Expected - May 2025',
    img: '/assets/UML-Logo.png',
  },
];
const EXPERIENCES: ContentType = [
  {
    title: 'Athenahealth Intern',
    description: 'Interned at Athenahealth from June 2023 - August 2023. Used askdljfn',
    img: '/assets/athenahealth-icon.png',
  },
  {
    title: 'Research Intern',
    description:
      'Worked with Professor Sashank Narain with scheduling researchWorked with Professor Sashank Narain with scheduling researchWorked with Professor Sashank Narain with scheduling research',
    img: '/assets/UML-Logo.png',
  },
];

const PROJECTS: ContentType = [
  {
    title: 'Track My Projects',
    description:
      'A webapp created using Mongodb, Express, React, and Node.js. Users can use this application to keep track of your personal and professional projects and make use of tickets to work efficiently with thier team.',
    img: '/assets/MERN Stack img.png',
  },
  {
    title: 'IGN Video Player',
    description:
      'A fully responsive custom video player made using react. Fetching video data form the IGN api, users can interact with this custom video player and with the video playlist.',
    img: '/assets/ignVideoPlayer.png',
  },
];

const ALL_CONTENT: ContentType = [...EDUCATION, ...EXPERIENCES, ...PROJECTS];
const RESUME_PATH: string = '/assets/7_31_2023 Resume Jeffrey Chan.pdf';

export { ALL_CONTENT, RESUME_PATH };
