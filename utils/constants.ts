type ContentType = Array<{
  title: string;
  description: string;
  img: string;
}>;
const EDUCATION: ContentType = [
  {
    title: 'Education',
    description:
      'Currenly a student in the University of Massachusetts Lowell. I am pursuing a bachelors of science in computer science. Expected - 2024',
    img: '/assets/UML-Logo.png',
  },
];
const EXPERIENCES: ContentType = [
  {
    title: 'Athenahealth',
    description: 'Athenahealth description',
    img: '/assets/athenahealth.png',
  },
  {
    title: 'UML Research Intern',
    description: 'Worked with Professor Sashank Narain with scheduling research',
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

export const ALL_CONTENT = [...EDUCATION, ...EXPERIENCES, ...PROJECTS];