import parse from 'html-react-parser';

import hero from './masthead.twig';
import data from './masthead.yml';
import './masthead.css';

const settings = {
  title: 'Regions/Masthead'
}

export const Hero = {
  name: 'Masthead',
  render: (args) => parse(hero(args)),
  // argTypes: {
  //   heroType: {
  //     options: ['Error', 'Reminder', 'Hint'],
  //     control: { type: 'select' },
  //   },
    args: { ...data },
};


// export const hero = {
//   render: (args) => parse(hero(args)),
//   args: { ...data },
// };

// export const Reminder = {
//   ...hero,
//   name: 'hero Reminder',
//   args: {
//     ...data,
//     heroType: 'is-reminder',
//   },
// };

export default settings;