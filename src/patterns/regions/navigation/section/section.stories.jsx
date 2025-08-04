import parse from 'html-react-parser';

import section from './section.twig';
// import data from './section.yml';
import './section.css';

const settings = {
  title: 'Regions/Navigation/Section'
}

export const Section = {
  name: 'section',
  render: (args) => parse(section(args)),
  argTypes: {
    args: { ...data },
  },
};


// export const section = {
//   render: (args) => parse(section(args)),
//   args: { ...data },
// };

// export const Reminder = {
//   ...section,
//   name: 'section Reminder',
//   args: {
//     ...data,
//     sectionType: 'is-reminder',
//   },
// };

export default settings;